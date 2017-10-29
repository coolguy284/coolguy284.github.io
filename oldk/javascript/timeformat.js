var date = Date || (new Object.constructor("return Date;"))();
fill(0, 0, 0);
var time = new Array(0);
draw = function() {
    time[0] = (new date().getTime());
    time[1] = (new date().getDate());
    time[2] = (new date().getMilliseconds());
    time[3] = (new date().getSeconds());
    time[4] = (new date().getMinutes());
    time[5] = (new date().getHours());
    time[6] = (new date().getDate());
    time[7] = (new date().getMonth());
    time[8] = (new date().getYear());
    time[9] = (new date().getDay());
    background(255, 255, 255);
    for (var i = 0; i <= 9; i++) {
        text(time[i], 10, 10 * i + 10);
    }
};
