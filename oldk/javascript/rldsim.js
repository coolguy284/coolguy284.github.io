var searth = [[12, -33], [11, -33], [12, -34], [10, -33], [12, -32], [11, -32], [10, -32], [12, -31],
[11, -31], [9, -33], [10, -31], [9, -32]];
var earth = [];
/*var earth = [[45, -120], [42, -120], [45, -124], [45, -127], [42, -124], [39, -124], [39, -120], [39, -116],
[45, -116], [42, -116], [45, -112], [42, -112], [39, -112]];*/
var xoff = 0;
var yoff = 0;
var RLDFactor = 1.1;
var pl = 2;
for (var i = 0; i < searth.length; i ++) {
    earth[i] = [searth[i][0] * 1.8 * pl, searth[i][1] * 1.8 * pl];
}
var modul = function(val, lonl) {
    if (lonl === 1) {
        while (val + 180 > 360) {
            val -= 360;
        }
        while (val + 180 < 0) {
            val += 360;
        }
    } else if (lonl === 0) {
        while (val + 90 > 180) {
            val -= 180;
        }
        while (val + 90 < 0) {
            val += 180;
        }
    }
    return val - 1;
};
draw = function() {
    background(255);
    noStroke();
    fill(0, 0, 255);
    rect(0, 0, 200, 100);
    rect(100, 300, 200, 100);
    rect(0, 150, 200, 100);
    ellipse(300, 50, 100, 100);
    ellipse(300, 200, 100, 100);
    fill(0, 255, 0);
    for (var i = 0; i < earth.length; i ++) {
        pushMatrix();
        translate(100, 50);
        var x = modul(earth[i][1] + xoff, 1) / 1.8;
        var y = modul(-earth[i][0] + yoff, 0) / 1.8;
        rect(x, y, pl, pl);
        popMatrix();
    }
    for (var i = 0; i < earth.length; i ++) {
        pushMatrix();
        translate(100, 200);
        var x = modul(earth[i][1] + xoff, 1) / 1.8 / RLDFactor;
        var y = modul(-earth[i][0] + yoff, 0) / 1.8 / RLDFactor;
        rect(x, y, pl / RLDFactor, pl / RLDFactor);
        popMatrix();
    }
    for (var i = 0; i < earth.length; i ++) {
        pushMatrix();
        translate(200, 350);
        var x = modul(earth[i][1], 1) / 1.8;
        var y = modul(-earth[i][0], 0) / 1.8;
        rect(x, y, pl, pl);
        popMatrix();
    }
    for (var i = 0; i < earth.length; i ++) {
        pushMatrix();
        translate(300, 50);
        if (modul(earth[i][1] + xoff, 1) < 90 && modul(earth[i][1] + xoff, 1) > -90 && modul(earth[i][1] + yoff, 1) < 0 && modul(earth[i][1] + yoff, 1) > -180) {
            var x = sin(modul(earth[i][1] + xoff, 1)) / 1.8 * 50;
            var y = cos(modul(-earth[i][0] + yoff, 0)) / 1.8 * 50 * 2 - 50;
            rect(x, y, pl, pl);
        }
        popMatrix();
    }
};