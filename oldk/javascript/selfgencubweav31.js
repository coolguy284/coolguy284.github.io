var spn = 0;
var spinIt = 80;
var y = 0;
var big = 1;
var bigger = 0.001;
draw = function() {
    for (var i = 0; i < 720 / spinIt; i ++) {
    rectMode(CENTER);
    fill(0, 225, 255);
    
    pushMatrix();
    translate(200,200);
    rotate(spn);
    scale(big);
    
    rect(0,y,30,30);
    rect(100,y,30,30);
    rect(-100,y,30,30);
    rect(200,y,30,30);
    rect(50,y,30,30);
    rect(-50,y,30,30);
    rect(150,y,30,30);
    rect(-150,y,30,30);
    rect(-200,y,30,30);
    rect(25,y,30,30);
    rect(-400,y,30,30);
    rect(-25,y,30,30);
    rect(70,y,30,30);
    rect(-70,y,30,30);
    rect(125,y,30,30);
    rect(-125,y,30,30);
    rect(-174,y,30,30);
    rect(168,y,30,30);
    rect(200,200,30,30);
    
    ellipse(0,y + 33,30,30);
    ellipse(100,y + 33,30,30);
    ellipse(-100,y + 33,30,30);
    ellipse(200,y + 33,30,30);
    ellipse(50,y,30 + 33,30);
    ellipse(-50,y + 33,30,30);
    ellipse(150,y + 33,30,30);
    ellipse(-150,y + 33,30,30);
    ellipse(-200,y + 33,30,30);
    ellipse(25,y + 33,30,30);
    ellipse(-400,y + 33,30,30);
    ellipse(-25,y + 33,30,30);
    ellipse(70,y + 33,30,30);
    ellipse(-70,y + 33,30,30);
    ellipse(125,y + 33,30,30);
    ellipse(-125,y + 33,30,30);
    ellipse(-174,y + 33,30,30);
    ellipse(175,y + 33,30,30);
    ellipse(110,y,30,30);
    popMatrix();
    spn+= spinIt;
    
        y--;
        big-= bigger;
    }
};