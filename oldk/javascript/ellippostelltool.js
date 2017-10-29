var draw = function() {
    background(255,255,255);
    fill(255, 255, 255);
    ellipse(mouseX,mouseY,10,10);
    fill(255, 0, 0);
    text("X position:",10,10);
    text("Y position:",10,25);
    text(mouseX,70,10);
    text(mouseY,70,25);
};
