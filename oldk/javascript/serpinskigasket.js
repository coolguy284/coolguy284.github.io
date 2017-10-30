fill(0);
noStroke();
rectMode(CENTER);
var w = width;
var h = height;
var b1 = function(x, y) {
    pushMatrix();
    translate(x, y);
    rect(0, 0, width / 3, height / 3);
    popMatrix();
};
var s1 = function(x, y, f, c) {
    pushMatrix();
    translate(x, y);
    var con = w / f * 3;
    if (c > 0) {rect(con * 0, con * -1, w / f, h / f);}
    if (c > 1) {rect(con * 1, con * -1, w / f, h / f);}
    if (c > 2) {rect(con * 1, con * 0, w / f, h / f);}
    if (c > 3) {rect(con * 1, con * 1, w / f, h / f);}
    if (c > 4) {rect(con * 0, con * 1, w / f, h / f);}
    if (c > 5) {rect(con * -1, con * 1, w / f, h / f);}
    if (c > 6) {rect(con * -1, con * 0, w / f, h / f);}
    if (c > 7) {rect(con * -1, con * -1, w / f, h / f);}
    popMatrix();
};
var s2 = function(x, y, f, c){
    pushMatrix();
    translate(x, y);
    var con = w / f * 3;
    if (c > 0) {s1(con * 0, con * -1, f * 3, c);}
    if (c > 8) {s1(con * 1, con * -1, f * 3, c - 8);}
    if (c > 16) {s1(con * 1, con * 0, f * 3, c - 16);}
    if (c > 24) {s1(con * 1, con * 1, f * 3, c - 24);}
    if (c > 32) {s1(con * 0, con * 1, f * 3, c - 32);}
    if (c > 40) {s1(con * -1, con * 1, f * 3, c - 40);}
    if (c > 48) {s1(con * -1, con * 0, f * 3, c - 48);}
    if (c > 56) {s1(con * -1, con * -1, f * 3, c - 56);}
    popMatrix();
};
var s3 = function(x, y, f, c){
    pushMatrix();
    translate(x, y);
    var con = w / f * 3;
    if (c > 0) {s2(con * 0, con * -1, f * 3, c);}
    if (c > 64) {s2(con * 1, con * -1, f * 3, c - 64);}
    if (c > 128) {s2(con * 1, con * 0, f * 3, c - 128);}
    if (c > 192) {s2(con * 1, con * 1, f * 3, c - 192);}
    if (c > 256) {s2(con * 0, con * 1, f * 3, c - 256);}
    if (c > 320) {s2(con * -1, con * 1, f * 3, c - 320);}
    if (c > 384) {s2(con * -1, con * 0, f * 3, c - 384);}
    if (c > 448) {s2(con * -1, con * -1, f * 3, c - 448);}
    popMatrix();
};
var s4 = function(x, y, f, c){
    pushMatrix();
    translate(x, y);
    var con = w / f * 3;
    if (c > 0) {s3(con * 0, con * -1, f * 3, c);}
    if (c > 512) {s3(con * 1, con * -1, f * 3, c - 512);}
    if (c > 1024) {s3(con * 1, con * 0, f * 3, c - 1024);}
    if (c > 1536) {s3(con * 1, con * 1, f * 3, c - 1536);}
    if (c > 2048) {s3(con * 0, con * 1, f * 3, c - 2048);}
    if (c > 2560) {s3(con * -1, con * 1, f * 3, c - 2560);}
    if (c > 3072) {s3(con * -1, con * 0, f * 3, c - 3072);}
    if (c > 3584) {s3(con * -1, con * -1, f * 3, c - 3584);}
    popMatrix();
};
var s5 = function(x, y, f, c){
    pushMatrix();
    translate(x, y);
    var con = w / f * 3;
    if (c > 0) {s4(con * 0, con * -1, f * 3, c);}
    if (c > 4096) {s4(con * 1, con * -1, f * 3, c - 4096);}
    if (c > 8192) {s4(con * 1, con * 0, f * 3, c - 8192);}
    if (c > 12288) {s4(con * 1, con * 1, f * 3, c - 12288);}
    if (c > 16384) {s4(con * 0, con * 1, f * 3, c - 16384);}
    if (c > 20480) {s4(con * -1, con * 1, f * 3, c - 20480);}
    if (c > 24576) {s4(con * -1, con * 0, f * 3, c - 24576);}
    if (c > 28672) {s4(con * -1, con * -1, f * 3, c - 28672);}
    popMatrix();
};
var total = false;
var block = 4682;
if (total) {block = 40000;}
if (block > 0 || total) {
    b1(w/2, h/2);
} if (block > 1 || total) {
    s1(w/2, h/2, 9, block - 1);
} if (block > 9 || total) {
    s2(w/2, h/2, 9, block - 9);
} if (block > 73 || total) {
    s3(w/2, h/2, 9, block - 73);
} if (block > 585 || total) {
    s4(w/2, h/2, 9, block - 585);
} if (block > 4681 || total) {
    s5(w/2, h/2, 9, block - 4681);
}