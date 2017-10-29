
/*
I'm really getting into noise.
Codeing experience: Since KA code was invented. Yes. I started with KA.

Fetures:
Outlines on top of the mountains
Nice shiny water
Trees


New Game:
https://www.khanacademy.org/computer-programming/noise-the-game/4596779517607936

Wanted: 8-bit editor.
For: Top secret.
*/

/*
Make an mountainy thing

Works on all screen sizes!https://www.khanacademy.org/computer-programming/earth-generator/5799276710068224?width=1000&height=800
Honestly it is not that hard to make.This is what it is:
A noisy line that moves down slowly
If it is greater than a certain level, then make it a color.
If it is green, maybe make a tree.
Add another noisy line to make shading.

I got the Idea from a guy who did this but no shading and 3 colors. Sooo... thx Sam!
I made one of these before:
https://www.khanacademy.org/computer-programming/mountains/4692930938535936

Added better shading
And random every try
Decided to make more updates. Cuz it reminded me of Roller Coaster Tycoon 2
*/

var speed = 0.375;
var shadow = 2;
var shadowStrength = 20;
var darkness = 173;
var waterHeight = 0.5; // Change this to be epic!
var zoom = 1;
frameRate(max);
//NoiseScale X and Y
var ns = {
    y:0.0088 * (1 / zoom),
    x:0.0040 * (1 / zoom)
};
//Hight of the mountains
var h = 200 * zoom; 

// So it will be different every time.
var r = 0;

//Helps with drawing trees
var CustomGaussian = function(min,max,avr){
    var a=[];
    for(var i=0;i<avr;i++){
        a[i]=random(min,max);
    }
    var b=0;
     for(var i=0;i<avr;i++){
        b+=a[i];
    }
    b=b/avr;
    return b;
};
//Draws a tree
var drawTree = function(x,y){
    noStroke();
    fill(89, 42, 5);
    rect(x-3.5,y-20,3,15,2);
    strokeWeight(2);
    for(var i = 0; i < 50; i++){
    stroke(27, random(50,255), 0);
        point(CustomGaussian(x-7,x+3,3),CustomGaussian(y-25,y-10,3));
    }
};
var draw = function() {
    //background(0, 0, 0);
    //Uncomment that to see how it works!
    
    for(var i = 0; i < width; i++){
        var n = noise(i*ns.x+r,(frameCount*speed+r)*ns.y);
        if(n<0.35){
            stroke(255, 255, 255);
        }else if(n<0.4){
            stroke(79, 79, 79);
            n+=random(-0.007,0.007);
        }else if(n<0.45){
            //Nicer mountains
            if(random(0,1)<0.005){
            drawTree(i,((frameCount*speed)+n*h)-h);
            }
            stroke(95, 230, 41);
        }else if(n<0.5){
            stroke(250, 250, 120);
        }else{
            //Water
            stroke((n*255/3)-20, (n*255*2)-150, (n*255*4)-400);
            n=waterHeight;
        }
        strokeWeight(3);
        point(i,((frameCount*speed)+n*h)-h);
        //Shading
        stroke(n*255-darkness, n*255-darkness, n*255-darkness,shadowStrength);
       if(n!==waterHeight){
        point(i,((frameCount*speed-shadow)+n*h)-h);
        
        }
    }
};