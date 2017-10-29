var SmileyFace = function(centerX, centerY) {
    this.centerX = centerX;
    this.centerY = centerY;
};

SmileyFace.prototype.draw = function() {
    fill(255, 234, 0);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};

SmileyFace.prototype.speak = function(string) {
    text(string, this.centerX-50, this.centerY+100);
};

var faceObj = new SmileyFace(100, 100);
var smile2 = new SmileyFace(300, 100);

faceObj.draw();
faceObj.speak("I'm a smiley face!");
smile2.draw();
smile2.speak("Me too!");