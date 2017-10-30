loadPixels();
var imagedata = imageData.data;

var setpixel = function(x, y, color) {
    color += 16777216;
    var alpha = color % 0x100;
    imagedata[(y*width+x)*4] = (color >> 16) % 0x100;
    imagedata[(y*width+x)*4+1] = (color >> 8) % 0x100;
    imagedata[(y*width+x)*4+2] = color % 0x100;
    imagedata[(y*width+x)*4+3] = (alpha === 0) ? 255 : alpha;
};

for (var x = 100; x <= 300; x += 1) {
    for (var y = 100; y <= 300; y += 1) {
        setpixel(x, y, color(255, 0, 0));
    }
}

updatePixels();