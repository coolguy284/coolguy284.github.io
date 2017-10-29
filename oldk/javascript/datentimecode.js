var date = Date || (new Object.constructor("return Date;"))();
draw = function() {
    var time = new date().getTime();
    background(255, 255, 255);
    fill(0, 0, 0);
    text(date(), 0, 10);
    text(time, 0, 20);
};
