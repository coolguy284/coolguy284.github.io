frameRate(60);
var shapetor = 2;
var fisize = 100;
var scsize = 20;
draw = function() {
    background(255, 255, 255);
    fill(255, 0, 0);
    ellipse(200, 200, 100, 100);
    for (var i = 0; i < 360; i += 0.2) {
        var corcirx = cos(i) * fisize + 200;
        var corciry = sin(i) * fisize + 200;
        var smcirx = cos(i * (shapetor + 1)) * scsize;
        var smciry = sin(i * (shapetor + 1)) * scsize;
        var totcirx = corcirx + smcirx;
        var totciry = corciry + smciry;
        point(totcirx, totciry);
    }
    //shapetor += 2;
};
