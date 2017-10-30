var frames=[], framei=0, wframe=0, nframes=200;
var rpix=0, tld=0;
var sizx=width>>4, sizy=height>>4;
// var sizx=width>>3, sizy=height>>3;

// It eventually produces a full-def movie. Mouse over the canvas to scrutinize individual frames


// intersections/lighting done with distance functions (inside pcol). About that: http://iquilezles.org/www/material/nvscene2008/rwwtt.pdf

var usems=28;
frameRate(24);
angleMode="r";
background(0);

var pcol=function(x, y, t){
    // t=0.9;
    var sblen=function(h, p){
        for(var i=2, m=0, l=-1e9; i<arguments.length; i++){
            var k=arguments[i];
            if(k>l){l=k;}
            k+=h;
            if(k>0){m+=Math.pow(k, p);}
        }
        // if(m>0){m=Math.pow(m, 1/p) - h;}
        if(m>0){return Math.pow(m, 1/p) - h;}
        return l;//>m ? l : m;
        
        // for(var i=2, m=0, l=-1e9; i<arguments.length; i++){
        //     if((k=arguments[i])>l){l=k;}}
        // return l;
    };
    var ablen=function(h, p){
        for(var i=2, m=0, l=1e9; i<arguments.length; i++){
            var k=arguments[i];
            if(k<l){l=k;}
            k-=h;
            if(k<0){m+=Math.pow(k, p);}
        }
        if(m>0){return h - Math.pow(m, 1/p);}
        return l;
    };
    var lurp=function(a, b, dest, t){
        for(var i=0; i<a.length; i++){
            dest[i]=a[i]*(1 - t) + b[i]*t;}
    };
    var quip=function(x, y, z, t0, t1, t2){
        var k=2/(t0*t0 + t1*t1 + t2*t2 + 1),
            r=k - 1, a=k*t0, b=k*t1, c=k*t2;
        return [x + 2*(-x*(b*b + c*c) + y*(r*c + a*b) + z*(a*c - r*b)),
                y + 2*( x*(a*b - r*c) - y*(a*a + c*c) + z*(b*c + r*a)),
                z + 2*( x*(a*c + r*b) + y*(b*c - r*a) - z*(a*a + b*b))];
    };
    // var ldist=function(x, y, x0, y0, x1, y1){
    var ldist=function(p0, p1, x){
        var ee=0, dd=0, ed=0;//, d2=0;
        for(var i=0; i<x.length; i++){
            ee+=(x[i] - p0[i])*(x[i] - p0[i]);
            dd+=(p1[i] - p0[i])*(p1[i] - p0[i]);
            ed+=(x[i] - p0[i])*(p1[i] - p0[i]);
            // d2+=(x[i] - p1[i])*(x[i] - p1[i]);
        }
        if(ed<=0){return Math.sqrt(ee);}
        if(ed>=dd){return Math.sqrt(ee + dd - 2*ed);}
        return Math.sqrt(ee - ed*ed/dd);
    };
    // if(1){return [(Math.sin(ldist([-0.7, -0.3], [0.8, 0.7], [x, y])*100) + 1)/2, 0, 0];}
    
    var pump=function(x, y, z, rn, sur){
        if(sur){sur[0]=sur[1]=sur[2]=sur[3]=0.5;}
        // var m=1 - 0.5/Math.sqrt(x*x + z*z);
        // return Math.sqrt(m*m*(x*x + z*z) + y*y) - 0.25;
        
        // var u=x;
        // var out=Math.sqrt(x*x + y*y + z*z) - 0.8, outm=(0.2 - out)*5;
        // if(outm<0){return out;}
        // if(outm>1){outm=1;}
        var rad=0.5 + ((rn>>5&31)-15)/150;
        var out=Math.sqrt(x*x + y*y + z*z) - rad - 0.2, outm=out*4;
        if(outm>1){return out;}
        if(outm<0){outm=0;}
        outm*=outm*(3 - 2*outm);
        
        var dx=x - 0.2, dy=y + 0.2, dz=z + 0.5;
        
        // var m=y + rad;//x*x + z*z;
        // m=m*m*0.2 + x*x + z*z;
        // m*=m;
        // m*=m;
        // m=0.005/(m*m + 0.01);
        var m=y*5;
        if(m>1){m=1;} if(m<-1){m=-1;}
        m*=0.5*(3 - m*m);
        m=m*0.3/((x*x + z*z)/(rad*rad)*10 + 1);
        y+=m;//*(y>0?1:-1);
        // y/=(m*m + 0.5)*(y*y - 0.5);
        // y+=m*m/(x*x + z*z + 0.0125)*y;
        
        var r2=x*x + z*z, rr2=Math.sqrt(r2);
        // var m=0.35/rr2;
        // var d=ablen(0.2, 6,
        //     Math.sqrt((1 - m)*(1 - m)*r2 + y*y) - 0.4,
        //     Math.sqrt((1 + m)*(1 + m)*r2 + y*y) - 0.4);
            
        var d=Math.sqrt(x*x + y*y + z*z) - rad;
        
        var ang=Math.atan2(x, z)/6.283;
        m=d*5;
        if(m<1 && m>-1){
            for(var i=0, c=0, e=0; i<2; i++){
                var a=ang*((rn>>10&31) + i*(rn>>15&31) + 5) + 29;
                a=Math.abs(a - ~~a - 0.5)*2;// + 0.5;
                var b=a; if(i===0){a*=a; a*=a;} a*=a*(3 - 2*a);
                c+=(a + b*b*(3 - 2*b))/(i*(i + 2) + 1);
                e+=b*b*(3 - 2*b);
            }
            m=1 - Math.abs(m);
            m*=m*(3 - 2*m);
            d+=(e*(0.125 - r2*r2)*0.7 + c*r2*r2)*m*5e-2;
            // d+=c*m*m*(3 - 2*m)*6e-2*r2*r2;
        
            m=d*50;
            if(m<1 && m>-1){
                var k=noise(x*10, y*5, z*10);
                m=1 - Math.abs(m);
                m*=m*(3 - 2*m);
                k*=k;
                d+=k*m*2e-2;
                if(sur){
                    // var l=Math.abs(noise(x*23, y*23, z*23 + 45.67)*2 - 1);
                    var l=noise(x*53, y*53, z*53 + 45.67);
                    l*=l*(3 - 2*l);
                    l*=l*(3 - 2*l);
                    // l*=l*(3 - 2*l);
                    m=c*0.1 + k;
                    sur[0]=0.9*(0.69 + (rn&31)*1e-2 - m*0.2) + l*0.15;
                    sur[1]=0.3 + m*0.1 + l*0.1;
                    sur[2]=0.01 + m*0.1;
                    sur[3]=1 - m*2;}
            }else if(sur){
                sur[0]=0.8; sur[1]=0.5; sur[2]=0.03; sur[3]=0.2;}
        }
        
        var e=1e3;
        if(y<0){
            var a=ang*7 + 29;
            a=Math.abs(a - ~~a - 0.5)*2;// + 0.5;
            a*=a*(3 - 2*a);
            a*=a*(3 - 2*a);
            // a=0;
            e=rr2*(1 + a*0.2) - 0.09;
            // if(e2>e+0.05&&0){e=e+0.05;}else{e=e2;}
            // e*=0.5;
            e=sblen(0.02, 2,
                ablen(0.3, 6, e, d), -Math.min(d, rad + 0.25 + y));
            if(sur && e<d){
                m=noise(x*10/rr2, y*10, z*10/rr2 + 12.345);
                m*=m*(3 - 2*m); m*=m*(3 - 2*m); m*=m*(3 - 2*m);
                sur[0]=m*0.5;//0.5;
                sur[1]=0.1 + m;//0.6;
                sur[2]=0;//a*0.3;
                sur[3]=1 - a;//0.3;
            }
        }
        
        if(d<-0.05){d=-0.1 - d; /*if(d>0){d*=d;}*/}
        // d=sblen(0.01, 2, d, 0.2 - Math.sqrt(x*x + y*y));
        
        // return (d<e?d:e)*outm + out*(1 - outm);//*0.9;
        // return ((d<e ? d : e) - out)*outm + out;//*0.9;
        return (d<e ? d : e)*(1 - outm) + out*outm;
    };
    var noes=function(x, y, z){
        var scl=5.5;
        x*=scl; y*=scl; z*=scl;
        var out=Math.sqrt(x*x + y*y + z*z) - 1.5, outm=out*5;
        if(outm>1){return out/scl;}
        if(outm<0){outm=0;}
        outm*=outm*(3 - 2*outm);
        
        // var d=sblen(0.05, 2, Math.abs(z) - 0.5, Math.abs(y) - 0.5);
        // d=Math.sqrt(y*y + z*z) - 0.5;
        
        var ed=0.01;
        
        y-=0.4;
        var d=sblen(ed, 4,
            Math.sqrt(y*y*0.5 + z*z) - 0.5,
            0.9 - Math.sqrt((y - 0.8)*(y - 0.8) + z*z));
        var td=ablen(ed, 4,
            -0.45 - y, 0.08 - Math.abs(Math.abs(z) - 0.1));
        d=sblen(ed, 4, d, td);
        
        y+=1.5;
        d=Math.min(d,
            Math.sqrt((Math.abs(y) - 0.15)*(Math.abs(y) - 0.15) + z*z) - 0.11);
        d=ablen(ed, 4,
            ldist([0.06, 0.2], [0, 0.3], [z, y]) - 0.03, d);
        y-=0.5;
        d=Math.min(d,
            Math.sqrt(y*y*0.4 + (Math.abs(z) - 0.6)*(Math.abs(z) - 0.6)) - 0.25);
        d=ablen(ed, 4, ldist([0.5, -0.45], [0.8, -0.25],
            [Math.abs(z), y]) - 0.05, d);
        y-=0.15;
        z-=0.1;    
        d=sblen(ed, 4, d, 0.15 - Math.sqrt(y*y*0.5 + (Math.abs(z) - 0.6)*(Math.abs(z) - 0.6)));
        z-=0.04;    
        d=Math.min(d, Math.sqrt(y*y*0.3 + (Math.abs(z) - 0.6)*(Math.abs(z) - 0.6)) - 0.035);
        
        return (d + (out - d)*outm)/scl;
    };
    
    var colu=function(x, y, z, sur){
        var scl=1.0;
        x*=scl; y*=scl; z*=scl;
        
        var d=sblen(0.02, 2, Math.abs(x) - 0.2, Math.abs(z) - 0.1, -2 - y);
        // var m=1 - Math.abs(d)*5;
        var m=Math.min(1 - d*5, 1);
        // if(d<-0.1){d=-0.1;}
        if(m>0){
            m*=m*(3 - 2*m);
            var k=noise(x, z, y/4);
            k*=k*(3 - 2*k);
            k=Math.sin(k*50);//*0.5 + 0.5;
            // var l=Math.abs(k - 0.5
            k*=k;
            k*=k;
            // k*=k*(3 - 2*k);
            // k*=k*(3 - 2*k);
            // k*=k*(3 - 2*k);
            // k*=k*(3 - 2*k);
            // k*=k*(3 - 2*k);
            d+=k*m*0.005;
            // d=sblen(0.0025, 2, m*k*0.005, d);
            if(sur){
                sur[0]=0.5 - k*0.1;
                sur[1]=0.4 - k*0.1;
                sur[2]=0.1 - k*0.1;
                sur[3]=0;//1.5*(1 - k);
            }
        }
        return d/scl;
    };
    
    var ground=function(x, y, z, sur){
        // if(sur){sur[0]=1; sur[1]=1; sur[2]=1; sur[3]=1;}
        if(sur){sur[0]=sur[1]=sur[2]=sur[3]=0.5;}
        var s0=[0, 0, 0, 0], s1=[0, 0, 0, 0], st=0;
        
        var out=-y, outm=out*3;
        if(outm>1){return out;}
        if(outm<0){outm=0;}
        outm*=outm*(3 - 2*outm);
        
        var d=-y, dd=2 - Math.sqrt(x*x + (y + 1.5)*(y + 1.5));
        d=sblen(0.5, 4, dd, d);
        var m=2*(0.5 - Math.abs(d));
        if(m>0){
            m*=m*(3 - 2*m);
            var u=noise(x, y, z + 1.2345)*2,
                v=noise(x, y, z + 2.3456)*2,
                w=noise(x, y, z + 3.4567)*2,
                n=noise(u + x*3, v + y*3, w + z*3);
            // n*=n;
            // n*=n;
            n*=n*(3 - 2*n);
            // n*=n*(3 - 2*n);
            n*=n;
            if(n>0.4){
                // n=1 - n;
                n-=2*(n - 0.4);
                if(sur){
                    s0=[0.1, 0.07, 0.05, 0.2];}
            }else if(sur){
                var k=n/0.6;
                // k*=k*(3 - 2*k);
                k*=k*(3 - 2*k);
                var q=(noise(z*40, x*40, y*40 + 6.789)*2 - 1)*0.05;
                
                s0=[(1 - k)*0.2 + q,
                    (1 - k)*0.1 + q,
                    (1 - k)*0.03 + q,
                    0.1];//0.1*(1 - kk);
            }
            d+=n*m*0.25;
        }
        
        // if(y>1.4&&sur){sur[0]=1;}
        // if(dd>0){
        if(y>0.38||dd>0){
            // d=1-dd;var outm1=1;
            // var pd=sblen(0.2, 4,
            //     Math.abs(x) - 0.8, 1.4 - y);
            var pd=0.42 - y;
            var u=noise(x*0.2, z*0.2 + 34.5678),
                v=noise(z*0.2, x*0.2 + 45.6789),
                x1=x+u*2-1, z1=z+v*2-1;
            var kx=x1*5 + 9e3, kz=z1*2 + 9e3 + ~~kx*0.5;
            var ki=~~kx | kz << 16;
            kx-=~~kx + 0.5; kz-=~~kz + 0.5;
            // var kk=(Math.max(Math.abs(kx)/5 - 0.08, Math.abs(kz)/2 - 0.23));
            // var kk=sblen(0.04, 2, Math.abs(kx)/5 - 0.08, Math.abs(kz)/2 - 0.23);
            var kk=ablen(0.04, 2, (0.475 - Math.abs(kx))/5, (0.49 - Math.abs(kz))/2);
            // pd+=Math.min(0.1, 0.1 - kx*kx + kz*kz);
            // pd=Math.max(pd, 0.1 - Math.sqrt(kx*kx + kz*kz));
            // pd=Math.max(pd, kk);
            
            ki^=(ki>>>17)*(ki&0x3fff);
            ki^=(ki>>>18)*(ki&0x7fff);
            ki^=(ki>>>17)*(ki&0x3fff);
            ki^=(ki>>>18)*(ki&0x7fff);
            
            pd=sblen(0.04, 2, pd, -kk);
            m=1 - 10*Math.abs(pd);
            if(m>0){
                m*=m*(3 - 2*m);
                var q=noise(x*7, y*7, z*7 + ki*3e-7);
                // q*=(3 - 2*q);
                // q*=(3 - 2*q);
                // q*=(3 - 2*q);
                // q*=q;
                q*=q;
                pd+=q*1e-1*m;
            }
            if(d<0.04){
                // d=sblen(0.04, 2, d, -pd);
                // st=1 - 0.5*d/pd;//d/0.04;a
                st=d/0.04;
                if(st>1){st=1;} if(st<0){st=0;}
                d=ablen(0.04, 4, d, pd);
            }
            if(sur){
                var q=noise(x*20, y*20, z*20 + ki*1e-6);
                q*=q*(3 - 2*q);
                q*=q*(3 - 2*q);
                var m=(ki&255)/3e2 + q;
                s1=[0.6 - 0.2*m, 0.4 - 0.2*m, 0.2 - 0.1*m, 0.1];
                // sur[0]=(ki&255)/255;
            }
            if(pd<d){
                d=pd;
                st=1;
            }
            // d=Math.min(d, pd);
        }
        st*=st*(3 - 2*st);
        lurp(s0, s1, sur, st);
        // s0=lurp(s0, s1, st);
        // sur[0]=s0[0]; sur[1]=s0[1]; sur[2]=s0[2]; sur[3]=s0[3];
        return d + (out - d)*outm;
    };
    // var sky=function(x, y, z, sur){
    var sky=function(x, y, z, t){
        // if(!sur){return;}
        // y-=10;
        var m=1/Math.sqrt(x*x + y*y + z*z);
        x*=m; z*=m; y*=m;
        var m=1/y;
        x*=m; z*=m; //y*=m;
        var u=noise(x, y, z + 43.219 + t)*26,
            v=noise(x, y, z + 31.415 + t)*26,
            w=noise(x, y, z + 27.182 + t)*26;
        var m=noise((x + u)*0.2, (y + v)*0.2, (z + w)*0.2);
        m*=m*(3 - 2*m);
        var c=[];
        lurp([0.3, 0.5, 0.8], [0.1, 0.2, 0.5], c, Math.abs(y));
        lurp(c, [m, m, m], c, Math.abs(y));
        // lurp([0.3, 0.5, 0.8], [m, m, m], c, Math.abs(y));
        return c;
    };
    
    var sint=1, cost=0;
    var sint=0.7, cost=0.7;
    var sint=0, cost=1;
    var pit=0.2,// - sint*1.0, 
        mag=0,
        spit=Math.sin(pit), cpit=Math.cos(pit);
    var px=mag*sint*cpit + (noise(t + 56.789)*2 - 1)*0.5 - 0,
        py=-0.5 - mag*spit + (noise(t + 67.891)*2 - 1)*0.2,
        pz=-mag*cost*cpit - 13*(1 - t) - 2.2;
    var m=1/Math.sqrt(x*x + y*y + 1), d, l,
        vx=m*x, vy=m*(y*cpit + spit), vz=m*(cpit - y*spit);
    var k=vx;
    vx=vx*cost - vz*sint; vz=vz*cost + k*sint;
    var vv=quip(vx, vy, vz,
        (noise(t*0.5 + 8.912)*2 - 1)*0.2,
        (noise(t*0.5 + 4.654)*2 - 1)*0.2,
        (noise(t*0.5 + 2.193)*2 - 1)*0.2);
    vx=vv[0]; vy=vv[1]; vz=vv[2];
    
    var df=function(x, y, z, sur){
        // var m=1e3, s0=[], s1=[], s2=[], st;
        var m=1e3, s0=0, s1=0, s2=0, st;
        if(sur){s0=[]; s1=[]; s2=[];}
        // else{s0=s1=s2=0;}
        var kx=Math.abs(x) - 2, ky=y + 0.4, kz=z*0.5 + 9e3;
        // var rn=1e18/(~~kx*17 + /*~~ky*23 +*/ ~~kz*29 ^ 0x31415926);
        var rn=1e18/((x>>31) ^ ~~kz*2345678 ^ 0x31415926);
        rn=~(rn%4e9 - 2e9);
        rn^=(rn&0x7fff)*(rn>>>17);
        rn^=(rn&0x3fff)*(rn>>>16);
        // ky=y + 0.5;
        // ky+=rn*1e-6;
        // kx=2*(kx - ~~kx - 0.5);
        // ky=2*(ky - ~~ky - 0.5);
        kz=2*(kz - ~~kz - 0.5);
        
        var v=quip(kx, ky, kz,
            ((rn>>20&0x3ff)/512 - 1)*0.2,
            ((rn>>10&0x3ff)/512 - 1)*0.4,
            ((rn&0x3ff)/512 - 1)*0.2);
        kx=v[0]; ky=v[1]; kz=v[2];
        var m=ground(x, y, z, s0);
        // var mm=sblen(0.02, 4,
        //     pump(kx, ky, kz, rn, s1),
        //     -noes(kx + 0.5, ky, kz));
        var mm=pump(kx, ky - 0.14, kz, rn, s1);
        
        if(sur && mm<m){s0=s1;}
        mm=Math.min(mm, m);
        
        var ops=0.2;
        // kx=x*ops; ky=(t*2 + y - 2)*ops; kz=(z - 10)*ops;
        kx=x*ops; ky=(4*(t - 1) + y + 0.95)*ops; kz=z*ops;
        var bt=(1 - t)*0.3;
        v=quip(kx, ky, kz, bt, bt, bt);
        kx=v[0]; ky=v[1]; kz=v[2];
        var op=sblen(0.01, 4, pump(kx, ky, kz, 1141592653, s2),
            -noes(kz + 0.5, ky, kx))/ops;
        st=1 - Math.min(op*10, 1);
        if(st>1){st=1;}
        if(st>0&&sur){lurp(s0, s2, s0, st);}
        mm=ablen(0.4, 4, mm, op);
        
        if(sur){sur[0]=s0[0]; sur[1]=s0[1]; sur[2]=s0[2]; sur[3]=s0[3];}
        return mm;
    };
    
    // var negs, lp=0, gn=0, lpd=1e9, gnd=-1e9;
    var negs, fp=-1e9, cn=1e9, fpd, cnd;
    var ld, lm, aad=0, aam=1;
    var i;
    for(i=d=negs=0; i<200 && negs<5 && d<20; i++){
        if(m>=0){ld=d; lm=m;}
        m=df(px + d*vx, py + d*vy, pz + d*vz);
        if(m>lm){
            var k=height/2*m/d*70/99;
            // if(m>0 && k<aam)
            // if(m>0 && k<1 && aad===0)
            if(m>0 && k<aam*aam)
                {aam=k; aad=d;}
        }
        if(m<0){
            // if(d<cn){cn=d; cnd=m;}
            negs++;
        }else{
            // if(!negs && d>fp){fp=d; fpd=m;}
        }
        d+=m;
        if(m*m<1e-6){break;}
    }
    // if(negs>=5){
    //     d=fp + fpd*(fp - cn)/(cnd - fpd);
    // }
    // px+=dx*d; py+=dy*d; pz+=dz*d;
    
    var ptclr=function(x, y, z, vx, vy, vz, d){
        var sur=[0.5, 0.5, 0.5, 1.0], dfv=df(x, y, z, sur);
        
        var nx=df(x + 1e-7, y, z) - dfv,
            ny=df(x, y + 1e-7, z) - dfv,
            nz=df(x, y, z + 1e-7) - dfv;
        // m=Math.pow(nx*nx + ny*ny + nz*nz, -0.5); nx*=m; ny*=m; nz*=m;
        var m=1/Math.sqrt(nx*nx + ny*ny + nz*nz); nx*=m; ny*=m; nz*=m;
    
        var ao=1;
        // var ss=0, lss, lm;
        var ss=0, lss, lm;
        m=dfv;
        for(i=1; i<8; i++){
            lss=ss; lm=m;
            ss=0.05*Math.pow(i, 1.5);
            m=df(x + nx*ss, y + ny*ss, z + nz*ss);
            // aoc+=0.15*(m/ss - 1);
            ao+=0.125*((m - lm)/(ss - lss) - 1)/(1<<i)*8;
        }
        // ao=Math.pow(ao, 0.5);
        // aoc=aoc*0.8 + Math.pow(aoc, 6)*0.2;
        // aoc=0;
        // aoc*=(2 - dy)*0.5;
        
        // dx=0.6; dy=-0.7; dz=-0.4; 
        // var lx=-0.4, ly=-0.7, lz=-0.6;
        // var lx=0, ly=-1, lz=0;
        // var lx=Math.sin(t*3.14), ly=-Math.cos(t*3.14), lz=0;
        var lx=0.6, ly=-1, lz=0.5;
        // var lx=2-px, ly=-6-py+4*sint*cost, lz=-pz;
        m=1/Math.sqrt(lx*lx + ly*ly + lz*lz); lx*=m; ly*=m; lz*=m;
        // dx=1; dy=dz=0;
        // dx=56/97; dy=-56/97; dz=-56/97;
        var sha=1;
        var dp=nx*lx + ny*ly + nz*lz;
        if(dp<0){dp=0;}
        m=dfv;
        ss=0.0;
        for(i=1; i<20; i++){
            // var ss=0.05*i*i;
            // var ss=x*y<0 ? 0.2*i*i*1e-1 : 0.2*i;
            // var ss=0.2*i*i*1e-1;
            // var ss=0.2*(i - 0.5);
            // var ss=0.02*(1 << i - 1);
            // var ss=Math.pow(i, 1.5)*0.1;
            lss=ss; lm=m;
            // ss*=1.2;
            // ss+=0.05 + m*2;
            // ss+=0.05;// + (m>0?m*2:0);
            // ss=0.01*Math.pow(1.5, i);
            ss+=0.1;
            m=df(x + lx*ss, y + ly*ss, z + lz*ss) - dfv;
            // sha+=0.1*((m - lm)/(ss - lss) - 1);
            // sha+=0.1*(Math.pow(m/ss, 2) - 1);
            // sha+=0.25*(m/ss - 1);
            
            // m=2*m*m/(ss*ss) + 0.5; if(m<0){m=0;} if(m>1){m=1;}
            m=2*m/ss + 0.5; if(m<0){m=0;} if(m>1){m=1;}
            // m=m/ss; //if(m<0){m=0;} if(m>1){m=1;}
            
            // m=Math.atan(m/ss - 1)/6.28;
            // m*=m*m*(3 - 2*m);
            m=m*i/20 + (1 - i/20);
            sha*=m;
            
            // m=(Math.atan(m/ss)/6.2) + 0.5;
            // sha+=Math.atan(m/ss)*10;
        }
        sha*=Math.pow(dp, 0.7);
        
        if(d>20){d=20;}
        m=0;//(1.0 - pow(0.8, d))*0.1;
        m=2*(nx*vx + ny*vy + nz*vz);
        m=(m*nx - vx)*lx + (m*ny - vy)*ly + (m*nz - vz)*lz;
        m*=-1;
        if(m<0){m=0;}
        m=pow(m, 10)*0.25;
        // m=d/4; m*=m; m*=m;
        if(sha<0){sha=0;}
        if(ao<0){ao=0;}
        // aoc=sqrt(aoc)*0.15;
        // aoc*=0.3;
        // sha=0;
        // sha*=0.6;
        // sha=0;
        // sha*=1/(px*(py + pz) - py*pz + 1);
        // dp=px*lx + py*ly + pz*lz;
        m*=sha*sur[3];
        // w=1 - 0.9*w;
        
        // w=1;
        // var q=aoc*0.3 + sha*0.5;
        // aoc=0;
        // aoc*=aoc;
        ao*=0.25*(3 - ny);
        var k=(ny + 1)*0.5;
        var ac=[k*0.05 + 0.05, 0.075, (1 - k)*0.05 + 0.05];
        
        // aoc*=0.5*(1 - ny);
        var sm=d/20;
        sm*=sm;
        sm*=sm;
        var sc=sky(vx, vy, vz, t);
        return [
            (sur[0]*(ao*ac[0] + sha*0.8) + m*0.8)*(1 - sm) + sm*sc[0],
            (sur[1]*(ao*ac[1] + sha*0.6) + m*0.7)*(1 - sm) + sm*sc[1],
            (sur[2]*(ao*ac[2] + sha*0.4) + m*0.4)*(1 - sm) + sm*sc[2]];
        // return [
        //     (sur[0]*(ao*ac[0] + sha*0.8) + m*0.8)*(1 - sm) + sm*0.2,
        //     (sur[1]*(ao*ac[1] + sha*0.6) + m*0.7)*(1 - sm) + sm*0.3,
        //     (sur[2]*(ao*ac[2] + sha*0.4) + m*0.4)*(1 - sm) + sm*0.4];
        // m=sha*100;//*0.5+aoc;
        // m=aoc;
        // m=dfv*1e4;
        // return [negs/5, m, m];
        // m=(sha + aoc + m)/3;
        // m=sha;
        // return [m, m, m];
        // return [sqrt(clr[0]*0.5), sqrt(clr[1]*0.5), sqrt(clr[2]*0.5)];
    };
    
    var c0=ptclr(px + d*vx, py + d*vy, pz + d*vz, vx, vy, vz, d);
    if(aad>0){
        var c1=ptclr(px + aad*vx, py + aad*vy, pz + aad*vz,
                     vx, vy, vz, aad);
        // aam=1 - aam;aam=(aam*2 - 1);aam=1 - aam;
        // aam=constrain(aam, 0 ,1);
        aam*=aam*(3 - 2*aam);
        c0=[c1[0]*(1 - aam) + c0[0]*aam,
            c1[1]*(1 - aam) + c0[1]*aam,
            c1[2]*(1 - aam) + c0[2]*aam];}
    return c0;
};

var mii=0, mouseOver=function(){mii=1;}, mouseOut=function(){mii=0;};
// mouseClicked=function()

draw= function() {
    // var frames=[];
    if(!loadPixels){return;}
    if(!this.imageData || !this.imageData.data){
        background(0); loadPixels(); return;}
    if(!this.imageData || !this.imageData.data){return;}
    var p=this.imageData.data;
    
    var ms=millis(), mms=usems, npd=0;
    // var uw=width*scl|0, uh=height*scl|0;
    // var uw=sizx, uh=sizy|0;
    while(wframe>=0 && sizx<=width && millis() < ms + mms){
        if(wframe>=nframes){
            wframe=rpix=0;
            sizx<<=1; sizy<<=1;
            if(sizx>width){wframe=-1; break;}}
        if(!rpix && wframe<frames.length && frames[wframe].width && !tld){
            // background(0);
            image(frames[wframe], 0, 0);
            loadPixels();
            p=this.imageData.data;
            for(var y=frames[wframe].height - 1; y>=0; y--){
                for(var x=frames[wframe].width - 1; x>=0; x--){
                    var l=x + y*width << 3;
                    for(var i=0; i<16; i+=4){
                        p[l + width*(i>>1&4) + (i&4)  ]=p[l>>1];
                        p[l + width*(i>>1&4) + (i&4)|1]=p[l>>1|1];
                        p[l + width*(i>>1&4) + (i&4)|2]=p[l>>1|2];}}}
            tld=1;
            continue;
        }
        var x=rpix%sizx, y=rpix/sizy|0, l=x + y*width << 2;
        if(tld && !((x|y)&1)){rpix++; continue;}
        var c=pcol(2*x/sizx - 1, 2*y/sizy - 1, wframe/nframes);
        p[l  ]=sqrt(c[0])*256;
        p[l|1]=sqrt(c[1])*256;
        p[l|2]=sqrt(c[2])*256;
        rpix++; npd++;
        if(rpix > sizx*sizy){
            updatePixels();
            var img=get(0, 0, sizx, sizy);
            frames[wframe++]=img;
            rpix=tld=0; break;}
    }
    
    // updatePixels();
    // framei%=frames.length;
    var uf=mii ? ~~(mouseX/width*nframes) : framei;
    if(frames.length > min(nframes - 1, 5) && frames[uf] && frames[uf].width && uf-wframe){
        image(frames[uf], 0, 0, width, height);
    }else if(wframe>=0){
        updatePixels();
        if(sizx - width|sizy - height){
            var img=get(0, 0, sizx, sizy);
            image(img, 0, 0, width, height);}
    }
    if(wframe>=0 || mii){
        var s=nframes+"/"+wframe+"/"+uf+"\n"+
            ~~(100*rpix/sizx/sizy)+"%\n"+~~(npd/mms)+" kp/s"+"\n"+
            ~~this.__frameRate+" "+"|/-\\"[frameCount&3];
        fill(0); text(s, 4, 14);
        fill(255); text(s, 3, 13);
    }
    framei=mii?uf:framei+1; if(framei>=frames.length){framei=0;}
    if(mii){
        noStroke(); fill(255, 0, 0);
        var x=wframe/nframes*width;
        rect(0, height, x, -2);
        fill(0, 255, 0);
        rect(x, height, rpix/sizx/sizy/nframes*width, -2);
        fill(255);
        rect(uf/nframes*width, height - 3, width/nframes, 1);
    }
    // var nose=getImage("creatures/OhNoes");
    // image(nose, 0, 0);
};