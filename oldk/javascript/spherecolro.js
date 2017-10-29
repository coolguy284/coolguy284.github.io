// it will animate once it makes five frames
var frames=[], framei=0, nframes=200;
var rpix=0;
var scl=1.0; //change to 0.2 or something if the wait is unbearable

// intersections/lighting done with a distance function (df inside pcol). About that: http://iquilezles.org/www/material/nvscene2008/rwwtt.pdf

frameRate(30);
angleMode="r";
background(0);

var pcol=function(x, y, time){
    
    //sine and cosine of time with scale of 1.5
    var sint=Math.sin(time*1.5), cost=Math.cos(time*1.5);
    
    //Camera position. (raycast source)
    var px=2*sint, py=0, pz=-2*cost;
    
    //to my best knowledge, dx, dy, dz are perspective (raycast delta) normalized ofc
    var m=1/Math.sqrt(x*x + y*y + 1), d, l,
        dx=m*(x*cost - sint), dy=y*m, dz=m*(cost + x*sint);
    
    //12345 is seed
    var c=[], i, j=12345, k, numSpheres=4*3;//number of spheres times number of dimensions (const 3)
    for(i=0; i<numSpheres; i++){
        //j is static randomness, stays the same each time pcol is called.
        j^=j>>4;
        j^=i*i*12345 + 19123;
        c[i]=(i + 20)/(numSpheres + 20)*Math.sin(time*(numSpheres-i+3)*0.375 + j*0.2)*1.1 + [0.1, -0.1, -0.1][i%3];
    }
    
    var idx=0, id;
    var df=function(x, y, z){
        
        //j is the index in the sphere array "c"
        //m is minimum distance to a sphere
        for(var j=0, m=4; j<numSpheres; j+=3){
            //kx, ky, kz are the respective distances to the center of the current sphere
            var kx=x - c[j], ky=y - c[j + 1], kz=z - c[j + 2];
            
            //l is the euclidian distance to the current sphere
            l=kx*kx + ky*ky + kz*kz;
            
            //if the distance is less than the previous closest, set the index (idx) to j
            //and save the last length in m
            if(l<m){m=l; idx=j;}
        }
        //0.42 is radius.
        //formula for a sphere (x*x+y*y+z*z (a.k.a. m) - radius)
        m=Math.sqrt(m) - 0.42;
        
        //Walls 
        //If the distance to one of the walls is less than to one of the previous objects
        //set the distance (m) to the distance to that wall!
        
        //save which wall you hit in idx
        if(1 - y < m){idx=-2; m=1 - y;}
        if(1 - z < m){idx=-3; m=1 - z;}
        if(x + 1 < m){idx=-4; m=x + 1;}
        
        //note to mtrn, why not compare squared wall dists with squared sphere dist, and only take the sqrt
        //if you are going to hit a sphere? Would be faster.
        
        return m;
    };
    
    
    for(i=d=0; i<50; i++){
        //call the distance function
        m=df(px, py, pz);
        //raycast by delta times distance function (the most you could move without intersection)
        px+=dx*m; py+=dy*m; pz+=dz*m;
        
        d+=m;
        //if you are very close (<0.001) or have exceeded the max dist (8), stop
        if(m<1e-3 || d>8){break;}
    }
    id=idx;//save which wall you intersect with
    
    var aoc=1, //ambience
    sha=1, //shadow
    sx, sy, sz;//surface normal
    
    
    //if you hit a sphere:
    if(idx>=0){
        //find the normal of the sphere
        sx=px - c[idx]; sy=py - c[idx + 1]; sz=pz - c[idx + 2];
        
        //normalization
        m=1/Math.sqrt(sx*sx + sy*sy + sz*sz); 
        sx*=m; sy*=m; sz*=m;
    }else{
        //if you hit a wall:
        //magic nums (-1, -1, 1) are normals for walls.
        if(idx===-2){sx=sz=0; sy=-1;}
        if(idx===-3){sx=sy=0; sz=-1;}
        if(idx===-4){sy=sz=0; sx=1;}
    }
    
    //Ambience (Maybe)
    for(i=1; i<8; i++){
        //move exponentially along the normal vector plus raycast position
        var ss=0.01*i*i;
        m=df(px + sx*ss, py + sy*ss, pz + sz*ss);
        
        aoc+=(m - ss)/(ss)*0.1;//ambience factor of 0.1
        
        //removing the previous only changes the walls... weird
    }
    
    //magic lighting factors
    var lx=0.4, ly=-0.7, lz=-0.6;
    //lx=-dx, ly=-dy, lz=-dz;//Lantern lighting style (light comes from camera)
    
    //dp = dot product (lighting factor)
    var dp=sx*lx + sy*ly + sz*lz;
    
    if(dp<0){dp=0;}//at least positive
    else {
        for(i=1; i<10; i++){
            var ss=0.05*i*i;//move exponentially along projection vector
            
            //record distance function
            m=df(px + lx*ss, py + ly*ss, pz + lz*ss);
            
            
            m=2*m/ss + 0.5;//shadow factor
            if(m<0){m=0;}if(m>1){m=1;}//constraint
            sha*=m;
        }
    }
    //main light being applied
    sha*=dp;
    
    //constrain the raycast ray.
    if(d>8){d=8;}
    
    //How much the surface faces the camera
    m=2*(sx*dx + sy*dy + sz*dz);
    
    //reflection from view vector to light vector of of sphere normal.
    m=(m*sx - dx)*lx + (m*sy - dy)*ly + (m*sz - dz)*lz;
    
    m*=-1;//Apparently the reflection is backwards...?
    
    
    if(m<0){m=0;}//constrain refletion
    
    m*=m*m*m*m*m*m*m;//reflection^8, to make the shine area smaller
    
    //constrain shadow and "aoc", whatever that is.. 
    
    if(sha<0){sha=0;}
    if(aoc<0){aoc=0;}
    
    aoc*=0.2;//ambience factor
    sha*=0.7;//shadow factor
    
    
     
    //heavy vector maths here:
    dp=px*lx + py*ly + pz*lz;
    
    //---> seriously, WHY would you bring the raycast endpoint into this?
    
    //I don't fully understand this one...
    var b=px*px + py*py + pz*pz + dp*dp*(lx*lx + ly*ly + lz*lz - 2);
    
    b=3/(b*b+1);//magic formula.
    sha*=b;//apply to shadow
     
    //if we're loking at a wall, set the surface pos to something that isn't constant
    if(id<0){sx=px*0.5; sy=py*0.5; sz=pz*0.5;}
    
    //everybody make some NOISE!!!!! :P
    dx=noise(sx, sy, sz); dy=noise(sy, sz, sx); dz=noise(sz, sx, sy);
    
    //self-composed noise, mtrn learned this from me!
    var w=noise(sx*3 + dx*12, sy*3 + dy*12, sz*3 + dz*12 + id*12.345);
    
    //decide the color of the sphere's unsaved texel
    
    //hue angle:
    var a=w*5 + id/numSpheres*6.2;//6.2 is ~ two pi
    
    
    var clr=[0.75 + 0.25*Math.sin(a),//create color array RGB 0-1
             0.75 + 0.25*Math.cos(a),
             0.75 - 0.25*Math.sin(a)];
             
    if(id<0){
        clr=[0.5, 0.5, 0.5];
        //clr=[0.75, 0.5, 0.5];//A nicer color.
    }//Wall color
    
    
    
    w*=w*(3 - 2*w);//magic formulas (fun!)
    w*=w*(3 - 2*w);
    
    m*=w*w*sha;//apply texture and shadow to shine
    
    w=1 - 0.5*w;//magic!
    
    //ambience and shadow color distribution, and shine as well.
    //sqrt lightens everything
    return [Math.sqrt(clr[0]*(aoc*0.2 + sha*0.8)*w + m*0.8),
            Math.sqrt(clr[1]*(aoc*0.3 + sha*0.7)*w + m*0.7),
            Math.sqrt(clr[2]*(aoc*0.6 + sha*0.4)*w + m*0.4)];
};


//I didn't add comments for this part, because it doesn't do any rendering or 3D stuff.
draw= function() {
    // var frames=[];
    if(!loadPixels){return;}
    if(!this.imageData || !this.imageData.data){
        background(0); loadPixels(); return;}
    var p=this.imageData.data;
    
    var ms=millis();
    var uw=width*scl|0, uh=height*scl|0;
    while(millis() < ms + 100){
        if(frames.length>=nframes){break;}
        var x=2*(rpix%uw)/uw - 1,
            y=2*(rpix/uw|0)/uh - 1;
        var c=pcol(x, y, frames.length/nframes);
        var l=rpix%uw + (rpix/uw|0)*width << 2;
        p[l  ]=c[0]*256;
        p[l|1]=c[1]*256;
        p[l|2]=c[2]*256;
        rpix++;
        if(rpix > uw*uh){
            updatePixels();
            var img=get(0, 0, uw, uh);
            frames[frames.length]=img;
            rpix=0; break;}
    // updatePixels();
    }
    
    // framei%=frames.length;
    if(frames.length > 200 && frames[framei] && frames[framei].width){
        image(frames[framei], 0, 0, width, height);
    }else{updatePixels();}
    fill(255);
    text(frames.length+"\n"+rpix+"\n"+framei, 4, 14);
    framei++; if(framei>=frames.length){framei=0;}
};
