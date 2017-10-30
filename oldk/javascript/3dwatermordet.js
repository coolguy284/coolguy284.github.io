/** 
This is a 3D test for rendering waves of water. This is pretty much the ocean.

Created by Mr. E

As suggested by the first screen, pressing "Enter" starts and stops the water animation

See the variable below (called detail) to change the resolution of the waves.
**/

var detail=7; // For fast computers, 7 or 8 is good. For slower computers, 6 is recommended. For artistic                  pixelators, 4 is good.
/**

This is the first part of my possible series of 3D generations:

Here are some mouse commands available:
    * Left Click: Rotate Screen
    * Right Click: Move Screen (generates more water)
    * 

Thanks to Code.Hunter15 for 60th vote!
Thanks to Christine Alden for 80th vote!


**/


var Blue = color(0, 0, 215), White = color(170, 170, 247), Black = color(0, 0, 185), Alpha = 0x00000000,
    Red = color(215, 0, 0), Green = color(0, 215, 0);
//var colors = [Red,Blue,White,Blue,Green,Alpha]; // This array changes color based on height. Have fun                                                       changing it!
var colors = [Blue,Blue,Blue,Blue,Blue,Blue];
var blendColors = true;

var yaw=0, pitch=30, zscale=0.5;
var specpow=50, specmul=50,
    lightx=0, lighty=-0.5, lightz=sqrt(3)/2,
    mapX=5,mapY=5,siz=1,len=colors.length;
var clr,lp = false,renderms,labels=false,first=true,time=0;

var getValues = function(color){
    return [color >> 24&255, color >> 16&255,
    color >> 8&255, color&255];
};

//Creates wave using noise(); Working on creating land using noise
var f=function(x,y){
    noiseDetail(2,2);
    var z = noise((x+mapX)*siz,(y+mapY)*siz,time)/2-2,g=z+1.5,g1,f,f1,n,n1,start,end;
    g1 = g*len;
    f = floor(g1); f1 = f+1; n = blendColors?(g1-f):(g-f); n1 = (f1-n-f);
    start = getValues(colors[f%len]);
    end = getValues(colors[f1%len]);
    clr=color(start[1]*n1+n*end[1],start[2]*n1+n*end[2],start[3]*n1+n*end[3],start[0]*n1+n*end[0]);
    return z; //Return height of map at (x,y) location (keep forgetting what z is)
};


//var sky=0xff2050A9;//color(159, 209, 235); For creating sky, doesn't work
var sky=color(177, 201, 245);
//var sky=0xff000000;

var grid=[], gridc=[], gridn=[];
//Creates the heightmap and color grid
var init=function(){
    var i,j, x,y,z,t, c,m=10;
    clr=0x808080;
    for(i=0;i<(1<<(detail<<1));i++){
        x=i&(1<<detail)-1;
        y=i>>detail;
        
        x=(x-(1<<detail)*0.5+0.5)/(1<<detail)*2;
        y=(y-(1<<detail)*0.5+0.5)/(1<<detail)*2;
        
        grid[i]=f(x,y);
        gridc[i]=clr&0xffffff;
    }
};

//Creates the normal vector grid used in lighting. Fun stuff
var normals=function(){
    var i,x,y,z,m;
    var and=(1<<(detail<<1))-1, mul=0.25*(1<<detail);
    for(i=0;i<=and;i++){
        x=(grid[i-1&and] - grid[i+1&and])*mul;
        y=(grid[i-(1<<detail)&and] - grid[i+(1<<detail)&and])*mul;
        m=511.9/sqrt(x*x + y*y + 1);
        x=x*m+512; y=y*m+512; z=m+512;
        gridn[i]= z<<20 | y<<10 | x;
    }
};

var render=function(){
    var dt=detail, dta=(1<<dt)-1;
    
    var cy=cos(yaw), sy=sin(yaw),
        cp=cos(pitch), sp=sin(pitch);
    
    var shift=abs(cy)>abs(sy) ? dt : 0,
        xor=(cy<0?0:dta<<dt) | (sy>0?0:dta);
        
    var i,j,k,n, x,y,z,t, gx,gy,gz, left,right,top,
        norm,nx,ny,nz,dp,dpp, lx,ly,lz,m,
        l,c, h, r,g,b;
        
    var rsky=sky>>16&255,gsky=sky>>8&255,bsky=sky&255;
    
    lx=lightx; ly=lighty; lz=lightz;
    t=ly;
    ly=ly*cp + lz*sp;
    lz=lz*cp - t*sp;
    t=lx;
    lx=lx*cy - ly*sy;
    ly=ly*cy + t*sy;
    //m=1/sqrt(lx*lx + ly*ly + lz*lz);
    
    var hmul=zscale, spow=specpow, smul=specmul;
    
    var lg=grid, lgn=gridn, lgc=gridc;
    
    var heights=[];
    for(i=0;i<400;i++){heights[i]=401|0;}
    
    this.loadPixels();
    var p=this.imageData.data;
    var iwh=2/(1<<dt), i512=1/512;
    var ng=1<<(dt<<1);
    for(i=0;i<ng;i+=1){
        j=(i>>dt<<shift | (i&dta)<<dt-shift) ^ xor;
        
        gx=(j&dta) - (1<<dt-1);
        gy=(j>>dt) - (1<<dt-1);
        gz=-lg[j]*hmul-0.5;
        
        left=401; right=-1; top=401;
        for(k=0;k<4;k++){
            x=(gx + (k&1)) * iwh;
            y=(gy + (k>>1)) * iwh;
            
            t=x;
            x=x*cy + y*sy;
            y=y*cy - t*sy;
            
            /*t=y;
            y=y*cp + gz*sp;
            z=gz*cp - t*sp;*/
            
            t=y;
            y=y*cp;
            z=-t*sp;
            
            z+=1.25;
            
            m=300/z;
            //m=200;
            x=x*m + 200;
            y=(gz*sp+y)*m + 200;
            
            if(x<left){left=x;}
            if(x>right){right=x;}
            if(y<top){top=y;}
        }
        
        if(z<0){continue;}
        
        left|=0;
        right|=0;
        top|=0;
        
        if(left<0){left=0;}
        if(right>400){right=400;}
        if(top<0){top=0;}
        if(top>400){top=400;}
        
        norm=lgn[j];
        nx=norm&1023; ny=norm>>10&1023; nz=norm>>20;
        nx=nx*i512-1; ny=ny*i512-1; nz=nz*i512-1; 
        
        dp=lx*nx + ly*ny + lz*nz;
        dp=(dp+1)*0.5;
        dpp=pow(dp,spow)*smul;
        
        
        c=lgc[j];
        r=c>>16; g=c>>8&255; b=c&255;
        
        r=r*dp + dpp;
        g=g*dp + dpp;
        b=b*dp + dpp;
        
        //m=1/(z*2+3); t=1-m;
        //r=r*m + rsky*t; g=g*m + gsky*t; b=b*m + bsky*t;
        
        //r=sqrt(r)*16; g=sqrt(g)*16; b=sqrt(b)*16;
        
        r|=0; g|=0; b|=0;
        
        t=0;
        if(r>255){t+=r-255>>1;}
        if(g>255){t+=g-255>>1;}
        if(b>255){t+=b-255>>1;}
        r+=t; g+=t; b+=t;
        
        if(r>255){r=255;} if(g>255){g=255;} if(b>255){b=255;}
        
        for(k=left;k<right;k++){
            h=heights[k];
            if(!h){h=0;}
            if(top<h){heights[k]=top;}
            
            y=top;
            l=k + top*400 << 2;
            if(h===401){h=y+1;}
            while(y<h){
                p[l]=r;
                p[l+1]=g;
                p[l+2]=b;
                //r=r*cmul>>8; g=g*cmul>>8; b=b*cmul>>8;
                l+=1600;
                y++;
            }
        }
    }
    this.updatePixels();
};

var sclr=color(random(100,200),random(100,200),random(100,200));
var nsi=1;

var spin=0, nr=1, lastdetail=-1, lastf=-1;
var ao=0;
var textHint="Press enter to start or stop the animation",textX = 25,textY = 300;
var fantasy=createFont("fantasy");
var sansSerif=createFont("sans-serif");

//Re-draw the scene after a value has been updated
var reload=function(){
    renderms=millis();
    init();normals();nr=1;
    renderms=millis()-renderms;
};

//Draws black on white text to see text easier with all the colors in the background
var outlineText=function(Text,x,y,font,fontSize){
    textFont(font,fontSize);
    //White outline
    fill(255); 
    text(Text,x-1,y-1);text(Text,x+1,y+1);text(Text,x+1,y-1);text(Text,x-1,y+1);
    //Black Center
    fill(0);text(Text,x,y);
};

frameRate(30);
draw=function(){
    if(!this.loadPixels){return;}
    var ms;
    
    if(grid.length<(1<<(detail<<1)) ||
        detail!==lastdetail || lastf!==f){
        renderms=millis();
        init();normals();
        nr=1;
        renderms=millis()-renderms;
    }
    lastdetail=detail;
    lastf=f;
    
    if(ao||spin){nr=1;}
    if(!nr){return;}
    nr=0;
    
    background(sky);
    fill(0);
    
    yaw+=spin;
    
    ms=millis();
    render();
    ms=millis()-ms;

    if(labels){
        textFont(sansSerif,14);
        fill(0); text(ms/1000,355,14);
        text(2*renderms/1000,10,14);
    }
    
    if(first){
        textAlign(CENTER,CENTER);
        outlineText(textHint,200,200,fantasy,21);
    }
    
    if(!lp){
        //noLoop();   
    }else{
        time+=0.01;
        reload();
    }
};

var kp=[],keyPressed=function(){kp=[];kp[keyCode]=1;};
keyReleased=function(){
    kp=[];
    kp[keyCode]=0;
    
    if(keyCode===10){ //Enter key
        lp=!lp;
        //spin=spin+1|0;
        if(first){
            first = false;
        }
        if(lp){
            loop();
            time+=0.01;
            reload();
        }
    }
};

var mpx,mpy,mousePressed=function(){mpx=mouseX;mpy=mouseY;};
mouseOut=function(){mpx=-1;mpy=-1;};
mouseDragged=function(){
    if(mpx<0||mpy<0){return;}
    var dx=mouseX-pmouseX, dy=mouseY-pmouseY, m,t;
    if(mouseButton===LEFT){
        yaw+=dx*0.5;
        pitch=constrain(pitch-dy*0.5,0,90);
        spin=0;
        nr=1;
        
    }else if(mouseButton===RIGHT){ //Move the map if Right mouse button is held
        var ang=atan2(dy,dx)+yaw;
        var mag=sqrt(dy*dy+dx*dx);
        mapX-=(mag*cos(ang))/100;
        mapY-=(mag*sin(ang))/100;
        reload();
    }
};