var date = Date || (new Object.constructor("return Date;"))();
var hypotheticaldate = 1450000000000;
var len = 71;
var start = 94;
rectMode(CENTER);
textAlign(CENTER, CENTER);
textFont(createFont("arial", 50));
noStroke();
var timercup = function(x, y) {
    beginShape(LINES);
    stroke(0);
    vertex(x - 15, y + 50);
    vertex(x - 15, y);
    vertex(x - 15, y);
    vertex(x - 10, y - 16);
    vertex(x - 10, y - 16);
    vertex(x, y - 20);
    vertex(x, y - 20);
    vertex(x + 10, y - 16);
    vertex(x + 10, y - 16);
    vertex(x + 15, y);
    vertex(x + 15, y);
    vertex(x + 15, y + 50);
    endShape();
};
var duocup = function(x, y) {
    timercup(x - 16, 180);
    timercup(x + 14, 180);
};
draw = function() {
    var countdown = hypotheticaldate - new date().getTime();
    var infsec = floor(countdown / 1000);
    var infmin = floor(infsec / 60);
    var infhr = floor(infmin / 60);
    var infdays = floor(infhr / 24);
    var sec = nf(infsec % 60, 2, -1);
    var min = nf(infmin % 60, 2, -1);
    var hr = nf(infhr % 24, 2, -1);
    var days = nf(infdays, 2, -1);
    if (countdown > 120000) {
        fill(255, 128, 0);
        background(117);
        text(days, start, 200);
        text(hr, start + len, 200);
        text(min, start + len * 2, 200);
        text(sec, start + len * 3, 200);
        duocup(start, 180);
        duocup(start + len, 180);
        duocup(start + len * 2, 180);
        duocup(start + len * 3, 180);
        fill(0);
        rect(200, 252, 306, 50);
    } else if (countdown > 60000) {
        background(0);
        for (var i = 0; i < 10; i ++) {
            for (var j = 0; j < 10; j ++) {
                var redc = constrain(random(-128, 128), 0, 128);
                var greenc = constrain(random(-128, 128), 0, 128);
                var bluec = constrain(random(-128, 128), 0, 128);
                fill(redc, greenc, bluec);
                rect(i * 40, j * 40, 40, 40);
            }
        }
    } else if (countdown > 0) {
        fill(0);
        background(255, 0, 0);
        text("The Apocalypse Has Come", 0, 0, 400, 400);
    } else if (countdown < 0) {
        fill(0);
        background(255, 255, 0);
        text("GOODNESS BEGINS!", 0, 0, 400, 400);
    }
};