var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
var width = 600;
var height = 600;
size(width, height, P2D);
stc = function(lat, lon, alt) {
  return [cos(lat) * cos(lon) * alt,
          cos(lat) * sin(lon) * alt,
          sin(lat) * alt];
}
cts = function(x, y, z) {
  return [acos(z / (x*x+y*y+z*z)), atan(y / x), sqrt(x*x+y*y+z*z)];
}
mp = function() {
  var pmx = 0;
  var pmy = 0;
  if (w == 1) {
    pmy += mc;
  }
  if (s == 1) {
    pmy -= mc;
  }
  if (a == 1) {
    pmx += mc;
  }
  if (d == 1) {
    pmx -= mc;
  }
  if (q == 1) {
    ang -= ac;
  }
  if (e == 1) {
    ang += ac;
  }
  //d = pmx*pmx+pmy*pmy;
  //mx = cos(ang * pmx) * d - sin(ang * pmy) * d;
  //my = sin(ang * pmx) * d + cos(ang * pmy) * d;
  mx = pmx;
  my = pmy;
  px += mx;
  py += my;
  if (py >= 90) {py = 90 - (py - 90); px += 180}
  if (py < -90) {py = -89 + (py + 90); px += 180}
  if (px >= 180) {px -= 360;}
  if (px < -180) {px += 360;}
}
px = 0;
py = 0;
pz = 1;
ang = 0;
mc = 1;
ac = 0.1;
w = 0;
a = 0;
s = 0;
d = 0;
q = 0;
e = 0;
keyPressed = function() {
  if (keyCode == 87) {w = 1;}
  if (keyCode == 83) {s = 1;}
  if (keyCode == 68) {a = 1;}
  if (keyCode == 65) {d = 1;}
  if (keyCode == 81) {q = 1;}
  if (keyCode == 69) {e = 1;}
}
keyReleased = function() {
  if (keyCode == 87) {w = 0;}
  if (keyCode == 83) {s = 0;}
  if (keyCode == 68) {a = 0;}
  if (keyCode == 65) {d = 0;}
  if (keyCode == 81) {q = 0;}
  if (keyCode == 69) {e = 0;}
}
textAlign(LEFT, TOP);
draw = function() {
  mp();
  background(0);
  fill(255);
  text('Lat: ' + py + '\nLon: ' + px + '\nAng: ' + ang, 0, 400);
  eu = stc(radians(py), radians(px), 1);
  text('X: ' + eu[0] + '\nY: ' + eu[1] + '\nZ: ' + eu[2], 0, 443);
  stroke(255);
  fill(0);
  ellipse(300, 200, 400, 400);
  rect(240, 420, 360, 180);
  fill(255);
  ellipse(px + 420, -py + 510, 10, 10);
  line(px + 420, -py + 510, px + 420 + cos(ang) * 20, -py + 510 + sin(ang) * 20);
}
//end processingjs
  }
};
var canvas = document.getElementById("mycanvas"); 
var processingInstance = new Processing(canvas, sketchProc);