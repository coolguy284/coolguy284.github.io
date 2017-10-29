mouseMoved = function() {
    var mouse = new PVector(mouseX, mouseY);
    var mouselen = mouse.mag();
    var maxlen = dist(0, 0, width, height);
    var colorval = map(mouselen, 0, maxlen, 0, 255);
    background(colorval);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
    text(mouselen, mouse.x, mouse.y);
};