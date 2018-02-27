var wsst, mwsst, sel, xw, yw, onloade;
wsst = '';
mwsst = '';
sel = [];
xw = 0;
yw = 0;
function SetCanvas() {
  canvas.style = '';
  text.style = 'display:none;';
}
function SetText() {
  canvas.style = 'display:none;';
  text.style = '';
}
var sketchProc = function(processingInstance) {
  with (processingInstance) {
    textAlign(CENTER, CENTER);
    textFont(createFont('monospace', 24));
    stroke(255, 255, 0);
    strokeWeight(20);
  }
};
var canvas = document.getElementById('mycanvas'); 
var processingInstance = new Processing(canvas, sketchProc);
PRI = processingInstance;
function SetTextC() {
  for (var j = 0; j < yw; j++) {
    for (var i = 0; i < xw; i++) {
      PRI.text(mwsst[i + j * xw], i * 20 + 10, j * 20 + 10);
    }
  }
}
function Set() {
  wsst = wsi.value.toUpperCase();
  wsr.innerHTML = wsst.replace(new RegExp('\n', 'g'), '<br>');
  wsi.value = wsst;
  mwsst = wsst.replace(new RegExp('\n', 'g'), '');
  xw = wsst.search('\n');
  yw = mwsst.length / xw;
  PRI.size(xw * 20, yw * 20, PRI.P2D);
  PRI.fill(0);
  PRI.background(255);
  SetTextC();
}
function Clear() {
  wsst = '';
  wsr.innerHTML = '';
}
var val;
function SolvePart(mwsst, xp, yp, xd, yd, xw, yw, word) {
  if (xd === 0 && yd === 0) {
    return false;
  }
  for (var i in word) {
    var px = xp + xd * i;
    var py = yp + yd * i;
    if (px < 0 || px > xw || py < 0 || py > yw) {
      return false;
    }
    if (word[i] != mwsst[px + py * xw]) {
      return false;
    }
  }
  return true;
}
function Solve() {
  //idd.innerHTML = 'Important driver update now! <a href = "www.google.com">Click to update</a>';
  wb.value = wb.value.toUpperCase();
  val = wb.value.split(' ');
  PRI.stroke(255, 255, 0);
  PRI.strokeWeight(15);
  PRI.background(255);
  sel = [];
  for (var i in val) {
    for (var yp = 0; yp < yw; yp++) {
      for (var xp = 0; xp < xw; xp++) {
        for (var yd = -1; yd < 2; yd++) {
          for (var xd = -1; xd < 2; xd++) {
            if (SolvePart(mwsst, xp, yp, xd, yd, xw, yw, val[i])) {
              for (var j in val[i]) {
                sel.push([xp + xd * j, yp + yd * j]);
              }
              PRI.line(xp * 20 + 10, yp * 20 + 10, (xp + xd * (val[i].length - 1)) * 20 + 10, (yp + yd * (val[i].length - 1)) * 20 + 10);
            }
          }
        }
      }
    }
  }
  ColorSearch();
  SetTextC();
}
function ColorSearch() {
  wsr.innerHTML = '';
  for (var si = 0; si < mwsst.length; si++) {
    var res = false;
    for (var sli = 0; sli < sel.length; sli++) {
      var val = sel[sli][0] + sel[sli][1] * xw;
      if (val == si) {
        res = true;
      }
    }
    if (res) {
      wsr.innerHTML += '<span style = "background:yellow;">' + mwsst[si] + '</span>';
    } else {
      wsr.innerHTML += mwsst[si];
    }
    if ((si % xw) === (xw - 1)) {
      wsr.innerHTML += '<br>';
    }
  }
}
onloade = function() {
  wsst = localStorage.getItem('wsst');
  wb.value = localStorage.getItem('wb');
  if (wsst === null) {
    wsst = '';
  } else {
    wsi.value = wsst;
    Set();
  }
};
onload = onloade;
onunload = function() {
  localStorage.setItem('wsst', wsst);
  localStorage.setItem('wb', wb.value);
  return null;
};
/*
WRITHEQWERVTYUD
ADSDFGCAMUSGHJI
POIIUYTRLEWAABS
MNBSVCXNZSDFMGS
TYUITPERILWSBDO
MNBVCRXZSDFMRPL
ZGHJADEFCRGUODV
TSLBKJHSGFDISEE
OELPOITUSYSDIRT
ZELKJPHGFEDEARR
ATGHMJKLDDDMFOF
MHRESILLIENCEHG
APKOIUYTREWSDBB
CNJHGFDCVFRTFAF
UHJSUOTIPICERPS
seethe writhe ambrosia medium dissolve unkempt camazotz distressed sumac precipitous peril abhorred resillience poised vulnerable*/
