colorMode(HSB);

var getColor = function(x, y) {
    return color(dist(x, y, 200, 200) * 2, 255, 255);
};

var xc = 0;
var yc = 0;

var cx = 100;
var cy = 100;

var mx = 400;
var my = 400;

var amx = mx / cx;
var amy = my / cy;

var makechunk = function() {
    if (yc <= amy) {
        for (var x = cx * xc; x < min(cx * xc + cx, mx); x ++) {
            for (var y = cy * yc; y < min(cy * yc + cy, my); y ++) {
                set(x, y, getColor(x, y));
            }
        }
        xc += 1;
        if (xc >= amx) {
            xc = 0;
            yc += 1;
        }
    }
};

draw = function() {
    makechunk();
};