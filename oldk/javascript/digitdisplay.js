background(0);
strokeCap(SQUARE);
stroke(0, 255, 0);
var drawDigit = function(x, y, val, size, con, cof) {
    strokeWeight(size / 10);
    con = con || color(0, 255, 0);
    cof = cof || color(0, 0, 0);
    switch (val) {
        case 0:
            fill(cof);
            fill(con);
            line(x - (size / 4), y - (size / 2), x + (size / 4), y - (size / 2));
            line(x - (size / 4), y + (size / 2), x + (size / 4), y + (size / 2));
            line(x - (size / 4), y - (size / 2), x - (size / 4), y);
            line(x - (size / 4), y, x - (size / 4), y + (size / 2));
            line(x + (size / 4), y - (size / 2), x + (size / 4), y);
            line(x + (size / 4), y, x + (size / 4), y + (size / 2));
            break;
        case 1:
            fill(cof);
            fill(con);
            line(x + (size / 4), y - (size / 2), x + (size / 4), y);
            line(x + (size / 4), y, x + (size / 4), y + (size / 2));
            break;
        case 2:
            fill(cof);
            fill(con);
            line(x - (size / 4), y - (size / 2), x + (size / 4), y - (size / 2));
            line(x - (size / 4), y, x - (size / 4), y + (size / 2));
            line(x - (size / 4), y, x + (size / 4), y);
            line(x + (size / 4), y - (size / 2), x + (size / 4), y);
            line(x - (size / 4), y + (size / 2), x + (size / 4), y + (size / 2));
            break;
        case 3:
            fill(cof);
            fill(con);
            line(x + (size / 4), y - (size / 2), x + (size / 4), y);
            line(x + (size / 4), y, x + (size / 4), y + (size / 2));
            line(x - (size / 4), y, x + (size / 4), y);
            line(x - (size / 4), y - (size / 2), x + (size / 4), y - (size / 2));
            line(x - (size / 4), y + (size / 2), x + (size / 4), y + (size / 2));
            break;
        case 4:
            fill(cof);
            fill(con);
            line(x - (size / 4), y, x + (size / 4), y);
            line(x + (size / 4), y - (size / 2), x + (size / 4), y);
            line(x + (size / 4), y, x + (size / 4), y + (size / 2));
            line(x - (size / 4), y - (size / 2), x - (size / 4), y);
            break;
        case 5:
            fill(cof);
            fill(con);
            line(x - (size / 4), y, x + (size / 4), y);
            line(x - (size / 4), y - (size / 2), x + (size / 4), y - (size / 2));
            line(x - (size / 4), y + (size / 2), x + (size / 4), y + (size / 2));
            line(x - (size / 4), y - (size / 2), x - (size / 4), y);
            line(x + (size / 4), y, x + (size / 4), y + (size / 2));
            break;
        case 6:
            fill(cof);
            fill(con);
            line(x - (size / 4), y, x + (size / 4), y);
            line(x - (size / 4), y - (size / 2), x + (size / 4), y - (size / 2));
            line(x - (size / 4), y + (size / 2), x + (size / 4), y + (size / 2));
            line(x - (size / 4), y - (size / 2), x - (size / 4), y);
            line(x + (size / 4), y, x + (size / 4), y + (size / 2));
            line(x - (size / 4), y, x - (size / 4), y + (size / 2));
            break;
        case 7:
            fill(cof);
            fill(con);
            line(x + (size / 4), y - (size / 2), x + (size / 4), y);
            line(x + (size / 4), y, x + (size / 4), y + (size / 2));
            line(x - (size / 4), y - (size / 2), x + (size / 4), y - (size / 2));
            break;
        case 8:
            fill(con);
            line(x - (size / 4), y, x + (size / 4), y);
            line(x - (size / 4), y - (size / 2), x + (size / 4), y - (size / 2));
            line(x - (size / 4), y + (size / 2), x + (size / 4), y + (size / 2));
            line(x - (size / 4), y - (size / 2), x - (size / 4), y);
            line(x + (size / 4), y, x + (size / 4), y + (size / 2));
            line(x - (size / 4), y, x - (size / 4), y + (size / 2));
            line(x + (size / 4), y - (size / 2), x + (size / 4), y);
            break;
        case 9:
            fill(cof);
            line(x - (size / 4), y + (size / 2), x + (size / 4), y + (size / 2));
            fill(con);
            line(x - (size / 4), y, x + (size / 4), y);
            line(x - (size / 4), y - (size / 2), x + (size / 4), y - (size / 2));
            line(x - (size / 4), y + (size / 2), x + (size / 4), y + (size / 2));
            line(x - (size / 4), y - (size / 2), x - (size / 4), y);
            line(x + (size / 4), y, x + (size / 4), y + (size / 2));
            line(x + (size / 4), y - (size / 2), x + (size / 4), y);
            break;
    }
};
var LED = function(value, x, y, size, digit) {
    var cen = value.length / 2;
    var siz = (50 / size) * 33;
    for (var i = 0; i < digit; i++) {
        drawDigit((x + (siz * cen)) - (i * siz), y, floor(value / pow(10, i)) % 10, size);
    }
};
frameRate(120);
fill(0, 255, 0);
textSize(30);
textAlign(CENTER, CENTER);
var date = (new Object.constructor("return Date;"))();
draw = function() {
    var millisCount = millis();
    background(0);
    text("Milliseconds Elasped:", 200, 36);
    ///*
    for (var i = 0; i < 10; i++) {
        drawDigit((200 + (33 * 4.5)) - (i * 33), 86, floor(millisCount / pow(10, i)) % 10, 50);
    }
    //*/
    //LED(millisCount, 200, 86, 50, 4);
    text("Seconds Elasped:", 200, 138);
    for (var i = 0; i < 7; i++) {
        drawDigit((200 + (33 * 3)) - (i * 33), 189, floor((millisCount / 1000) / pow(10, i)) % 10, 50);
    }
    text("Milliseconds Since 1900:", 200, 239);
    for (var i = 0; i < 15; i++) {
        drawDigit((200 + (21 * 7)) - (i * 21), 277, floor((new date().getTime()) / pow(10, i)) % 10, 30);
    }
    text("Frame Count:", 200, 309);
    for (var i = 0; i < 9; i++) {
        drawDigit((200 + (33 * 4)) - (i * 33), 355, floor((frameCount) / pow(10, i)) % 10, 50);
    }
};
