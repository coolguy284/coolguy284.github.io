var drawb, minx, maxx, miny, maxy, gridd, savee, loade;
savee = function() {
  localStorage.setItem('gminx', minx);
  localStorage.setItem('gmaxx', maxx);
  localStorage.setItem('gminy', miny);
  localStorage.setItem('gmaxy', maxy);
  localStorage.setItem('ggridd', JSON.stringify(gridd));
  localStorage.setItem('gwid', PRI.width);
  localStorage.setItem('ghei', PRI.height);
  localStorage.setItem('gfunc', func.value);
  localStorage.setItem('gprefunc', prefunc.value);
};
loade = function() {
  var wid, hei;
  minx = parseFloat(localStorage.getItem('gminx'));
  maxx = parseFloat(localStorage.getItem('gmaxx'));
  miny = parseFloat(localStorage.getItem('gminy'));
  maxy = parseFloat(localStorage.getItem('gmaxy'));
  gridd = JSON.parse(localStorage.getItem('ggridd'));
  wid = parseFloat(localStorage.getItem('gwid'));
  hei = parseFloat(localStorage.getItem('ghei'));
  func.value = localStorage.getItem('gfunc');
  prefunc.value = localStorage.getItem('gprefunc');
  if (!minx) {
    minx = -10;
  }
  if (!maxx) {
    maxx = 10;
  }
  if (!miny) {
    miny = 0;
  }
  if (!maxy) {
    maxy = 100;
  }
  if (!gridd && gridd !== false) {
    gridd = true;
  }
  if (!wid) {
    wid = 600;
  }
  if (!hei) {
    hei = 400;
  }
  if (!func.value) {
    func.value = 'pow(x, 2)';
  }
  if (!prefunc.value) {
    prefunc.value = '';
  }
  iminx.value = minx;
  imaxx.value = maxx;
  iminy.value = miny;
  imaxy.value = maxy;
  igrid.checked = gridd;
  iwid.value = wid;
  ihei.value = hei;
  PRI.size(wid, hei, PRI.P2D);
  drawb();
};
var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
drawb = function() {
  try {
    size(parseInt(iwid.value), parseInt(ihei.value), P2D);
    background(255);
    minx = parseFloat(iminx.value);
    maxx = parseFloat(imaxx.value);
    miny = parseFloat(iminy.value);
    maxy = parseFloat(imaxy.value);
    gridd = igrid.checked;
    eval(prefunc.value);
    var i;
    if (gridd) {
      strokeWeight(3);
      for (i = 0; i <= width; i += 50) {
        line(i, 0, i, height);
      }
    }
    strokeWeight(2);
    for (i = 0; i < width; i++) {
      var x = map(i, 0, width, minx, maxx);
      point(i, height - map(eval(func.value), miny, maxy, 1, height - 1));
    }
  } catch (e) {}
};
//end processingjs
  }
};
var canvas = document.getElementById('mycanvas'); 
var processingInstance = new Processing(canvas, sketchProc);
PRI = processingInstance;
func.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    drawb();
  }
});
iminx.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    drawb();
  }
});
imaxx.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    drawb();
  }
});
iminy.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    drawb();
  }
});
imaxy.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    drawb();
  }
});
iwid.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    drawb();
  }
});
ihei.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    drawb();
  }
});
onload = function() {
  loade();
};
onunload = function() {
  savee();
  return null;
};
