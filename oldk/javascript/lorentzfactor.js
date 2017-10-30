var C = 299752458;

var betsqrt = function(val) {
    if (val >= 0) {
        return sqrt(val);
    } else {
        return -sqrt(-val);
    }
};

var lorentz = function(v) {
    return 1 / betsqrt(1 - ((v*v) / (C*C)));
};
var precision = 6;
var mass = 1;
var rmass = 1;
var timerate = 1;
var dd = 100;
var rdd = 0;
var d = 0;
var pd = 0;
var ddiff = 0;
textFont(createFont('Courier', 15));
textAlign(CENTER, CENTER);
var drawtext = function() {
    fill(0);
    text('Relativistic Acceleration Simulation', 200, 20);
    text('Acceleration:\n' + dd.toFixed(precision), 100, 60);
    text('True Acceleration:\n' + rdd.toFixed(precision), 100, 100);
    text('Rest Mass:\n' + mass.toFixed(precision), 100, 140);
    text('Mass:\n' + rmass.toFixed(precision), 100, 180);
    text('Time Rate:\n' + timerate.toFixed(precision), 100, 220);
    text('Velocity:\n' + d.toFixed(precision) + '\n' + (d / C).toFixed(precision), 100, 260);
};

draw = function() {
    d += dd / rmass;
    rmass = lorentz(d) * mass;
    timerate = 1 / lorentz(d);
    background(255);
    drawtext();
    rdd = d - pd;
    pd = d;
};