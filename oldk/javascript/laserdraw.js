var getPowerColor = function(power, cd) {
    cd *= 3;
    if (power === 0) {
        return color(255, 0, 0, 0);
    } else if (power < 0.1) {
        return lerpColor(color(255, 0, 0, 255), color(255, 0, 0, 0), constrain(abs(cd), 0, map(power, 0, 0.1, 0, 5)) / map(power, 0, 0.1, 0, 5));
    } else if (power < 0.5) {
        var lc = [255, lerp(0, 255, map(power, 0.1, 0.5, 0, 1)), 0];
        return lerpColor(color(lc[0], lc[1], lc[2], 255), color(lc[0], lc[1], lc[2], 0), constrain(abs(cd), 0, map(power, 0.1, 0.5, 5, 10)) / map(power, 0.1, 0.5, 5, 10));
    } else if (power < 1) {
        var lc = [lerp(255, 0, map(power, 0.5, 1, 0, 1)), 255, 0];
        return lerpColor(color(lc[0], lc[1], lc[2], 255), color(lc[0], lc[1], lc[2], 0), constrain(abs(cd), 0, map(power, 0.5, 1, 10, 20)) / map(power, 0.5, 1, 10, 20));
    } else if (power < 1.5) {
        var lc = [0, 255, lerp(0, 255, map(power, 1, 1.5, 0, 1))];
        return lerpColor(color(lc[0], lc[1], lc[2], 255), color(lc[0], lc[1], lc[2], 0), constrain(abs(cd), 0, map(power, 1, 1.5, 20, 25)) / map(power, 1, 1.5, 20, 25));
    } else if (power < 2) {
        var lc = [0, lerp(255, 0, map(power, 1.5, 2, 0, 1)), 255];
        return lerpColor(color(lc[0], lc[1], lc[2], 255), color(lc[0], lc[1], lc[2], 0), constrain(abs(cd), 0, map(power, 1.5, 2, 25, 30)) / map(power, 1.5, 2, 25, 30));
    } else {
        var lc = [lerp(0, 255, map(power, 2, 5, 0, 1)), 0, 255];
        return lerpColor(color(lc[0], lc[1], lc[2], 255), color(lc[0], lc[1], lc[2], 0), constrain(abs(cd), 0, map(power, 2, 5, 30, 50)) / map(power, 2, 5, 30, 50));
    }
};

var drawLaser = function(x1, y1, x2, y2, power) {
    var alen = dist(x1, y1, x2, y2);
    var rot = atan2(y2 - y1, x2 - x1);
    pushMatrix();
    translate(x1, y1);
    rotate(rot);
    for (var i = max(-power * 2.5, -500); i <= min(power * 2.5, 500); i += 1) {
        stroke(getPowerColor(power, i));
        line(0, i, alen, i);
    }
    popMatrix();
};

drawLaser(100, 200, 300, 200, 3.14);