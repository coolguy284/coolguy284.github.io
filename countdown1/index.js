var width, height;
var zf, zfm, l, yearday, r, mr, f, conv, unconv, ctime;
var drawe, hexu, hexv, modf, modf2, modf3, modf4, modf5;
var id, cd, dif, date, af, at, sf, st, from, to, dur;
var bgcol, fgcol, ct, tf, ntf, tf2;
var SetStart, ResetStart, SetEnd, ResetEnd;
var Setf, Reset, Current;
var SetBG, SetFG, SetBGC, SetFGC, ResetBG, ResetFG, SetCol, ResetCol;
var Stop, Freeze, Mystery, Button;
var PRI, simplede, simpled;
Math.atanh = Math.atanh || function(x) {
  return Math.log((1+x)/(1-x)) / 2;
};
{
var SwitchTab = function(event, tabv) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabv).style.display = "block";
  event.currentTarget.className += " active";
};
var Toggle = function() {
  if (togg.innerHTML == 'Collapse') {
    togg.innerHTML = 'Expand';
    coll1.style = 'display:none';
    coll2.style = 'display:none';
  } else if (togg.innerHTML == 'Expand') {
    togg.innerHTML = 'Collapse';
    coll1.style = '';
    coll2.style = '';
  }
};
}
{
zf = function(val) {
  if (val < 10) {
    return '0' + val;
  }
  return val;
};
zfm = function(val) {
  if (val < 10) {
    return '00' + val;
  } else if (val < 100) {
    return '0' + val;
  }
  return val;
};
l = function(year) {
  if ((year % 4) === 0) {
    return 1;
  }
  return 0;
};
yearday = function(year, month, day) {
  var m = 0;
  if (month == 1) {
    m = 0;
  } else if (month == 2) {
    m = 31;
  } else if (month == 3) {
    m = 59 + l(year);
  } else if (month == 4) {
    m = 90 + l(year);
  } else if (month == 5) {
    m = 120 + l(year);
  } else if (month == 6) {
    m = 151 + l(year);
  } else if (month == 7) {
    m = 181 + l(year);
  } else if (month == 8) {
    m = 212 + l(year);
  } else if (month == 9) {
    m = 243 + l(year);
  } else if (month == 10) {
    m = 273 + l(year);
  } else if (month == 11) {
    m = 304 + l(year);
  } else if (month == 12) {
    m = 334 + l(year);
  }
};
r = function(v) {
  if (v < 0) {
    return '-' + r(-v);
  }
  v = Math.floor(v * 1000000);
  if (v > 1000000) {
    return Math.floor(v / 1000000) + r((v / 1000000) % 1);
  } else if (v < 10) {
    v = '00000' + v;
  } else if (v < 100) {
    v = '0000' + v;
  } else if (v < 1000) {
    v = '000' + v;
  } else if (v < 10000) {
    v = '00' + v;
  } else if (v < 100000) {
    v = '0' + v;
  } else if (v <= 1000000) {
    v = '' + v;
  }
  v = '' + v;
  return v[0] + v[1] + '.' + v[2] + v[3] + v[4] + v[5] + '%';
};
mr = function(v, df) {
  if (v < 0) {
    return '-' + mr(-v);
  }
  v = Math.floor(v * 1000000);
  if (v > 1000000) {
    return Math.floor(v / 1000000) + mr((v / 1000000) % 1, 1);
  } else if (v < 10) {
    v = '00000' + v;
  } else if (v < 100) {
    v = '0000' + v;
  } else if (v < 1000) {
    v = '000' + v;
  } else if (v < 10000) {
    v = '00' + v;
  } else if (v < 100000) {
    v = '0' + v;
  } else if (v <= 1000000) {
    v = '' + v;
  }
  v = '' + v;
  if (df == 1) {
    return '.' + v[0] + v[1] + v[2] + v[3] + v[4] + v[5];
  }
  return '0.' + v[0] + v[1] + v[2] + v[3] + v[4] + v[5];
};
f = function(l) {
  return l % 1;
};
conv = function(yr, mon, day, hr, min, sec, mil) {
  return hr * 3600 + min * 60 + sec + mil / 1000;
};
unconv = function(tim) {
  var add;
  if (tim < 0) {
    add = '-';
    tim *= -1;
  } else {
    add = '';
  }
  var a = [Math.floor(tim / 3600) % 60, Math.floor(tim / 60) % 60, Math.floor(tim) % 60, Math.floor(tim * 1000) % 1000];
  return [a, add + zf(a[0]) + ':' + zf(a[1]) + ':' + zf(a[2]) + '.' + zfm(a[3])];
};
ctime = function() {
  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds() + date.getMilliseconds() / 1000;
};
hexu = function(val) {
  return PRI.color(parseInt(val[1] + val[2], 16), parseInt(val[3] + val[4], 16), parseInt(val[5] + val[6], 16));
};
hexv = function(col) {
  return '#' + zf(PRI.red(col).toString(16)) + zf(PRI.green(col).toString(16)) + zf(PRI.blue(col).toString(16));
};
nr = function(val) {
  if (isNaN(val)) {
    return '';
  }
  if (val < 0) {
    return '-' + nr(-val);
  }
  val *= 1000000;
  if (val < 10) {
    val = '00000' + val;
  } else if (val < 100) {
    val = '0000' + val;
  } else if (val < 1000) {
    val = '000' + val;
  } else if (val < 10000) {
    val = '00' + val;
  } else if (val < 100000) {
    val = '0' + val;
  } else if (val < 1000000) {
    val = '' + val;
  } else {
    return Math.floor(val / 1000000) + nr((val / 1000000) % 1);
  }
  return '.' + val[0] + val[1] + val[2] + val[3] + val[4] + val[5];
};
modf = function(tif) {
  tif = tif % 1;
  v = -Math.log(1-tif) / Math.log(2);
  return mr(v);
};
modf2 = function(tif) {
  tif = tif % 1;
  v = -Math.log(1-tif) / Math.log(2);
  return modf(v);
};
modf3 = function(tif) {
  tif = tif % 1;
  v = -Math.log(1-tif) / Math.log(2);
  return modf2(v);
};
modf4 = function(tif) {
  tif = tif % 1;
  v = -Math.log(1-tif) / Math.log(2);
  return modf3(v);
};
modf5 = function(tif) {
  tif = tif % 1;
  v = -Math.log(1-tif) / Math.log(2);
  return modf4(v);
};
SetStart = function() {
  var sv = startval.value;
  from = conv(PRI.year(), PRI.month(), PRI.day(), parseInt(sv[0]+sv[1]), parseInt(sv[3]+sv[4]), parseInt(sv[6]+sv[7]), parseInt(sv[9]+sv[10]+sv[11]));
  dur = to - from;
  console.log('Set Start To: ' + sv);
};
SetEnd = function() {
  var ev = endval.value;
  to = conv(PRI.year(), PRI.month(), PRI.day(), parseInt(ev[0]+ev[1]), parseInt(ev[3]+ev[4]), parseInt(ev[6]+ev[7]), parseInt(ev[9]+ev[10]+ev[11]));
  dur = to - from;
  console.log('Set End To: ' + ev);
};
ResetStart = function() {
  from = conv(PRI.year(), PRI.month(), PRI.day(), af[0], af[1], af[2], af[3]);
  startval.value = sf;
  dur = to - from;
  console.log('Reset Start To: ' + sf);
};
ResetEnd = function() {
  to = conv(PRI.year(), PRI.month(), PRI.day(), at[0], at[1], at[2], at[3]);
  endval.value = st;
  dur = to - from;
  console.log('Reset End To: ' + st);
};
Setf = function() {
  var sv = startval.value;
  var ev = endval.value;
  from = conv(PRI.year(), PRI.month(), PRI.day(), parseInt(sv[0]+sv[1]), parseInt(sv[3]+sv[4]), parseInt(sv[6]+sv[7]), parseInt(sv[9]+sv[10]+sv[11]));
  to = conv(PRI.year(), PRI.month(), PRI.day(), parseInt(ev[0]+ev[1]), parseInt(ev[3]+ev[4]), parseInt(ev[6]+ev[7]), parseInt(ev[9]+ev[10]+ev[11]));
  dur = to - from;
  console.log('Set Start To: ' + sv + ', End To: ' + ev);
}
Reset = function() {
  from = conv(PRI.year(), PRI.month(), PRI.day(), af[0], af[1], af[2], af[3]);
  to = conv(PRI.year(), PRI.month(), PRI.day(), at[0], at[1], at[2], at[3]);
  startval.value = sf;
  endval.value = st;
  dur = to - from;
  console.log('Reset Start To: ' + sf + ', End To: ' + st);
};
Current = function() {
  startval.value = zf(date.getHours()) + ':' + zf(date.getMinutes()) + ':' + zf(date.getSeconds()) + '.' + zfm(date.getMilliseconds());
  from = conv(PRI.year(), PRI.month(), PRI.day(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  dur = to - from;
  console.log('Set Start To: ' + startval.value + ' (Current Time)');
};
SetBG = function() {
  bgcol = hexu(bgcolor.value);
  bgcolorp.value = bgcolor.value + '';
  simple.style.backgroundColor = bgcolor.value + '';
  console.log('Set Background To: ' + bgcolor.value);
};
SetFG = function() {
  fgcol = hexu(fgcolor.value);
  fgcolorp.value = fgcolor.value + '';
  simple.style.color = fgcolor.value + '';
  console.log('Set Foreground To: ' + fgcolor.value);
};
SetBGC = function() {
  bgcol = hexu(bgcolorp.value);
  bgcolor.value = bgcolorp.value + '';
  simple.style.backgroundColor = bgcolor.value + '';
  console.log('Set Background To: ' + bgcolorp.value);
};
SetFGC = function() {
  fgcol = hexu(fgcolorp.value);
  fgcolor.value = fgcolorp.value + '';
  simple.style.color = fgcolor.value + '';
  console.log('Set Foreground To: ' + fgcolorp.value);
};
ResetBG = function() {
  bgcol = PRI.color(0, 0, 0);
  bgcolor.value = hexv(bgcol);
  bgcolorp.value = bgcolor.value + '';
  simple.style.backgroundColor = bgcolor.value + '';
  console.log('Reset Background To: ' + bgcolor.value);
};
ResetFG = function() {
  fgcol = PRI.color(0, 255, 0);
  fgcolor.value = hexv(fgcol);
  fgcolorp.value = fgcolor.value + '';
  simple.style.color = fgcolor.value + '';
  console.log('Reset Foreground To: ' + fgcolor.value);
};
SetCol = function() {
  bgcol = hexu(bgcolor.value);
  fgcol = hexu(fgcolor.value);
  bgcolorp.value = bgcolor.value + '';
  fgcolorp.value = fgcolor.value + '';
  simple.style.backgroundColor = bgcolor.value + '';
  simple.style.color = fgcolor.value + '';
  console.log('Set Background To: ' + bgcolor.value + ', Foreground To: ' + fgcolor.value);
};
ResetCol = function() {
  bgcol = PRI.color(0, 0, 0);
  fgcol = PRI.color(0, 255, 0);
  bgcolor.value = hexv(bgcol);
  fgcolor.value = hexv(fgcol);
  bgcolorp.value = bgcolor.value + '';
  fgcolorp.value = fgcolor.value + '';
  simple.style.backgroundColor = bgcolor.value + '';
  simple.style.color = fgcolor.value + '';
  console.log('Reset Background To: ' + bgcolor.value + ', Foreground To: ' + fgcolor.value);
};
SetOffset = function() {
  offset = parseInt(offsetv.value);
  console.log('Set Offset To: ' + offsetv.value);
};
ResetOffset = function() {
  offset = 0;
  offsetv.value = offset;
  console.log('Reset Offset To: ' + offsetv.value);
};
Stop = function() {
  drawe = function () {}
  console.log('Stopped Drawing')
};
Freeze = function() {
  while (1) {}
};
Mystery = function() {
  idd.innerHTML = '';
};
Button = function() {};
}
var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
width = 600;
height = 400;
size(width, height, P2D);
date = new Date();
af = [8, 0, 0, 0];
at = [14, 23, sd, 0];
while (at[2] < 0) {at[1]-=1;at[2]+=60;}
while (at[2] > 60) {at[1]+=1;at[2]-=60;}
while (at[1] < 0) {at[0]-=1;at[1]+=60;}
if (at[2] != floor(at[2])) {at[3] = (at[2] - floor(at[2])) * 1000; at[2] = floor(at[2]);}
sf = zf(af[0]) + ':' + zf(af[1]) + ':' + zf(af[2]) + '.' + zfm(af[3]);
st = zf(at[0]) + ':' + zf(at[1]) + ':' + zf(at[2]) + '.' + zfm(at[3]);
from = conv(year(), month(), day(), af[0], af[1], af[2], af[3]);
to = conv(year(), month(), day(), af[0], at[1], at[2], at[3]);
/*
09:13
09:56
10:45
*/
dur = to - from;
bgcol = color(0, 0, 0);
fgcol = color(0, 255, 0);
noStroke();
draw = function() {
  try {
    drawe();
  } catch (e) {}
}
drawe = function() {
  date = new Date((new Date()).getTime() + offset);
  background(bgcol);
  textAlign(CENTER, CENTER);
  fill(fgcol);
  textSize(40);
  ct = ctime();
  tf = f(1 - ((to - ctime()) / (to - from)));
  tf1 = tf % 1;
  tfm = tf - Math.floor(tf);
  ntf = 1 - ((to - ctime()) / (to - from));
  tf2 = (tf * width - floor(tf * width));
  text('Time Left:', width / 2, 20);
  text(unconv(to - ct)[1], width / 2, 60);
  text(r(1 - ((to - ctime()) / (to - from))), width / 2, 100);
  textSize(25);
  text('Time Passed:\n' + unconv(ct - from)[1], width * 0.16, 90);
  text('Logarythm:\n' + modf(ntf) + '\n' + modf2(ntf) + '\n' + modf3(ntf) + '\n' + modf4(ntf) + '\n' + modf5(ntf), width * 0.83, 150);
  text('From:\n' + unconv(from)[1], width * 0.16, 150);
  text('To:\n' + unconv(to)[1], width * 0.5, 150);
  text('Duration:\n' + unconv(dur)[1], width * 0.16, 210);
  text('Current Time:\n' + unconv(ctime())[1], width * 0.5, 210);
  text('Tangent:\n' + nr(Math.tan((tfm * 180 - 90) / 360 * 3.1415926535 * 2)), width * 0.16, 270);
  text('Hy. Arctan:\n' + nr(Math.atanh(tfm * 2 - 1)), width * 0.5, 270);
  fill(lerpColor(bgcol, fgcol, 0.06));
  textSize(15);
  text('Please press\nthe button\nlabled Button!', width * 0.83, 270);
  fill(fgcol);
  if (tf >= 0) {
      rect(0, 300, floor(tf1 * width), 30);
  } else {
      rect(width-floor(-tf1 * width), 300, floor(-tf1 * width), 30);
  }
  rect(0, 350, tf2 * width, 30);
  textAlign(LEFT, TOP);
  textSize(20);
  text(r(tf1), 0, 327);
  text(r(tf2), 0, 377);
  text(floor(tf1 * width) + '/' + width, 120, 327);
  text(floor(tf2 * width) + '/' + width, 120, 377);
  text(floor(tf1 * width) * width + floor(tf2 * width) + '/' + sq(width), 220, 377);
};
/*
delete canvas;
delete id;
delete cd;
delete dif;
delete af;
delete at;
delete sf;
delete st;
delete from;
delete to;
delete dur;*/
//end processingjs
  }
};
var canvas = document.getElementById('mycanvas'); 
var processingInstance = new Processing(canvas, sketchProc);
PRI = processingInstance;
bgcolorp.addEventListener('change', SetBGC, false);
fgcolorp.addEventListener('change', SetFGC, false);
simplede = function() {
  ct = ctime();
  tf = f(1 - ((to - ctime()) / (to - from)));
  tf1 = tf % 1;
  tfm = tf - Math.floor(tf);
  ntf = 1 - ((to - ctime()) / (to - from));
  tf2 = (tf * width - Math.floor(tf * width));
  head1.innerHTML = unconv(to - ct)[1];
  head2.innerHTML = r(1 - ((to - ctime()) / (to - from)))
  sele1.innerHTML = dateg(date.getTime() - from.getTime());
  sele2.innerHTML = dateg(dur);
  if (tzmode == 'Local') {
    sele3.style.fontSize = '17px';
    sele4.style.fontSize = '17px';
    sele5.style.fontSize = '17px';
    sele3.innerHTML = locd(from);
    sele4.innerHTML = locd(to);
    sele5.innerHTML = locd(date);
  } else if (tzmode == 'UTC') {
    sele3.style.fontSize = '20px';
    sele4.style.fontSize = '20px';
    sele5.style.fontSize = '20px';
    sele3.innerHTML = from.toISOString();
    sele4.innerHTML = to.toISOString();
    sele5.innerHTML = date.toISOString();
  }
  sele6.innerHTML = nr(tf1 * 180 - 90);
  sele7.innerHTML = nr(Math.tan((tfm * 180 - 90) / 360 * 3.1415926535 * 2));
  sele8.innerHTML = nr(Math.atanh(tfm * 2 - 1));
  logaa.innerHTML = 'Logarithm:<br>' + modf(ntf) + '<br>' + modf2(ntf) + '<br>' + modf3(ntf) + '<br>' + modf4(ntf) + '<br>' + modf5(ntf) + '<br>' + modf6(ntf);
  perc1.innerHTML = perc(tf);
  perc1a.innerHTML = zfm(Math.floor(tf * widthe)) + '/' + widthe;
  perc2.innerHTML = perc(tf2);
  perc2a.innerHTML = zfm(Math.floor(tf2 * widthe)) + '/' + widthe;
  perc2b.innerHTML = zff(Math.floor(tf * widthe) * widthe + Math.floor(tf2 * widthe)) + '/' + (widthe * widthe);
  prog1.value = tf1;
  prog2.value = tf2;
};
simpled = function() {
  try {
    simplede();
  } catch (e) {}
};
setInterval(simpled, 0);
onloade = function() {
  startval.value = localStorage.getItem('startval1');
  endval.value = localStorage.getItem('endval1');
  bgcolor.value = localStorage.getItem('bgcolor1');
  fgcolor.value = localStorage.getItem('fgcolor1');
  if (startval.value == '' || endval.value == '') {
    Reset();
  } else {
    Setf();
  }
  if (bgcolor.value == '' || fgcolor.value == '') {
    ResetCol();
  } else {
    SetCol();
  }
  if (offsetv.value == '') {
    ResetOffset();
  } else {
    SetOffset();
  }
};
onload = onloade;
onunload = function() {
  localStorage.setItem('startval1', startval.value);
  localStorage.setItem('endval1', endval.value);
  localStorage.setItem('bgcolor1', bgcolor.value);
  localStorage.setItem('fgcolor1', fgcolor.value);
  localStorage.setItem('offset2', offsetv.value)
  return null;
};
