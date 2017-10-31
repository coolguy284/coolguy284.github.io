loadPixels();
imageMode(CENTER);
textFont(createFont('courier new'));
{
var blocks = [];
var textures = [];
var px = 32;
var py = -1;
var stats = [10, 10, 10, 10, [], 10, 0, 10, 0, 0.001, 0.1, 1];
var mulah = 0;
var mx = 0;
var my = 0;
var nx = 10;
var ny = 10;
/*
fueltank cooler armor cargohold item fuel temp health cargo efficiency speed
*/
var exstat = false;
}
{
noStroke();
fill(255);
rect(0, 0, 20, 20);
textures[0] = get(0, 0, 20, 20);
fill(127, 91, 0);
rect(0, 0, 20, 20);
textures[1] = get(0, 0, 20, 20);
fill(127);
rect(0, 0, 20, 20);
textures[2] = get(0, 0, 20, 20);
fill(50);
rect(0, 0, 20, 20);
textures[3] = get(0, 0, 20, 20);
fill(127);
rect(0, 0, 20, 20);
fill(0);
ellipse(10, 10, 10, 10);
textures[4] = get(0, 0, 20, 20);
fill(127);
rect(0, 0, 20, 20);
fill(255, 127, 0);
ellipse(10, 10, 10, 10);
textures[5] = get(0, 0, 20, 20);
}
println('e');
{
var plog = function(str) {
    println(str);
};
var getrandom = function(y, x) {
    var val1 = noise(x / nx, y / ny, 0);
    var val2 = noise(x / nx, y / ny, 10);
    var val3 = noise(x / nx, y / ny, 20);
    var val4 = noise(x / nx, y / ny, 30);
    var val5 = noise(x / nx, y / ny, 40);
    if (y === 0) {
        return 1;
    }
    if (val5 < min(0.25 + 0.001 * y, 0.3)) {
        return 7;
    }
    if (val4 < min(0.25 + 0.001 * y, 0.3)) {
        return 6;
    }
    if (val3 < min(0.25 + 0.001 * y, 0.3)) {
        return 5;
    }
    if (val2 < 0.4 - 0.001 * y) {
        return 4;
    }
    if (val1 < 0.01 * sqrt(y) + min(0.01 * y, 0.2)) {
        return 3;
    }
    if (val1 < 0.01 * sqrt(y) + min(0.02 * y, 0.4)) {
        return 2;
    }
    return 1;
};
var truemod = function(x, y) {
    if (y > 1023) {
        y = 1023 - (y - 1024);
        x = ((x + 32) % 64);
    }
    if (x > 63) {
        x = x - 64;
    } else if (x < 0) {
        x = x + 64;
    }
    return [x, y];
};
var getblock = function(x, y) {
    if (y < 0) {
        return textures[0];
    }
    var p = truemod(x, y);
    var bv = blocks[p[1]][p[0]];
    if (bv >= 0) {
        return textures[bv];
    } else {
        bv = blocks[p[1]][p[0]] = getrandom(p[1], p[0]);
        return textures[bv];
    }
};
var setblock = function(x, y, val) {
    if (x < 0 || x > 63 || y < 0 || y > 1023) {
        return;
    }
    blocks[y][x] = val;
};
var getstat = function(stat) {
    return stats[stat];
};
var setstat = function(stat, val) {
    stats[stat] = val;
};
var getstats = function() {
    var s0 = getstat(0);
    var s1 = getstat(1);
    var s2 = getstat(2);
    var s3 = getstat(3);
    var s4 = getstat(4);
    var s5 = getstat(5);
    var s6 = getstat(6);
    var s7 = getstat(7);
    var s8 = getstat(8);
    var s9 = getstat(9);
    var s10 = getstat(10);
    var statv = '';
    statv = 'Stats:';
    statv += '\nFuel:        ' + s5.toFixed(1) + '/' + s0.toFixed(1);
    statv += ' ' + (s5 / s0 * 100).toFixed(0) + '%';
    statv += '\nTemperature: ' + s6.toFixed(1) + '/' + s1.toFixed(1);
    statv += ' ' + (s6 / s1 * 100).toFixed(0) + '%';
    statv += '\nHealth:      ' + s7.toFixed(1) + '/' + s2.toFixed(1);
    statv += ' ' + (s7 / s2 * 100).toFixed(0) + '%';
    statv += '\nCargo:       ' + s8.toFixed(1) + '/' + s3.toFixed(1);
    statv += ' ' + (s8 / s3 * 100).toFixed(0) + '%';
    statv += '\nEffificency: ' + (1 / s9).toFixed(2) + ' mpl';
    statv += '\nSpeed:       ' + s10.toFixed(2) + ' m/s';
    if (exstat) {
        
    }
    return statv;
};
}
for (var i = 0; i < 1024; i ++) {
    var pi = [];
    for (var j = 0; j < 64; j ++) {
        pi[j] = -1;
    }
    blocks[i] = pi;
}
keyPressed = function() {
    println(keyCode);
    if (getstat(5) > 0) {
        if (keyCode === 87 && my >= 0) {
            my -= 1;
            plog('s');
        }
        if (keyCode === 65 && mx >= 0) {
            mx -= 1;
            plog('a');
        }
        if (keyCode === 83 && my <= 0) {
            my += 1;
            plog('w');
        }
        if (keyCode === 68 && mx <= 0) {
            mx += 1;
            plog('d');
        }
    }
    if (keyCode === 69) {
        exstat = true;
    }
    var p = truemod(px, py);
    px = p[0];
    py = p[1];
};
println('ea');
println(textures[0]);
//frameRate(1);
draw = function() {
    background(255);
    for (var i = floor(px - 10); i < ceil(px + 11); i ++) {
        for (var j = floor(py - 10); j < ceil(py + 11); j ++) {
            image(getblock(i, j), i * 20 - px * 20 + 400, j * 20 - py * 20 + 200);
        }
    }
    var m = truemod(mx + px, my + py);
    mx = m[0] - px;
    my = m[1] - py;
    if (mx > getstat(10) && getstat(5) > getstat(9)) {
        mx -= getstat(10);
        px += getstat(10);
        setstat(5, getstat(5) - getstat(9));
    } else if (mx < -getstat(10) && getstat(5) > getstat(9)) {
        mx += getstat(10);
        px -= getstat(10);
        setstat(5, getstat(5) - getstat(9));
    } else if (my > getstat(10) && getstat(5) > getstat(9)) {
        my -= getstat(10);
        py += getstat(10);
        setstat(5, getstat(5) - getstat(9));
    } else if (my < -getstat(10) && getstat(5) > getstat(9)) {
        my += getstat(10);
        py -= getstat(10);
        setstat(5, getstat(5) - getstat(9));
    } else if (abs(px - round(px)) < getstat(11) && abs(py - round(py)) < getstat(11)) {
        px = round(px);
        py = round(py);
        mx = 0;
        my = 0;
        setblock(px, py, 0);
    } else {
        px = round(px);
        py = round(py);
        mx = 0;
        my = 0;
    }
    setstat(6, max(py / 5, 0));
    if (getstat(6) > getstat(2)) {
        setstat(7, getstat(7) - 0.001 * (py - getstat(1) * 5));
    }
    fill(0, 255, 0);
    ellipse(400, 200, 20, 20);
    fill(0);
    rect(0, 0, 200, 400);
    fill(255);
    textSize(20);
    text(mulah + '$', 0, 18);
    textSize(12);
    text('Position:\nX: ' + px.toFixed(2) + ' (' + (mx + px).toFixed(2) + ')' + '\nY: ' + py.toFixed(2) + ' (' + (my + py).toFixed(2) + ')', 0, 30);
    text(getstats(), 0, 70);
    exstat = false;
    //for (var i = 0; i < 1000; i ++) {print('e');}
};