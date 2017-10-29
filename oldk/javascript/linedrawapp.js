// Draw a line from the current mouse position to the previous
var draw = function() {
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
};