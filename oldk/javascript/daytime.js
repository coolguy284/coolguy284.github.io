background(255);
frameRate(100);
var col = color(0, 0, 0);
var dayColor = function(newi) {
    var coloure;
    var si = newi % 24000;
    if (si < 4000) {
        coloure = color(0);
    } else if (si < 4500) {
        coloure = lerpColor(color(0), color(50, 0, 50), constrain(si - 4000, 0, 500) / 500);
    } else if (si < 6000) {
        coloure = lerpColor(color(50, 0, 50), color(0, 127, 255), constrain(si - 4500, 0, 1500) / 1500);
    } else if (si < 18000) {
        coloure = color(0, 127, 255);
    } else if (si < 19500) {
        coloure = lerpColor(color(0, 127, 255), color(50, 0, 50), constrain(si - 18000, 0, 1500) / 1500);
    } else if (si < 20000) {
        coloure = lerpColor(color(50, 0, 50), color(0), constrain(si - 19500, 0, 500) / 500);
    } else if (si < 24000) {
        coloure = color(0);
    }
    return coloure;
};
var moonphasedr = function(x, y, w, h, mp) {
    if (mp === 0) {
        fill(max(color(20), col));
        ellipse(x, y, w + 1, h + 1);
    } else if (mp < 0.25) {
        fill(200);
        ellipse(x, y, w, h);
        fill(max(color(20), col));
        arc(x, y, w + 1, h + 1, -89, 90);
        var overfill = constrain(mp * 4, 0, 1);
        ellipse(x, y, ((w * (w - (overfill * w))) / 50) + 1, h + 1);
    } else if (mp === 0.25) {
        fill(200);
        ellipse(x, y, w, h);
        fill(max(color(20), col));
        arc(x, y, w + 1, h + 1, -89, 90);
    } else if (mp < 0.5) {
        fill(200);
        ellipse(x, y, w, h);
        fill(max(color(20), col));
        arc(x, y, w + 1, h + 1, -89, 90);
        fill(200);
        var overfill = constrain((mp - 0.25) * 4, 0, 1);
        ellipse(x, y, ((w * ((overfill * w))) / 50), h);
    } else if (mp === 0.5) {
        fill(200);
        ellipse(x, y, w + 1, h + 1);
    } else if (mp < 0.75) {
        fill(max(color(20), col));
        ellipse(x, y, w, h);
        fill(200);
        arc(x, y, w + 1, h + 1, -89, 90);
        fill(200);
        var overfill = constrain((mp - 0.5) * 4, 0, 1);
        ellipse(x, y, (w - (w * ((overfill * w))) / 50), h);
    } else if (mp === 0.75) {
        fill(200);
        ellipse(x, y, w, h);
        fill(max(color(20), col));
        arc(x, y, w + 1, h + 1, 90, 270);
    } else if (mp < 1) {
        fill(max(color(20), col));
        ellipse(x, y, w, h);
        fill(200);
        arc(x, y, w + 1, h + 1, -89, 90);
        fill(max(color(20), col));
        var overfill = constrain((mp - 0.75) * 4, 0, 1);
        ellipse(x, y, ((w * ((overfill * w))) / 50) + 1, h + 1);
    } else if (mp === 1) {
        fill(max(color(20), col));
        ellipse(x, y, w + 1, h + 1);
    }
};
var daytime = 0;
var moonphase = 0;
var season = 0;
noStroke();
for (var i = 0; i < 24000; i += 100) {
    var col = dayColor(i);
    fill(col);
    rect(i / 100, 0, 1, 100);
}
draw = function() {
    var moddaytime = daytime % 24000;
    var modmoonphase = moonphase % 27000;
    var modseason = season % 365254;
    var daytimesine = moddaytime / 24000;
    var seasonsine = modseason / 365254;
    var moonphasesine = modmoonphase / 27000;
    var col = dayColor(moddaytime - 100);
    fill(col);
    rect((moddaytime - 100) / 100, 0, 1, 100);
    stroke(0);
    strokeWeight(1);
    fill(255);
    rect(245, 5, 150, 40);
    rect(245, 55, 150, 40);
    noStroke();
    fill(255);
    rect(241, 0, 10, 0);
    fill(255, 0, 0);
    rect(moddaytime / 100, 0, 1, 100);
    rect((modmoonphase / 27000) * 148 + 246, 6, 1, 39);
    rect((modseason / 365254) * 148 + 246, 56, 1, 39);
    fill(dayColor(moddaytime));
    rect(20, 120, 360, 260);
    fill(255, 127, 0);
    var sinumx = (cos(daytimesine * 360 + 90) * 100);
    var sinumy = (sin(daytimesine * 360 + 90) * 100) + (sin(-seasonsine * 360) * 50);
    var sinusx = (cos(daytimesine * 360 + 270) * 100);
    var sinusy = (sin(daytimesine * 360 + 270) * 100) + (sin(-seasonsine * 360) * 50);
    var sunrx = sinumx + 200;
    var sunry = sinumy + 380;
    var monrx = sinusx + 200;
    var monry = sinusy + 380;
    ellipse(sunrx, sunry, 50, 50);
    moonphasedr(monrx, monry, 50, 50, moonphasesine);
    noFill();
    stroke(0);
    strokeWeight(10);
    rect(15, 115, 370, 270);
    stroke(255);
    rect(5, 105, 390, 290);
    noStroke();
    daytime += 1000 / 60 / 5;
    moonphase = ((daytime / 24000) / 27) * 27000;
    season = ((daytime / 24000) / 365.254) * 365254;
};