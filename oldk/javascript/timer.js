/*
q=start
w=stop
e=reset
*/
var date = Date || (new Object.constructor("return Date;"))();
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
var invexz = function(num) {
var strnum = num.toString();
var newnum;
if (strnum<10) {
newnum = strnum + "0";
} else {
newnum = strnum;
}
return newnum;
};
var inf60t = 0;
var draw = function() {
    frameRate(30);
    var infsec = floor(inf60t / 60);
    var infmin = floor(infsec / 60);
    var infhur = floor(infmin / 60);
    var infday = floor(infhur / 24);
    var infyea = floor(infday / 365);
    var tt = inf60t % 60;
    var sd = infsec % 60;
    var me = infmin % 60;
    var hr = infhur % 24;
    var da = infday % 365;
    var ye = infyea;
    background(255, 255, 255);
    //if (keyCode === 81) {inf60t += 2; fill(0, 255, 0); rect(0, 0, 40, 40);}
    //else if (keyCode === 87) {inf60t += 0; fill(255, 0, 0); rect(40, 0, 40, 40);}
    //else if (keyCode === 69) {inf60t = 0; fill(0, 255, 255); rect(80, 0, 40, 40);}
    textAlign(CENTER, CENTER);
    fill(255, 0, 0);
    textFont(createFont("quartz"), 35);
    text(ye + " years, " + da + " days", 200, 150);
    textFont(createFont("quartz"), 50);
    text(exz(hr) + ":" + exz(me) + ":" + exz(sd) + ":" + exz(floor(tt)), 200, 200);
    text(exz(hr) + ":" + exz(me) + ":" + exz(sd) + "." + invexz(round(inf60t/60*100)%100), 200, 250);
};
