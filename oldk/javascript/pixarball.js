//luxoball is 350 by 350

var ball = getImage('pixar/luxoball');
//image(ball, 0, 0);

imageMode(CENTER);

var drawBall = function(x, y, rot, w, h) {
    if (h === undefined) {
        h = w;
    }
    pushMatrix();
    translate(x, y);
    rotate(rot);
    image(ball, 0, 0, w, h);
    popMatrix();
};


var xpos = 200;
var ypos = 200;
var xvel = 0;
var yvel = 0;

var waspressed = false;
var isclinged = false;

draw = function() {
    background(255);
    drawBall(xpos, ypos, 0, 100);
    if (! isclinged) {
        xpos += xvel;
        ypos += yvel;
    }
};

mouseDragged = function() {
    if (dist(mouseX, mouseY, xpos, ypos) < 50 || isclinged) {
        if (! waspressed || 1) {
            xpos += mouseX - pmouseX;
            ypos += mouseY - pmouseY;
            xvel = mouseX - pmouseX;
            yvel = mouseY - pmouseY;
            isclinged = true;
        }
    } else {
        isclinged = false;
    }
    waspressed = mouseIsPressed;
};