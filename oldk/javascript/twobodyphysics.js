var G = 100;
var px = 0;
var py = 100;
var vx = 1;
var vy = 0;
var ax = 0;
var ay = 0;
var sca = 1;
var sc = 200;
var ts = 1;
var acc = 1;
var gacc = 1;
var d = dist(px, py, 0, 0);
var v = dist(vx, vy, 0, 0);
var a = dist(ax, ay, 0, 0);
var pe = d;
var ap = d;
var ecc = (ap - pe) / (ap + pe);
var sma = (pe + ap) / 2;
var smi = sqrt(pe * ap);
var gravfor = [0, 2];
background(0);
var img = get(400, 0, 200, 300);
var sim = function(px, py, vx, vy, acc) {
    var force;
    if (gravfor[0] === 0) {
        force = (-G / pow(100, 2 - gravfor[1])) / pow(dist(px, py, 0, 0), gravfor[1]);
    } else if (gravfor[0] === 1) {
        force = -pow(2, -dist(px, py, 0, 0) / 100) * G / 5200;
    }
    force *= pow(ts, 2);
    var ang = atan2(py, px);
    ax = cos(ang) * force;
    ay = sin(ang) * force;
    vx *= ts;
    vy *= ts;
    vx += ax;
    vy += ay;
    px += vx;
    py += vy;
    vx /= ts;
    vy /= ts;
    return [px, py, vx, vy];
};
var c = function(val) {
    return 100 - constrain(val, 0, 100);
};
var gl = function(ini, lin) {
    return ini + lin * 12;
};
textFont('consolas', 12);
draw = function() {
    pushMatrix();
    fill(255);
    stroke(255);
    translate(200, 200);
    scale(1/sca);
    background(0);
    ellipse(0, 0, 40, 40);
    ts /= acc;
    for (var i = 0; i < acc; i ++) {
        var r = sim(px, py, vx, vy);
        px = r[0];
        py = r[1];
        vx = r[2];
        vy = r[3];
    }
    ts *= acc;
    var fpx = px;
    var fpy = py;
    var fvx = vx;
    var fvy = vy;
    ts /= gacc;
    for (var i = 0; i < sc; i ++) {
        var r = sim(fpx, fpy, fvx, fvy, 1);
        fpx = r[0];
        fpy = r[1];
        fvx = r[2];
        fvy = r[3];
        point(fpx, -fpy);
    }
    ts *= gacc;
    ellipse(px, -py, 10, 10);
    popMatrix();
    noStroke();
    fill(0);
    rect(400, 0, 200, 400);
    image(img, 399, 0);
    stroke(255, 0, 0);
    d = dist(px, py, 0, 0);
    v = dist(vx, vy, 0, 0);
    a = dist(ax, ay, 0, 0);
    pe = min(pe, d);
    ap = max(ap, d);
    ecc = (ap - pe) / (ap + pe);
    sma = (pe + ap) / 2;
    smi = sqrt(pe * ap);
    point(599, c(d / 2));
    point(599, c(v * 50) + 100);
    point(599, c(a * 1000) + 200);
    fill(255);
    text('Distance: ' + d.toFixed(5), 0, gl(400, 1));
    text('Velocity: ' + v.toFixed(5), 0, gl(400, 2));
    text('Acceleration: ' + a.toFixed(5), 0, gl(400, 3));
    text('Perigree: ' + pe.toFixed(5), 0, gl(400, 4));
    text('Apogee: ' + ap.toFixed(5), 0, gl(400, 5));
    text('Eccentricity: ' + ecc.toFixed(5), 0, gl(400, 6));
    text('Semi Major: ' + sma.toFixed(5), 0, gl(400, 7));
    text('Semi Minor: ' + smi.toFixed(5), 0, gl(400, 8));
    img = get(400, 0, 200, 300);
};