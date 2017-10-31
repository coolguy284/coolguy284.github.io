var speed = 0.97;
var inc = 10;

var draw = function() {
    pushMatrix();
    translate(200, 200);
    scale(1);
    background(255);
    fill(0, 255, 0);
    stroke(0, 0, 255);
    ellipse(0, 0, 100, 100);
    noFill();
    for (var i = 0; i < 1000; i += inc) {
        var ai = i * speed / 2;
        ellipse(0, ai, i + 100, i + 100);
    }
    popMatrix();
};