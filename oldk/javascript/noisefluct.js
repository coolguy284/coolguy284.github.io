fill(0, 0, 0);
var scalef = 1;//play around with this to make it more pixely
scale(scalef);
frameRate(200);
noiseDetail(8, 0.5);
var perfectval = 143.008;
var date = Date || (new Object.constructor("return Date;"))();
var telwidth = width / scalef;
var telheight = height / scalef;
textSize(12 / scalef);
draw = function() {
    background(255);
    var time = new date().getTime() / 10;
    for (var i = -1; i++ < telwidth;) {
        var noisemak = noise(i / 100, time / 1000) * telwidth;
        rect(i, telheight, 1, -noisemak);
    }
    text(time / 1000, 0, 10 * (1 / scalef));
};