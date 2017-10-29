angleMode = "radians";	
var rotadeg = 0;
draw = function() {
    background(255);
    pushMatrix();
    translate(width/2,height/2);
    rotate(rotadeg);
    fill(127, 127, 127);
    stroke(0, 0, 0);
    line(-50, 0, 50, 0);
    strokeWeight(2);
    ellipse(-50, 0, 16, 16);
    ellipse(50, 0, 16, 16);
    popMatrix();
    rotadeg += 0.1;
};
