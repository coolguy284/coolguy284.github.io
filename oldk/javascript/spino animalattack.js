var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;
var budf = 20;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?
    fill(255, 255, 255);
    ellipse(bodyX-13, 144, 20, 20);
    ellipse(bodyX+13, 144, budf, budf);
    budf++;
    line(200,250,200,190);
};
