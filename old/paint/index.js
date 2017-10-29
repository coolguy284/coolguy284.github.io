var col, width, height;
var sketchProc = function(processingInstance) {
  with (processingInstance) {
//begin processingjs
col = color;
width = 600;
height = 400;
size(width, height, P2D);
draw = function() {
  try {
    drawe();
  } catch (e) {}
};
drawe = function() {
};
//end processingjs
  }
};
var canvas = document.getElementById('mycanvas'); 
var processingInstance = new Processing(canvas, sketchProc);
pi = processingInstance;