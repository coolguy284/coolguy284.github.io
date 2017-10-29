var xPositions = [width / 2];
var yPositions = [0];
var colors = [color(random(0,255),random(0,255),random(0,255))];

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(colors[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        if (yPositions[i] > height) {
            yPositions[i] = 0;
        }
    }
    fill(0, 0, 0);
    text(colors.length + " drops", 0, 10);
};
mousePressed = function() {
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    colors.push(color(random(0,255),random(0,255),random(0,255)));
};