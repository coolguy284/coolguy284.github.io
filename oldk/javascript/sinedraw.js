/* 
   Red: Sine
 Green: Cosine
  Blue: Tangent
Yellow: Arc-Sine
  Teal: Arc-Cosine
Violet: Arc-tangent
*/
stroke(0, 0, 0);
line(0, 200, 400, 200);
line(200, 0, 200, 400);
var amp = 50;
var fre = 2;
var si = true;
var co = false;
var ta = false;
var as = false;
var ac = false;
var at = false;
var main = fre * 0.1;
for (var deg = -(360*(fre/2)); deg < (360*(fre/2)); deg+= main) {
    if (si) {
        stroke(255, 0, 0);
        point(deg / ((360*fre)/400) + 200, sin(deg)*amp+200);
    }
    if (co) {
        stroke(0, 255, 0);
        point(deg / ((360*fre)/400) + 200, cos(deg)*amp+200);
    }
    if (ta) {
        stroke(0, 0, 255);
        point(deg / ((360*fre)/400) + 200, tan(deg)*amp+200);
    }
    if (as) {
        stroke(255, 255, 0);
        point(deg / ((360*fre)/400) + 200, 1/(sin(deg))*amp+200);
    }
    if (ac) {
        stroke(0, 255, 255);
        point(deg / ((360*fre)/400) + 200, 1/(cos(deg))*amp+200);
    }
    if (at) {
        stroke(255, 0, 255);
        point(deg / ((360*fre)/400) + 200, 1/(tan(deg))*amp+200);
    }
}
