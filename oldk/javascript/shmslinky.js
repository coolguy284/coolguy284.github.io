angleMode = "radians";

var drawSlinky = function(centerX, startY, endY) {
    noFill();
    colorMode(HSB);
    strokeWeight(2);
    ellipseMode(CENTER);
    var overlap = 0.8;
    var space = (endY/overlap - startY)/30;
    for (var i = 0; i < 30; i++) {
        stroke(i*9, 255, 255);
        ellipse(centerX, i*space*overlap + startY, 60, space);
    }
};

draw = function() {
    var slamte = sin(TWO_PI * frameCount / 60);
    var slam = map(slamte,-1,1,125,300);
    background(255);
    drawSlinky(width/2, 10, slam);
};