var sides = 10;
var radius = 190;
var rotation = 0;
var drawellipse = false;
var drawpolygon = true;
var drawpoint = false;
var drawline = false;
var drawstroke = true;
var cx = 200;
var cy = 200;
var r = 0;
var g = 0;
var b = 0;
var fr = 255;
var fg = 255;
var fb = 255;
var transperency = 0;
var stroketransperency = 255;
var thickness = 1;
var strokethickness = 10;
var invsides = 360 / sides;
draw = function() {
    background(255, 255, 255);
    stroke(r, g, b, stroketransperency);
    fill(fr, fg, fb, transperency);
    if (drawellipse) {
        ellipse(cx, cy, radius * 2, radius * 2);
    }
    if (drawpolygon) {
        beginShape();
        strokeWeight(thickness);
        for (var i = 0; i < 360; i += invsides) {
            var y = sin(i + rotation) * radius + cx;
            var x = cos(i + rotation) * radius + cy;
            var ny = sin((i - invsides) + rotation) * radius + cx;
            var nx = cos((i - invsides) + rotation) * radius + cy;
            vertex(x, y);
        }
        endShape(CLOSE);
    }
    if (drawline) {
        for (var i = 0; i < 360; i += invsides) {
            var y = sin(i + rotation) * radius + cx;
            var x = cos(i + rotation) * radius + cy;
            var ny = sin((i - invsides) + rotation) * radius + cx;
            var nx = cos((i - invsides) + rotation) * radius + cy;
            line(x, y, nx, ny);
        }
    }
    if (drawpoint) {
        strokeWeight(strokethickness);
        for (var i = 0; i < 360; i += invsides) {
            var y = sin(i + rotation) * radius + cx;
            var x = cos(i + rotation) * radius + cy;
            point(x, y);
        }
    }
};