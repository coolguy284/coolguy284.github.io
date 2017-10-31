var d3x = 0;
var d3y = 0;
var d2x = 0;
var d2y = 0;
var ddx = 0;
var ddy = 0.1;
var dx = 1;
var dy = 5;
var x = 200;
var y = 200;
draw = function() {
    background(255);
    d2x += d3x;
    d2y += d3y;
    ddx += d2x;
    ddy += d2y;
    dx += ddx;
    dy += ddy;
    x += dx;
    y += dy;
    if (x > 400) {
        x = 400;
        dx *= -1;
    }
    if (x < 0) {
        x = 0;
        dx *= -1;
    }
    if (y > 400) {
        y = 400;
        dy *= -1;
    }
    if (y < 0) {
        y = 0;
        dy *= -1;
    }
    fill(255);
    rect(-1, -1, 140, 30);
    fill(0);
    text('X: ' + x + '\nY: ' + y, 0, 10);
    ellipse(x, y, 20, 20);
};