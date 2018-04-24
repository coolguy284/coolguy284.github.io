var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
size(600, 400, P2D);
textv = '';
textAlign(LEFT, TOP);
keyPressed = function () {
  if (keyCode != 127) {
    if ((keyCode != 16) && (keyCode != 17) && (keyCode != 18)) {
      textv += String.fromCharCode(key);
    }
  } else {
    textv = textv.substring(0, textv.length-1);
  }
};
draw = function() {
  background(0);
  fill(255);
  if ((frameCount % 60) < 30) {
    text(textv + '|', 0, 0);
  } else {
    text(textv, 0, 0);
  }
};
//end processingjs
  }
};
var canvas = document.getElementById("mycanvas"); 
var processingInstance = new Processing(canvas, sketchProc);