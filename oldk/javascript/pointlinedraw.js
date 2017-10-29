draw = function() {
    ellipse(pmouseX, pmouseY, 10, 10);
    ellipse(mouseX, mouseY, 10, 10);
    line(mouseX, mouseY, pmouseX, pmouseY);
};
