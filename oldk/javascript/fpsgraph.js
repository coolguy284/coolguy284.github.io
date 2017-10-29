var pmillis;
var frametable = [];
frameRate(60);
textFont(createFont("courier", 12));
draw = function() {
    var fps;
    if (pmillis !== millis()) {
        fps = 1 / ((millis()/1000) - (pmillis/1000));
    } else {
        fps = 26000000;
    }
    fill(255, 255, 255);
    noStroke();
    rect(0, 0, width, 200);
    stroke(0, 0, 0);
    fill(0, 0, 0);
    text(fps, 10, 10);
    rect(0, 200, 30, -fps);
    if (frameCount % width !== 0) {
    line(frameCount % width, 400, (frameCount) % width, -fps + 400);
    }
    if (frameCount % width === width - 1) {
    background(255, 255, 255);
    }
    //frametable.push(fps);
    pmillis = millis();
};