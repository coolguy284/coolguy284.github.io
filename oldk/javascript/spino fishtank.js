background(89, 216, 255);
var fishdraw = function() {
var centerX = random(0,400);
var centerY = random(0,400);
var bodyLength = random(0,125);
var bodyHeight = random(0,100);
var bodyColor = color(random(0,255),random(0,255),random(0,255));

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};  
fishdraw();
fishdraw();
fishdraw();
fishdraw();
fishdraw();
fishdraw();
fishdraw();
fishdraw();
fishdraw();
fishdraw();