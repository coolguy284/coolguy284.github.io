var widthe, heighte, drawe, tzmode, infoview, tab, loaded;
var htmlcode, htmlcodel, jscode, jscodel, csscode, csscodel;
var zf, zfm, zff, datearr, datestr, dateg, perc, nr, mr, hexu, hexv;
var modf, modf2, modf3, modf4, modf5, modf6, locd;
var SetStart, ResetStart, SetEnd, ResetEnd;
var Setf, Reset, Current, RevSelect, UpdateSelect;
var SetBG, SetFG, SetBGC, SetFGC, ResetBG, ResetFG;
var SetCol, ResetCol, SetOffset, ResetOffset;
var Stop, Freeze, Mystery, Button;
var PRI, simplede, simpled;
var date, dl, from, to, dur;
var bgcol, fgcol, offset, tl, tf, tf1, tfm, ntf, tf2;
Math.atanh = Math.atanh || function(x) {
  return Math.log((1+x)/(1-x)) / 2;
};
widthe = 600;
heighte = 400;
tzmode = 'Local';
infoview = false;
tab = 'canvas';
loaded = false;
htmlcode = '';
htmlcodel = 0;
jscode = '';
jscodel = 0;
csscode = '';
csscodel = 0;
{
var SwitchTab = function(tabv) {
  tab = tabv;
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(tabv).style.display = "block";
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
var SwitchTZ = function() {
  if (tzswitch.innerHTML == 'Local') {
    tzmode = 'UTC';
    tzswitch.innerHTML = 'UTC';
  } else if (tzswitch.innerHTML == 'UTC') {
    tzmode = 'Local';
    tzswitch.innerHTML = 'Local';
  }
};
var Ongethtml = function () {
  htmlcode = this.responseText;
  htmlcodel = htmlcode.split(/\r\n|\r|\n/).length - 1;
};
var Ongetjs = function () {
  jscode = this.responseText;
  jscodel = jscode.split(/\r\n|\r|\n/).length - 1;
};
var Ongetcss = function () {
  csscode = this.responseText;
  csscodel = csscode.split(/\r\n|\r|\n/).length - 1;
};
var htmlreq = new XMLHttpRequest();
htmlreq.addEventListener('load', Ongethtml);
htmlreq.open('GET', './index.html');
htmlreq.send();
var jsreq = new XMLHttpRequest();
jsreq.addEventListener('load', Ongetjs);
jsreq.open('GET', './index.js');
jsreq.send();
var cssreq = new XMLHttpRequest();
cssreq.addEventListener('load', Ongetcss);
cssreq.open('GET', './index.css');
cssreq.send();
}
{
zf = function(val) {
  if (val < 0) {
    return '-' + zfm(-val);
  }
  if (val < 10) {
    return '0' + val;
  }
  return val;
};
zfm = function(val) {
  if (val < 0) {
    return '-' + zfm(-val);
  }
  if (val < 10) {
    return '00' + val;
  } else if (val < 100) {
    return '0' + val;
  }
  return val;
};
zff = function(val) {
  if (val < 0) {
    return '-' + zfm(-val);
  }
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
  }
  return val;
};
datearr = function(val) {
  return [Math.floor(val / 86400000), Math.floor(val / 3600000) % 24, Math.floor(val / 60000) % 60, Math.floor(val / 1000) % 60, val % 1000];
};
datestr = function(val) {
  return zfm(val[0]) + ':' + zf(val[1]) + ':' + zf(val[2]) + ':' + zf(val[3]) + '.' + zfm(val[4]);
};
dateg = function(val) {
  if (val < 0) {return '-' + dateg(-val)}
  return datestr(datearr(val));
};
perc = function(val) {
  if (isNaN(val)) {
    return '%';
  }
  if (val < 0) {
    return '-' + perc(-val);
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
    return Math.floor(val / 1000000) + perc((val / 1000000) % 1);
  }
  return val[0] + val[1] + '.' + val[2] + val[3] + val[4] + val[5] + '%';
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
hexu = function(val) {
  return PRI.color(parseInt(val[1] + val[2], 16), parseInt(val[3] + val[4], 16), parseInt(val[5] + val[6], 16));
};
hexv = function(col) {
  return '#' + zf(PRI.red(col).toString(16)) + zf(PRI.green(col).toString(16)) + zf(PRI.blue(col).toString(16));
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
modf6 = function(tif) {
  tif = tif % 1;
  v = -Math.log(1-tif) / Math.log(2);
  return modf5(v);
};
locd = function(date) {
  var ds = date.toString();
  return ds.substring(0, 24) + '.' + zfm(date.getMilliseconds()) + ' ' + ds.substring(25, 33);
}
SetStart = function() {
  try {
    frome = new Date(startval.value);
    from = new Date(frome);
  } catch(e) {
    startval.value = from.toISOString();
  }
  dur = to.getTime() - from.getTime();
  startval.value = from.toISOString();
  if (val === undefined) {
    RevSelect();
  }
  console.log('Set Start To: ' + from.toISOString());
};
ResetStart = function() {
  from = new Date(dl.sf);
  dur = to.getTime() - from.getTime();
  startval.value = from.toISOString();
  RevSelect();
  console.log('Reset Start To: ' + from.toISOString());
};
SetEnd = function() {
  try {
    toe = new Date(endval.value);
    to = new Date(toe);
  } catch (e) {
    endval.value = from.toISOString();
  }
  dur = to.getTime() - from.getTime();
  endval.value = to.toISOString();
  if (val === undefined) {
    RevSelect();
  }
  console.log('Set End To: ' + to.toISOString());
};
ResetEnd = function() {
  to = new Date(dl.st);
  dur = to.getTime() - from.getTime();
  endval.value = to.toISOString();
  RevSelect();
  console.log('Reset End To: ' + to.toISOString());
};
Setf = function(val) {
  from = new Date(startval.value);
  to = new Date(endval.value);
  dur = to.getTime() - from.getTime();
  startval.value = from.toISOString();
  endval.value = to.toISOString();
  if (val === undefined) {
    RevSelect();
  }
  console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString());
};
Reset = function() {
  from = new Date(dl.sf);
  to = new Date(dl.st);
  startval.value = from.toISOString();
  endval.value = to.toISOString();
  dur = to - from;
  RevSelect();
  console.log('Reset Start To: ' + from.toISOString() + ', End To: ' + to.toISOString());
};
Current = function() {
  startval.value = date.toISOString();
  from = new Date(startval.value);
  dur = to.getTime() - from.getTime();
  RevSelect();
  console.log('Set Start To: ' + from.toISOString());
};
RevSelect = function() {
  if (to.toISOString() == dl.net.toISOString()) {
    opts.value = 'ne';
  } else {
    var found = false;
    var kl = Object.keys(dl);
    for (var i = 0; i < kl.length / 2; i++) {
      var val = kl[i*2].substr(0, kl[i*2].length-1);
      if (val == 'ne') {
        break;
      }
      if ((from.toISOString() == dl[val + 'f'].toISOString()) && (to.toISOString() == dl[val + 't'].toISOString())) {
        found = true;
        opts.value = val;
      }
    }
    if (!found) {
      opts.value = 'custom';
    }
  }
  console.log('Set opts to: ' + opts.value + ' (' + hnl[opts.value] + ')');
};
UpdateSelect = function() {
  switch (opts.value) {
    case 'ne':
      to = new Date(dl.net);
      console.log('Set End To: ' + to.toISOString() + ' (Next Eclipse)');
      break;
    case 'custom':
      break;
    default:
      from = new Date(dl[opts.value + 'f']);
      to = new Date(dl[opts.value + 't']);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (' + hnl[opts.value] + ')');
      break;
  };
  startval.value = from.toISOString();
  endval.value = to.toISOString();
  dur = to - from;
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
};/*
getTime = function(zone, success) {
var url = 'https://json-time.appspot.com/time.json?tz=' + zone,
ud = 'json' + (+new Date());
window[ud]= function(o) {
success && success(new Date(o.datetime));
};
document.getElementsByTagName('head')[0].appendChild((function(){
var s = document.createElement('script');
s.type = 'text/javascript';
s.src = url + '&callback=' + ud;
return s;
})());
};
getTime('GMT', function(time){ alert(time.toISOString()); });*/
Stop = function() {
  drawe = function () {};
  console.log('Stopped Drawing');
};
Freeze = function() {
  for (var i = 0; i < 2000000000; i ++) {}
};
Mystery = function() {
  idd.innerHTML = '';
};
Button = function() {};
}
var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
size(widthe, heighte, P2D);
date = new Date();
UpdDate();
from = new Date(dl.sf);
to = new Date(dl.st);
dur = to.getTime() - from.getTime();
bgcol = color(0, 0, 0);
fgcol = color(0, 255, 0);
offset = 0;
mousePressed = function() {
  if (mouseX > 570 && mouseY > 10 && mouseX < 590 && mouseY < 30) {
    infoview = !infoview;
  }
};
draw = function() {
  try {
    drawe();
  } catch (e) {}
};
drawe = function() {
  date = new Date((new Date()).getTime() + offset);
  tl = to.getTime() - date.getTime();
  tf = 1 - (tl / dur);
  tf1 = (1 - (tl / dur)) % 1;
  tfm = tf - floor(tf);
  ntf = 1 - (tl / dur);
  tf2 = (tf * widthe - floor(tf * widthe));
  background(bgcol);
  fill(fgcol);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(40);
  text('Time Left:', widthe / 2, 20);
  text(dateg(tl), widthe / 2, 60);
  text(perc(tf), widthe / 2, 100);
  textAlign(LEFT, TOP);
  textSize(20);
  text('Time Passed:', 10, 120);
  text(dateg(date.getTime() - from.getTime()), 140, 120);
  text('Duration:', 10, 140);
  text(dateg(dur), 140, 140);
  text('From:', 10, 160);
  text('To:', 10, 180);
  text('Current Time:', 10, 200);
  if (tzmode == 'Local') {
    textSize(17);
    try {text(locd(from), 140, 162);} catch (e) {}
    try {text(locd(to), 140, 182);} catch (e) {}
    text(locd(date), 140, 202);
  } else if (tzmode == 'UTC') {
    try {text(from.toISOString(), 140, 160);} catch (e) {}
    try {text(to.toISOString(), 140, 180);} catch (e) {}
    text(date.toISOString(), 140, 200);
  }
  textSize(20);
  text('Degrees:', 10, 220);
  text(nr(tf1 * 180 - 90), 140, 220);
  text('Tangent:', 10, 240);
  text(nr(tan(radians(tfm * 180 - 90))), 140, 240);
  text('Hy. Arctan:', 10, 260);
  text(nr(Math.atanh(tfm * 2 - 1)), 140, 260);
  text('Logarithm:\n' + modf(ntf) + '\n' + modf2(ntf) + '\n' + modf3(ntf) + '\n' + modf4(ntf) + '\n' + modf5(ntf) + '\n' + modf6(ntf), 480, 120);
  if (tf1 >= 0) {
      rect(0, 300, floor(tf1 * widthe), 30);
  } else {
      rect(widthe-floor(-tf1 * widthe)-1, 300, floor(-tf1 * widthe)+1, 30);
  }
  rect(0, 350, floor(tf2 * widthe), 30);
  textSize(20);
  text(perc(tf1), 0, 327);
  text(perc(tf2), 0, 377);
  text(zfm(floor(tf1 * widthe)) + '/' + widthe, 120, 327);
  text(zfm(floor(tf2 * widthe)) + '/' + widthe, 120, 377);
  text(zff(floor(tf1 * widthe) * widthe + floor(tf2 * widthe)) + '/' + sq(widthe), 220, 377);
  fill(lerpColor(bgcol, fgcol, 0.06));
  textSize(15);
  text('Please press the button labled Button!', 10, 280);
  fill(fgcol);
  noStroke();
  rect(570, 10, 20, 20);
  fill(bgcol);
  text('i', 579, 12);
  if (infoview) {
    fill(fgcol);
    stroke(fgcol);
    text('Complicated Stuff', 450, 80);
    line(505, 100, 505, 115);
    text('Complicated Stuff', 340, 230);
    line(335, 235, 280, 230);
    line(335, 239, 280, 250);
    line(335, 243, 280, 270);
    text('When the bottom bar resets, the top bar moves one pixel.', 220, 330);
    textSize(12);
    text(htmlcodel + ' Lines of Code (HTML)', 0, 0);
    text(jscodel + ' Lines of Code (JS)', 0, 13);
    text(csscodel + ' Lines of Code (CSS)', 0, 26);
    text(htmlcode.length + ' Characters (HTML)', 0, 39);
    text(jscode.length + ' Characters (JS)', 0, 52);
    text(csscode.length + ' Characters (CSS)', 0, 65);
  }
};
//end processingjs
  }
};
var canvas = document.getElementById('mycanvas'); 
var processingInstance = new Processing(canvas, sketchProc);
PRI = processingInstance;
simplede = function() {
  date = new Date((new Date()).getTime() + offset);
  tl = to.getTime() - date.getTime();
  tf = 1 - (tl / dur);
  tf1 = (1 - (tl / dur)) % 1;
  tfm = tf - Math.floor(tf);
  ntf = 1 - (tl / dur);
  tf2 = (tf * widthe - Math.floor(tf * widthe));
  head1.innerHTML = dateg(tl);
  head2.innerHTML = perc(tf);
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
  prog1.value = Math.floor(tf1 * widthe) / widthe;
  prog2.value = Math.floor(tf2 * widthe) / widthe;
  UpdDate();
};
simpled = function() {
  try {
    simplede();
  } catch (e) {}
};
onloade = function() {
  startval.value = localStorage.getItem('startval2');
  endval.value = localStorage.getItem('endval2');
  bgcolor.value = localStorage.getItem('bgcolor2');
  fgcolor.value = localStorage.getItem('fgcolor2');
  offsetv.value = localStorage.getItem('offset2');
  tzmode = localStorage.getItem('tzmode2');
  infoview = localStorage.getItem('infoview2');
  tv = localStorage.getItem('tab2');
  togg.innerHTML = localStorage.getItem('coll2');
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
  if (tzmode == 'null' || tzmode == null || tzmode == '') {
    tzmode = 'Local';
  }
  if (infoview == 'null' || infoview == null || infoview == '') {
    infoview = false;
  } else {
    if (infoview == 'false') {
      infoview = false
    } else if (infoview == 'true') {
      infoview = true
    }
  }
  if (tv == 'null' || tv == null || tv == '') {
    SwitchTab('canvas')
  } else {
    SwitchTab(tv);
  }
  if (togg.innerHTML == 'Expand') {
    coll1.style = 'display:none';
    coll2.style = 'display:none';
    togg.innerHTML = 'Expand';
  } else {
    coll1.style = '';
    coll2.style = '';
    togg.innerHTML = 'Collapse';
  }
  loaded = true;
};
onload = onloade;
onunload = function() {
  if (!loaded) {
    return null;
  }
  localStorage.setItem('startval2', startval.value);
  localStorage.setItem('endval2', endval.value);
  localStorage.setItem('bgcolor2', bgcolor.value);
  localStorage.setItem('fgcolor2', fgcolor.value);
  localStorage.setItem('offset2', offsetv.value);
  localStorage.setItem('tzmode2', tzmode);
  localStorage.setItem('infoview2', infoview);
  localStorage.setItem('tab2', tab);
  localStorage.setItem('coll2', togg.innerHTML);
  return null;
};
startval.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    Setf();
  }
});
endval.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    Setf();
  }
});
offsetv.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    SetOffset();
  }
});
bgcolor.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    SetCol();
  }
});
fgcolor.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    SetCol();
  }
});
bgcolorp.addEventListener('change', SetBGC, false);
fgcolorp.addEventListener('change', SetFGC, false);
setInterval(simpled, 15);
