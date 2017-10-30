resetMatrix();
var zoom = 1 * pow(10, 0);

var a10img;

var ex = false;
var proton = function(x, y) {
    fill(0, 255, 255);
    ellipse(x, y, 4, 4);
    fill(0, 255, 0);
    ellipse(cos(240) * 1.5 + x, -sin(240) * 1.5 + y, 0.004, 0.004);
    ellipse(cos(120) * 1.5 + x, -sin(120) * 1.5 + y, 0.004, 0.004);
    fill(255, 0, 0);
    ellipse(cos(0) * 1.5+ x, -sin(0) * 1.5 + y, 0.004, 0.004);
};
var neutron = function(x, y) {
    fill(255, 127, 127);
    ellipse(x, y, 4, 4);
    fill(0, 255, 0);
    ellipse(cos(240) * 1.5 + x, -sin(240) * 1.5 + y, 0.004, 0.004);
    fill(255, 0, 0);
    ellipse(cos(120) * 1.5 + x, -sin(120) * 1.5 + y, 0.004, 0.004);
    ellipse(cos(0) * 1.5+ x, -sin(0) * 1.5 + y, 0.004, 0.004);
};
var atomsect = function(amt, pnf) {
    if (pnf) {
        translate(-cos(amt) * 4, sin(amt) * 4);
        neutron(0, 0);
    } else {
        translate(-cos(amt) * 4, sin(amt) * 4);
        proton(0, 0);
    }
};
var atom = function(x, y) {
    pushMatrix();
    translate(x, y);
    fill(127);
    ellipse(0, 0, 4000, 4000);
    proton(0, 0);
    atomsect(210, true);
    atomsect(330, false);
    atomsect(30, true);
    atomsect(90, false);
    atomsect(150, true);
    atomsect(210, false);
    atomsect(210, true);
    atomsect(270, false);
    atomsect(330, true);
    atomsect(330, false);
    atomsect(30, true);
    atomsect(30, false);
    atomsect(90, true);
    atomsect(90, false);
    atomsect(150, true);
    atomsect(150, false);
    atomsect(210, true);
    atomsect(210, false);
    atomsect(210, true);
    atomsect(270, false);
    atomsect(270, true);
    atomsect(330, false);
    atomsect(330, true);
    atomsect(330, false);
    atomsect(30, true);
    atomsect(30, false);
    atomsect(30, true);
    atomsect(90, false);
    atomsect(90, true);
    atomsect(90, false);
    atomsect(150, true);
    atomsect(150, false);
    atomsect(150, true);
    atomsect(210, false);
    atomsect(210, true);
    atomsect(210, false);
    atomsect(210, true);
    atomsect(270, false);
    atomsect(270, true);
    atomsect(270, false);
    atomsect(330, true);
    atomsect(330, false);
    atomsect(330, true);
    atomsect(330, false);
    atomsect(30, true);
    atomsect(30, false);
    atomsect(30, true);
    atomsect(30, false);
    atomsect(90, true);
    atomsect(90, false);
    atomsect(90, true);
    popMatrix();
};
var drawai = function() {
background(200, 255, 255);
zoom /= pow(10, 15) * 4;
translate(200, 200);
scale(zoom);
noStroke();
if (zoom >= 0.1) {
var mf = 120 * 2;
translate(-cos(mf) * 1.5, sin(mf) * 1.5);
atom(0, 0);
} else if (zoom >= 0.01) {
resetMatrix();
scale(0.1);
atom(2000, 2000);
var atomimg = get(0, 0, 400, 400);
background(200, 255, 255);
resetMatrix();
var mf = 120 * 2;
translate(200, 200);
scale(zoom * 10);
translate(200, 200);
for (var x = -6; x < 5; x += 1) {
    for (var y = -6; y < 5; y += 1) {
        image(atomimg, x * 400, y * 400);
    }
}
} else if (zoom >= 0.001) {
resetMatrix();
scale(0.1);
atom(2000, 2000);
var atomimg = get(0, 0, 400, 400);
background(200, 255, 255);
resetMatrix();
translate(200, 200);
scale(0.1);
for (var x = -6; x < 5; x += 1) {
    for (var y = -6; y < 5; y += 1) {
        image(atomimg, x * 400, y * 400);
    }
}
a10img = get(0, 0, 400, 400);
background(200, 255, 255);
resetMatrix();
translate(200, 200);
scale(zoom * 10);
translate(200, 200);
var mf = 120 * 2;
translate(-cos(mf) * 1.5, sin(mf) * 1.5);
for (var x = -6; x < 5; x += 1) {
    for (var y = -6; y < 5; y += 1) {
        image(a10img, x * 4000, y * 4000, 4000, 4000);
    }
}
} else if (zoom >= 0.0001) {
resetMatrix();
scale(0.1);
atom(2000, 2000);
var atomimg = get(0, 0, 400, 400);
background(200, 255, 255);
resetMatrix();
translate(200, 200);
scale(0.1);
for (var x = -6; x < 5; x += 1) {
    for (var y = -6; y < 5; y += 1) {
        image(atomimg, x * 400, y * 400);
    }
}
a10img = get(0, 0, 400, 400);
background(200, 255, 255);
resetMatrix();
translate(200, 200);
scale(0.01);
var mf = 120 * 2;
translate(-cos(mf) * 1.5, sin(mf) * 1.5);
for (var x = -6; x < 5; x += 1) {
    for (var y = -6; y < 5; y += 1) {
        image(a10img, x * 4000, y * 4000, 4000, 4000);
    }
}
var a100img = get(0, 0, 400, 400);
background(200, 255, 255);
resetMatrix();
translate(200, 200);
scale(zoom * 10);
translate(200, 200);
var mf = 120 * 2;
translate(-cos(mf) * 1.5, sin(mf) * 1.5);
for (var x = -6; x < 5; x += 1) {
    for (var y = -6; y < 5; y += 1) {
        image(a100img, x * 40000, y * 40000, 40000, 40000);
    }
}
resetMatrix();
} else {
background(127, 127, 127);
}
};
var dl = function() {
drawai();
resetMatrix();
zoom *= pow(10, 15) * 4;
fill(255);
rect(0, 380, 400, 20);
stroke(0);
line(0, 380, 400, 380);
fill(0);
textAlign(CENTER, CENTER);
text(nfc(zoom, -1, -1) + ' times zoom', 200, 390);
};
//var zoom = pow(10, 13) * 3.9;
//dl();
//*
var draw = function() {
    dl();
    if (! ex && zoom < 4000000000000000000000) {
    zoom *= 1.01;
    } else if (! ex && zoom >= 4000000000000000000000) {
    ex = true;
    } else if (ex && zoom > 1) {
    zoom /= 1.01;
    }
};
//*/
