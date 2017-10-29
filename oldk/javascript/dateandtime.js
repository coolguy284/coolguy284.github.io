textFont(createFont("arial"),50);
var exz = function(num) {
var strnum = num.toString();
var newnum;
if (strnum<10) {
newnum = "0" + strnum;
} else {
newnum = strnum;
}
return newnum;
};
var draw = function() {
    background(255, 0, 0);
    var nowtime = exz(hour()) + " : " + exz(minute()) + " : " + exz(second());
    var nowdat = exz(month()) + "/" + exz(day()) + "/" + year();
    var runtime = millis() + " ms";
    fill(0, 0, 0);
    text("Date & Time:",10,50);
    text(nowtime,10,150);
    text(nowdat,10,100);
    text(runtime,10,200);
    text(frameCount + " Frames",10,250);
};
