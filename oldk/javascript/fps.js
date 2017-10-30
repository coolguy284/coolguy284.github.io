var pmillis = 0;
var avg = 100;
var amp = 2;
var framearray = [];
for (var i = 0; i < avg; i ++) {
    framearray.push(0);
}
var getfps = function() {
    return 1 / ((millis() - pmillis) / 1000);
};
var getavg = function() {
    var tot = 0;
    for (var i = 0; i < avg; i ++) {
        tot += framearray[i];
    }
    return tot / avg;
};
draw = function() {
    var img = get(0, height / 2, width, height / 2);
    noStroke();
    fill(255);
    background(255);
    image(img, -1, height / 2);
    fill(0);
    rect(width - 1, height - (getavg() * amp), 1, getavg() * amp);
    text(getavg(), 10, 10);
    framearray.push(getfps());
    for (var i = framearray.length - 1; i > 0; i --) {
        framearray[i - 1] = framearray[i];
    }
    pmillis = millis();
};
