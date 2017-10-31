var posl = [[200, 200]];
var angl = [0];
var lenl = 100;
var bm = function(num) {
    if (num > 3) {
        return num - 4;
    } else if (num < 0) {
        return num + 4;
    } else {
        return num;
    }
};
var r = function(posl, angl, lenl) {
    var nposl = [];
    var nangl = [];
    for (var i = 0; i < posl.length; i ++) {
        var j = posl[i];
        var k = angl[i];
        nangl.push(bm(k - 1), k, bm(k + 1));
        if (k === 0) {
            nposl.push([j[0] - lenl, j[1]], [j[0], j[1] - lenl], [j[0] + lenl, j[1]]);
        } else if (k === 1) {
            nposl.push([j[0], j[1] - lenl], [j[0] + lenl, j[1]], [j[0], j[1] + lenl]);
        } else if (k === 2) {
            nposl.push([j[0] + lenl, j[1]], [j[0], j[1] + lenl], [j[0] - lenl, j[1]]);
        } else if (k === 3) {
            nposl.push([j[0], j[1] + lenl], [j[0] - lenl, j[1]], [j[0], j[1] - lenl]);
        }
    }
    return [nposl, nangl, lenl / 2];
};
var d = function(posl, angl, lenl) {
    lenl *= 2;
    for (var i = 0; i < posl.length; i ++) {
        var j = posl[i];
        var k = angl[i];
        var ep;
        if (k === 0) {
            ep = [j[0], j[1] + lenl];
        } else if (k === 1) {
            ep = [j[0] - lenl, j[1]];
        } else if (k === 2) {
            ep = [j[0], j[1] - lenl];
        } else if (k === 3) {
            ep = [j[0] + lenl, j[1]];
        }
        line(ep[0], ep[1], j[0], j[1]);
    }
};
var m = function() {
    var q = r(posl, angl, lenl);
    posl = q[0];
    angl = q[1];
    lenl = q[2];
    d(posl, angl, lenl);
};
stroke(255, 0, 0);
line(200, 400, 200, 200);
stroke(255, 127, 0);
m();
stroke(255, 255, 0);
m();
stroke(127, 255, 0);
m();
stroke(0, 255, 0);
m();
stroke(0, 255, 127);
m();
stroke(0, 255, 255);
m();
stroke(0, 127, 255);
m();