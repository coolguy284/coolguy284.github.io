var zf = function(val) {
    if (val < 10) {
        return '0' + val;
    }
    return val;
};
var zfm = function(val) {
    if (val < 10) {
        return '00' + val;
    } else if (val < 100) {
        return '0' + val;
    }
    return val;
};
var conv = function(yr, mon, day, hr, min, sec, mil) {
    return hr * 3600 + min * 60 + sec;
};
var unconv = function(tim) {
    var add;
    if (tim < 0) {
        add = '-';
        tim *= -1;
    } else {
        add = '';
    }
    var a = [floor(tim / 3600) % 60, floor(tim / 60) % 60, floor(tim) % 60, floor(tim * 1000) % 1000];
    return [a, add + zf(a[0]) + ':' + zf(a[1]) + ':' + zf(a[2]) + '.' + zfm(a[3])];
};
var date = new Date();
var ctime = function() {
    return hour() * 3600 + minute() * 60 + second();// + date.getMilliseconds() / 1000;
};
var from = conv(year(), month(), day(), 8, 0, 0, 0);
var to = conv(year(), month(), day(), 14, 20, 0, 0);
textFont(createFont('arial', 50));
textAlign(CENTER, CENTER);
noStroke();
draw = function() {
    background(45, 168, 0);
    fill(4, 11, 201);
    text('Time Left:\n' + unconv(to - ctime())[1], 200, 200);
    var tf = 1 - ((to - ctime()) / (to - from));
    rect(0, 300, floor(tf * 400), 50);
    rect(0, 350, (tf * 400 - floor(tf * 400)) * 400, 50);
};