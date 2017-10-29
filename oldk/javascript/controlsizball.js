noStroke();

var x = 200;
var y = 200;
var ballWidth = 400;
var ballHeight = 400;
var decin = 0.999;

var draw = function() {
    translate(100, 100);
    //scale(pow(1 / decin, frameCount));
    background(255, 206, 71);
    
    fill(191, 0, 255);
    ellipse(0, 0, ballWidth, ballHeight);
    
    ballWidth *= decin;
    ballHeight *= decin;
};