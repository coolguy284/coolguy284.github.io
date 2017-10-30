/*
Neutron Star
4000000000000 m/s/s
13000 m

Sun
273.812 m/s/s
695500000 m

Earth
9.8 m/s/s
6371000 m
*/
var ts = 1;
var accuracy = 100;
var fps = 60;
var y = 100000;
var maxy = y;
var dy = 0;
var ddy = -9.81;
var rddy = 0;
var pdy = dy;
var sg = -9.81;
var radius = 6371000;
var constantg = false;
var grate = 9.81;
var asa = 0.09;
var oasa = asa;
var atmodrag = 1;
var acoeff = 0.00023;
var firstrace = 10000;
var isair = true;
var airw = 2;
var sf = 0.05;
var mass = 60000;
ts = ts * accuracy;
var time = 0;
var maxddy = 0;
var temp = 27;
var dopara = true;
var paraasa = 700;
var parh = 1000;
var deploying = false;
var deployed = false;
var retracting = false;
var compstatus = 0;
var hloss = 500000;
//389 91
frameRate(fps);
textFont(createFont("courier"));
draw = function() {
    if (y > 0) {
    time += (1 / fps) / ts * accuracy;
    for (var i = 0; i < accuracy; i ++) {
    background(255);
    fill(0);
    //y = 100000;
    //dy = 1;
    if (constantg) {
        ddy = sg;
    } else {
        ddy = (1 / ((y + radius) * (y + radius))) * sg * (radius * radius);
    }
    dy += ddy / fps / ts;
    if (dopara && y < parh) {
        deploying = true;
    } else if (deployed && (y > parh || !dopara)) {
        retracting = true;
    }
    if (deploying) {
        compstatus += 0.005;
        asa = paraasa * compstatus + oasa;
    }
    if (compstatus >= 1 && deploying) {
        asa = paraasa;
        deploying = false;
        deployed = true;
        retracting = false;
        compstatus = 0;
    } else if (compstatus <= 0 && retracting) {
        asa = oasa;
        deploying = false;
        deployed = false;
        retracting = false;
        compstatus = 0;
    }
    if (deployed) {
        asa = paraasa;
    }
    if (retracting) {
        compstatus += 0.005;
        deployed = 0;
        asa = paraasa * (1 - compstatus) + oasa;
    }
    if (isair) {
        if (airw === 1) {
        var meter = y / 3.3;
        var dforce;
        if (y < firstrace) {
            var airthick = (14.7 * pow(2, meter * 2.2 * -0.0000555)) * atmodrag;
            dforce = 0.5 * airthick * pow(abs(dy), 2) * asa * acoeff;
        } else if (y < firstrace + (atmodrag * (firstrace / 10))) {
            var airthick = ((14.7 * pow(2, meter * -0.0000555)) * atmodrag) * constrain(map(y, firstrace, firstrace + (atmodrag * (firstrace / 10)), 1, 0), 0, 1);
            dforce = 0.5 * airthick * pow(abs(dy), 2) * asa * acoeff;
        } else {
            dforce = 0;
        }
        if ((dy === abs(dy) && dforce === abs(dforce)) || (dy !== abs(dy) && dforce !== abs(dforce))) {
            dforce = -dforce;
        }
        dy += dforce;
        } else if (airw === 2) {
        var meter = y / 3.3;
        var dforce;
        var airthick = (14.7 * pow(2, meter * 2.2 * -0.0000555)) * atmodrag * 0.2;
        dforce = 0.5 * airthick * pow(abs(dy), 2) * asa * acoeff / fps / ts;
        if ((dy === abs(dy) && dforce === abs(dforce)) || (dy !== abs(dy) && dforce !== abs(dforce))) {
            dforce = -dforce;
        }
        dy += dforce;
        var airtemp = airthick * 103 - 275;
        temp += sq(dforce) * 100 / (asa * 12);
        temp -= (((temp - airtemp) / hloss)) * (airthick / 2.94);
        }
    }
    y += dy / fps / ts;
    rddy = (dy - pdy) * fps * ts / accuracy;
    if (y <= 0) {
        y = 0;
    }
    }
    maxddy = max(maxddy, rddy);
    var mph = ((dy * 3.3) * 3600) / 5280;
    text("Height: " + floor(y * 1000) / 1000 + " meters", 10, 20);
    text(floor(y * 3300) / 1000 + " feet", 220, 20);
    text(floor(mph * 1000) / 1000 + " mph", 180, 40);
    text("Speed: " + floor(dy * 1000) / 1000 + " m/s", 10, 40);
    text("Time: " + floor(time * 1000) / 1000 + " seconds", 10, 60);
    text("Temp: " + round(temp * 1000) / 1000 + "C", 210, 60);
    text("Acceleration at Height, Surface: " + floor(ddy * 1000) / 1000 + " " + (floor(ddy * 1000) / 1000 / grate ).toFixed(3) + ",\n                       " + sg + " " + (sg / grate).toFixed(3) + " m/s/s g", 10, 80);
    if (y + (dy / fps / ts * accuracy) > 0) {
    text("DDY, Experienced DDY:\n" + rddy.toFixed(3) + " " + (rddy / grate).toFixed(3) + ",\n" + (rddy - ddy).toFixed(3) + " " + ((rddy - ddy) / grate).toFixed(3) + " m/s/s g", 80, 120);
    text("Energy:\nKenetic: " + floor((mass / 1000) * sq(dy) * 1000) / 1000 + "\nPotential: " + floor(y * sg * (mass / 1000) * 1000) / 1000 + "\nMomentum: " + abs((mass / 1000) * dy).toFixed(3), 80, 165);
    } else {
    var betdy = dy / ts;
    text("DDY, Experienced DDY:\n" + ((0 - betdy) * fps * ts * sf).toFixed(3) + " " + ((0 - betdy) * fps * ts * sf / grate).toFixed(3) + ",\n" + (((0 - betdy) * fps * ts * sf) - ddy).toFixed(3) + " " + (((0 - betdy) * fps * ts * sf / grate) - ddy).toFixed(3) + " m/s/s g", 80, 120);
    text("Energy:\nKenetic: " + floor((mass / 1000) * sq(dy) * 1000) / 1000 + "\nPotential: " + floor(y * sg * (mass / 1000) * 1000) / 1000 + "\nMomentum: " + abs((mass / 1000) * dy).toFixed(3), 80, 165);
    text("Newtons of impact: " + ((((0 - betdy) * fps * ts * sf) - ddy) * (mass / 1000)).toFixed(3), 80, 225);
    text("Maximum G's: " + (maxddy / grate).toFixed(3), 80, 245);
    }
    text("Height Graphically:", 10, 100);
    fill(255);
    stroke(0);
    rect(10, 110, 50, 280);
    stroke(255, 0, 0);
    var adjy = map(y, 0, maxy, 389, 111);
    line(11, adjy, 59, adjy);
    pdy = dy;
    }
};
