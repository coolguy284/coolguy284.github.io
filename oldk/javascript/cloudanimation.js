noStroke();
/**
//"2 to the power of " + poe + " is " + 
for (var poe = 0; poe < 32.1; poe++) {
    debug(pow(2,poe));
}
**/
var pixels = 100;
var invpixels = 400/pixels;
var inc = 0;
draw = function() {
    var i = 0;
    for (;;) {
        if (i++ === pixels) {break;}
        var j = 0;
        for (;;) {
            if (j++ === pixels) {break;}
            var nie = noise(i / 25, j / 25, inc)*255;
            fill(nie, nie, 255);
            rect(i * invpixels - invpixels, j * invpixels - invpixels, invpixels, invpixels);
        }
    }
    inc+= 0.01;
};
