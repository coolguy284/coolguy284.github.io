//var dategeter = Date || (new Object.constructor("return Date;"))();
var dategeter = (new Object.constructor("return Date;"))();
fill(0);
//DO NOT TOUCH THESE VARIBLES
//THEY PREDICT THE POPULATION OF THE EARTH
var incamount = 1.0000000121811010;
var mul = 143100000000;
var timul = 0.00002;
var currentpop = 0;
var futuretime = 51.72;//play around with this varible, it controls how far in the future to predict in years
draw = function() {
    textFont(createFont("courier"), 12);
    background(255);
    var time = new dategeter().getTime();
    var expo = pow(incamount, time * timul) / log(time);
    var currentpop = expo * mul;
    var commcurpop = nfc(currentpop, 0, -1);
    var fexpo = pow(incamount, time * timul + (futuretime * timul * 1000 * 60 * 60 * 24 * 365)) / log(time);
    var fcurrentpop = fexpo * mul;
    var fcommcurpop = nfc(fcurrentpop, 0, -1);
    textAlign(CORNER, BASELINE);
    text((new dategeter().getYear() + 1900) + ", the current year:", 10, 15);
    text("Current Population(nocom): " + currentpop + "\nCurrent Population(comma): " + commcurpop, 10, 30);
    text((new dategeter().getYear() + 1900 + parseFloat(futuretime.toFixed(0))) + ", " + futuretime + " years in the future:", 10, 60);
    text("Future Population(nocom): " + fcurrentpop + "\nFuture Population(comma): " + fcommcurpop, 10, 76);
    textAlign(CENTER, CENTER);
    textSize(42);
    text("Population:\n" + commcurpop, 200, 300);
};
