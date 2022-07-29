clik = [];
var l10s;
var l10sp;
var l10m = 0;
var l1s;
var l1sp;
var l1m = 0;
function AddPress() {
  clik.push(new Date());
}
function Loop() {
  cd = new Date();
  pd = new Date(cd);
  pd.setSeconds(cd.getSeconds() - 10);
  for (var i = 0; i < clik.length; i++) {
    if (clik[i] < pd) {
      clik[i] = 'ell';
    }
  }
  while (clik[0] == 'ell') {
    clik.splice(0, 1);
  }
  l10s = clik.length;
  l10sp = l10s / 10;
  l10m = Math.max(l10sp, l10m);
  l1s = 0;
  cd = new Date();
  pd = new Date(cd);
  pd.setSeconds(cd.getSeconds() - 1);
  for (i = 0; i < clik.length; i++) {
    if (clik[i] > pd) {
      l1s++;
    }
  }
  l1sp = l1s;
  l1m = Math.max(l1sp, l1m);
  presses10s.innerHTML = 'Presses in last 10s: ' + l10s;
  presses10ps.innerHTML = 'Presses per second: ' + l10sp;
  presses10m.innerHTML = 'Max presses per second: ' + l10m;
  presses1s.innerHTML = 'Presses in last 1s: ' + l1s;
  presses1ps.innerHTML = 'Presses per second: ' + l1sp;
  presses1m.innerHTML = 'Max presses per second: ' + l1m;
  setCookie('p10m', parseInt(l10m * 10) + '', 365);
  setCookie('p1m', l1m + '', 365);
  cookie.innerHTML = document.cookie;
}
function ClearCookie() {
  l10m = 0;
  l1m = 0;
  clik = [];
  l10s = 0;
  l10sp = 0;
  l1s = 0;
  l1sp = 0;
  setCookie('p10m', 0, 365);
  setCookie('p1m', 0, 365);
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return 0;
}
var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
var width = 600;
var height = 200;
size(width, height, P2D);
background(0);
var getsel = get(1, 0, 599, 200);
keyPressed = function() {
  AddPress();
}
draw = function() {
  background(0);
  set(0, 0, getsel);
  stroke(0, 0, 255);
  point(599, 200-(l10sp*3));
  stroke(255, 0, 0);
  point(599, 200-(l1sp*3));
  getsel = get(1, 0, 599, 200);
};
//end processingjs
  }
};
try {
  //cookie.innerHTML = document.cookie;
  a = [getCookie('p10m'), getCookie('p1m')];
  console.log(a);
  l10m = parseInt(a[0])/10;
  l1m = parseInt(a[1]);
} catch (e) {}
Loop();
setInterval(Loop, 10);
var canvas = document.getElementById("mycanvas"); 
var processingInstance = new Processing(canvas, sketchProc);
