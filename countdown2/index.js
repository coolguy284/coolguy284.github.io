var widthe, heighte;
var zf, zfm, zff, datearr, datestr, dateg, perc, nr, mr, hexu, hexv;
var modf, modf2, modf3, modf4, modf5, modf6;
var SetStart, ResetStart, SetEnd, ResetEnd;
var Setf, Reset, Current, UpdDate, RevSelect, UpdateSelect;
var SetBG, SetFG, SetBGC, SetFGC, ResetBG, ResetFG, SetCol, ResetCol;
var Stop, Freeze, Mystery, Button;
var PRI, simplede, simpled;
var date, dl, from, to, dur;
var bgcol, fgcol, offset, tl, tf, ntf, tf2;
Math.atanh = Math.atanh || function(x) {
  return Math.log((1+x)/(1-x)) / 2;
};
widthe = 600;
heighte = 400;
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
SetStart = function() {
  try {
    frome = new Date(startval.value);
    from = new Date(frome);
  } catch(e) {
    startval.value = from.toISOString();
  }
  dur = to.getTime() - from.getTime();
  RevSelect();
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
  RevSelect();
  console.log('Set End To: ' + to.toISOString());
};
ResetEnd = function() {
  to = new Date(dl.st);
  dur = to.getTime() - from.getTime();
  endval.value = to.toISOString();
  RevSelect();
  console.log('Reset End To: ' + to.toISOString());
};
Setf = function() {
  from = new Date(startval.value);
  to = new Date(endval.value);
  dur = to.getTime() - from.getTime();
  RevSelect();
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
UpdDate = function() {
  dl = {
    'sf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0),
    'st': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 23, sd, (sd - Math.floor(sd)) * 1000),
    's1f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0),
    's1t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 13, 0, 0),
    's3f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 13, 0, 0),
    's3t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 50, 0, 0),
    's4f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 9, 50, 0, 0),
    's4t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 45, 0, 0),
    's5f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 45, 0, 0),
    's5t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 10, 0, 0),
    's6f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 10, 0, 0),
    's6t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 50, 0, 0),
    's7f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 50, 0, 0),
    's7t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 45, 0, 0),
    's8f': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 45, 0, 0),
    's8t': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 14, 23, sd, (sd - Math.floor(sd)) * 1000),
    'muf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), 0, 0),
    'mut': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()+1, 0, 0),
    'hf': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), 0, 0, 0),
    'ht': new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()+1, 0, 0, 0),
    'df': new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0),
    'dt': new Date(date.getFullYear(), date.getMonth(), date.getDate()+1, 0, 0, 0, 0),
    'wf': new Date(),
    'wt': new Date(),
    'mf': new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
    'mt': new Date(date.getFullYear(), date.getMonth()+1, 1, 0, 0, 0, 0),
    'yf': new Date(date.getFullYear(), 0, 1, 0, 0, 0, 0),
    'yt': new Date(date.getFullYear()+1, 0, 1, 0, 0, 04, 0),
    'def': new Date(Math.floor(date.getFullYear() / 10) * 10, 0, 1, 0, 0, 0, 0),
    'det': new Date(Math.ceil(date.getFullYear() / 10) * 10, 0, 1, 0, 0, 0, 0),
    'cf': new Date(Math.floor(date.getFullYear() / 100) * 100, 0, 1, 0, 0, 0, 0),
    'ct': new Date(Math.ceil(date.getFullYear() / 100) * 100, 0, 1, 0, 0, 0, 0),
    'mlf': new Date(Math.floor(date.getFullYear() / 1000) * 1000, 0, 1, 0, 0, 0, 0),
    'mlt': new Date(Math.ceil(date.getFullYear() / 1000) * 1000, 0, 1, 0, 0, 0, 0),
    'net': new Date(nexteclipse)
  };
};
RevSelect = function() {
  if ((from.toISOString() == dl.sf.toISOString()) && (to.toISOString() == dl.st.toISOString())) {
    opts.value = 'school';
  } else if ((from.toISOString() == dl.s1f.toISOString()) && (to.toISOString() == dl.s1t.toISOString())) {
    opts.value = '1st';
  } else if ((from.toISOString() == dl.s3f.toISOString()) && (to.toISOString() == dl.s3t.toISOString())) {
    opts.value = '3rd';
  } else if ((from.toISOString() == dl.s4f.toISOString()) && (to.toISOString() == dl.s4t.toISOString())) {
    opts.value = '4th';
  } else if ((from.toISOString() == dl.s5f.toISOString()) && (to.toISOString() == dl.s5t.toISOString())) {
    opts.value = '5th';
  } else if ((from.toISOString() == dl.s6f.toISOString()) && (to.toISOString() == dl.s6t.toISOString())) {
    opts.value = '6th';
  } else if ((from.toISOString() == dl.s7f.toISOString()) && (to.toISOString() == dl.s7t.toISOString())) {
    opts.value = '7th';
  } else if ((from.toISOString() == dl.s8f.toISOString()) && (to.toISOString() == dl.s8t.toISOString())) {
    opts.value = '8th';
  } else if ((from.toISOString() == dl.muf.toISOString()) && (to.toISOString() == dl.mut.toISOString())) {
    opts.value = 'minute';
  } else if ((from.toISOString() == dl.hf.toISOString()) && (to.toISOString() == dl.ht.toISOString())) {
    opts.value = 'hour';
  } else if ((from.toISOString() == dl.df.toISOString()) && (to.toISOString() == dl.dt.toISOString())) {
    opts.value = 'day';
  } else if ((from.toISOString() == dl.wf.toISOString()) && (to.toISOString() == dl.wt.toISOString())) {
    opts.value = 'week';
  } else if ((from.toISOString() == dl.mf.toISOString()) && (to.toISOString() == dl.mt.toISOString())) {
    opts.value = 'month';
  } else if ((from.toISOString() == dl.yf.toISOString()) && (to.toISOString() == dl.yt.toISOString())) {
    opts.value = 'year';
  } else if ((from.toISOString() == dl.def.toISOString()) && (to.toISOString() == dl.det.toISOString())) {
    opts.value = 'decade';
  } else if ((from.toISOString() == dl.cf.toISOString()) && (to.toISOString() == dl.ct.toISOString())) {
    opts.value = 'century';
  } else if ((from.toISOString() == dl.mlf.toISOString()) && (to.toISOString() == dl.mlt.toISOString())) {
    opts.value = 'millennium';
  } else if (to.toISOString() == dl.net.toISOString()) {
    opts.value = 'eclipse';
  } else {
    opts.value = 'custom';
  }
  /*dlk = dl.keys()
  dlv = dl.values()
  dlkf = [];
  dlkt = [];
  dlvf = [];
  dlvt = [];
  for (var i = 0; i < dlk.length / 2; i ++) {
    dlkf.append(dlk[i])
    dlvf.append(dlv[i])
    dlkt.append(dlk[i+1])
    dlvt.append(dlk[i+1])
  }
  console.log(dlkf);
  for (var i = 0; i < dlkf.length; i ++) {
    if ((from.toISOString() == dlvf[i]) && (to.toISOString() == dlvt[i])) {
      opts.value = dlkf[i].substring(0, -1)
    }
  }*/
  console.log('Set opts to: ' + opts.value)
};
UpdateSelect = function() {
  switch (opts.value) {
    case 'school':
      from = new Date(dl.sf);
      to = new Date(dl.st);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (School)');
      break;
    case '1st':
      from = new Date(dl.s1f);
      to = new Date(dl.s1t);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (1st Block)');
      break;
    case '3rd':
      from = new Date(dl.s3f);
      to = new Date(dl.s3t);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (2nd Block Part 1)');
      break;
    case '4th':
      from = new Date(dl.s4f);
      to = new Date(dl.s4t);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Related Arts)');
      break;
    case '5th':
      from = new Date(dl.s5f);
      to = new Date(dl.s5t);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Lunch)');
      break;
    case '6th':
      from = new Date(dl.s6f);
      to = new Date(dl.s6t);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (2nd Block Part 2)');
      break;
    case '7th':
      from = new Date(dl.s7f);
      to = new Date(dl.s7t);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Flex)');
      break;
    case '8th':
      from = new Date(dl.s8f);
      to = new Date(dl.s8t);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (3rd Block)');
      break;
    case 'minute':
      from = new Date(dl.muf);
      to = new Date(dl.mut);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Minute)');
      break;
    case 'hour':
      from = new Date(dl.hf);
      to = new Date(dl.ht);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Hour)');
      break;
    case 'day':
      from = new Date(dl.df);
      to = new Date(dl.dt);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Day)');
      break;
    case 'week':
      from = new Date(dl.wf);
      to = new Date(dl.wt);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Week)');
      break;
    case 'month':
      from = new Date(dl.mf);
      to = new Date(dl.mt);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Month)');
      break;
    case 'year':
      from = new Date(dl.yf);
      to = new Date(dl.yt);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Year)');
      break;
    case 'decade':
      from = new Date(dl.def);
      to = new Date(dl.det);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Decade)');
      break;
    case 'century':
      from = new Date(dl.cf);
      to = new Date(dl.ct);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Century)');
      break;
    case 'millennium':
      from = new Date(dl.mlf);
      to = new Date(dl.mlt);
      console.log('Set Start To: ' + from.toISOString() + ', End To: ' + to.toISOString() + ' (Millenium)');
      break;
    case 'eclipse':
      to = new Date(dl.net);
      console.log('Set End To: ' + to.toISOString() + ' (Next Eclipse)');
      break;
    case 'custom':
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
};
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
  tf2 = (tf * width - floor(tf * width));
  background(bgcol);
  fill(fgcol);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(40);
  text('Time Left:', width / 2, 20);
  text(dateg(tl), width / 2, 60);
  text(perc(tf), width / 2, 100);
  textAlign(LEFT, TOP);
  textSize(20);
  text('Time Passed:', 10, 120);
  text(dateg(date.getTime() - from.getTime()), 140, 120);
  text('From:', 10, 160);
  try {text(from.toISOString(), 140, 160);} catch (e) {}
  text('To:', 10, 180);
  try {text(to.toISOString(), 140, 180);} catch (e) {}
  text('Duration:', 10, 140);
  text(dateg(dur), 140, 140);
  text('Current Time:', 10, 200);
  text(date.toISOString(), 140, 200);
  text('Degrees:', 10, 220);
  text(nr(tf1 * 180 - 90), 140, 220);
  text('Tangent:', 10, 240);
  text(nr(tan(radians(tfm * 180 - 90))), 140, 240);
  text('Hy. Arctan:', 10, 260);
  text(nr(Math.atanh(tfm * 2 - 1)), 140, 260);
  text('Logarithm:\n' + modf(ntf) + '\n' + modf2(ntf) + '\n' + modf3(ntf) + '\n' + modf4(ntf) + '\n' + modf5(ntf) + '\n' + modf6(ntf), 480, 120);
  if (tf1 >= 0) {
      rect(0, 300, floor(tf1 * width), 30);
  } else {
      rect(width-floor(-tf1 * width), 300, floor(-tf1 * width), 30);
  }
  rect(0, 350, tf2 * width, 30);
  textSize(20);
  text(perc(tf1), 0, 327);
  text(perc(tf2), 0, 377);
  text(zfm(floor(tf1 * width)) + '/' + width, 120, 327);
  text(zfm(floor(tf2 * width)) + '/' + width, 120, 377);
  text(zff(floor(tf1 * width) * width + floor(tf2 * width)) + '/' + sq(width), 220, 377);
  fill(lerpColor(bgcol, fgcol, 0.06));
  textSize(15);
  text('Please press the button labled Button!', 10, 280);
};
//end processingjs
  }
};
var canvas = document.getElementById('mycanvas'); 
var processingInstance = new Processing(canvas, sketchProc);
PRI = processingInstance;
bgcolorp.addEventListener('change', SetBGC, false);
fgcolorp.addEventListener('change', SetFGC, false);
simplede = function() {
  date = new Date();
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
  sele3.innerHTML = from.toISOString();
  sele4.innerHTML = to.toISOString();
  sele5.innerHTML = date.toISOString();
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
  UpdDate();
};
simpled = function() {
  try {
    simplede();
  } catch (e) {}
};
setInterval(simpled, 0);
onloade = function() {
  startval.value = localStorage.getItem('startval2');
  endval.value = localStorage.getItem('endval2');
  bgcolor.value = localStorage.getItem('bgcolor2');
  fgcolor.value = localStorage.getItem('fgcolor2');
  offsetv.value = localStorage.getItem('offset2');
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
  localStorage.setItem('startval2', startval.value);
  localStorage.setItem('endval2', endval.value);
  localStorage.setItem('bgcolor2', bgcolor.value);
  localStorage.setItem('fgcolor2', fgcolor.value);
  return null;
};
