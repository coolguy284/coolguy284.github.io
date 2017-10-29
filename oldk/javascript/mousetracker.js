fill(255, 0, 255);

var draw = function() {
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 12, 12); 
    var la = "X: " + mouseX + " , " + "Y: " + mouseY;
    text(la,mouseX+5,mouseY-7);
};
