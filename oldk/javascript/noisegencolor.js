noStroke();
/* the design is used to minimise lag, because if it did the whole page in one tick, there would be a runtime errror.
*/
var xmd = 0;//mimimum x
var ymd = 0;//minimum y
var xmnd = width;//maximum x
var ymnd = height;//maximum y
var nvf = 0.03;//noise density
var px = 1;//size of pixel in x- direction
var py = 1;//size of pixel in y- direction
var valcheck = function() {
if (xmd<0) {xmd=0;}
if (xmd>width) {xmd=width;}
if (xmd>xmnd) {xmd=xmnd;}
if (xmnd<0) {xmnd=0;}
if (xmnd>width) {xmnd=width;}
if (xmnd<xmd) {xmnd=xmd;}
if (ymd<0) {ymd=0;}
if (ymd>height) {ymd=height;}
if (ymd>xmnd) {ymd=ymnd;}
if (ymnd<0) {ymnd=0;}
if (ymnd>height) {ymnd=height;}
if (ymnd<xmd) {ymnd=ymd;}
if (px<1) {px=1;}
if (px>400) {px=400;}
if (py<1) {py=1;}
if (py>400) {py=400;}
};
valcheck();
var draw = function() {
for (var x = 0;x<1;x++) {
for (var y = ymd;y<(ymnd/py);y++) {
if ((x+xmd+(frameCount)-10)*px<xmnd) {
fill(noise((x+xmd+(frameCount*nvf)-10*px),y*nvf)*255, noise((x+xmd+(frameCount*nvf)-10*px)+10000,y*nvf)*255, noise((x+xmd+(frameCount*nvf)-10*px)+20000,y*nvf)*255);
rect((x+xmd+(frameCount)-10)*px, y*py, px, py);
}
}
}
if ((x+xmd+(frameCount)-10)*px<xmnd) {
println("Initalizing: " + round((x+xmd+(frameCount)-10)/xmnd*100) + "%" + " (" + round((x+xmd+(frameCount)-10)/xmnd*width) + " pixels)");
} else if ((x+xmd+(frameCount)-10)*px===xmnd) {
println("Initializtion Complete" + " (" + width + " pixels)");
}
};
