noStroke();
colorMode(HSB);
background(255, 0, 255);
var gradraw = function(x, y, w, h, cs, cb, mode) {
    for (var i = 0; i < w; i++) {
        fill(i / (w/255), cs, cb);
        if (mode === 0) {
            rect((i*(w/width)) + x, y, constrain(w/400, 1, width), h);
        } else if (mode === 1) {
            rect(x, (i*(h/height)) + y, w, constrain(h/400, 1, height));
        } else if (mode === 2) {} else {Program.assertEqual(1,2);}
    }
};
gradraw(0, 0, width, 50, 255, 255, 0);
stroke(255, 0, 0);
