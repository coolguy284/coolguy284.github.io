var octaves = 8;

noiseDetail(octaves, (octaves > 1) ? 0.5 : 1);
frameRate(Infinity);

var noisescale = 0.03;

var xc = 0;
var yc = 0;

var cx = 100;
var cy = 100;

var mx = 600;
var my = 600;

var amx = mx / cx;
var amy = my / cy;

var makechunk = function() {
    if (yc <= amy) {
        for (var x = cx * xc; x < min(cx * xc + cx, mx); x ++) {
            for (var y = cy * yc; y < min(cy * yc + cy, my); y ++) {
                var noisecolor = color(noise(x * noisescale, y * noisescale) * 255);
                set(x, y, noisecolor);
            }
        }
        xc += 1;
        if (xc >= amx) {
            xc = 0;
            yc += 1;
        }
    }
};

var chunkimg = get(0, 0, mx, my);

draw = function() {
    set(0, 0, chunkimg);
    makechunk();
    //chunkimg = get(0, 0, 600, 600);
};