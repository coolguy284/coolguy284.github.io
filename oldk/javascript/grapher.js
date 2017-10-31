var graphfunction = function(x) {
    return x * 0 + pow(x, 2);
};

var distx = 5,
    disty = 5,
    scalex = width / distx,
    scaley = height / disty,
    bigx = 1,
    bigy = 1,
    smallx = 0.1,
    smally = 0.1,
    incx = 0.01,
    incy = 0.05;

scalex /= 2;
scaley /= 2;
/*
distx /= 2;
disty /= 2;
bigx /= 2;
bigy /= 2;
smallx /= 2;
smally /= 2;//*/

var make = function() {
    pushMatrix();
    translate(width / 2, height / 2);
    strokeWeight(1);
    stroke(127);
    for (var i = -distx; i < distx; i += smallx) {
        var v = i * scalex;
        line(v, -height, v, height);
    }
    for (var i = -disty; i < disty; i += smally) {
        var v = i * scaley;
        line(-height, v, height, v);
    }
    strokeWeight(2);
    stroke(0);
    for (var i = -distx; i < distx; i += bigx) {
        var v = i * scalex;
        line(v, -width, v, width);
    }
    for (var i = -disty; i < disty; i += bigy) {
        var v = i * scaley;
        line(-height, v, height, v);
    }
    strokeWeight(3);
    line(-width, 0, width, 0);
    line(0, -height, 0, height);
    strokeWeight(1);
    stroke(255, 0, 0);
    for (var i = -distx, px = -distx, py = graphfunction(px); i < distx; i += incx) {
        var gfv = graphfunction(i);
        line(i * scalex, -gfv * scaley, px * scalex, -py * scaley);
        px = i;
        py = gfv;
    }
    popMatrix();
};

make();
