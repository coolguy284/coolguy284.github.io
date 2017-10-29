noStroke();
var inc = 0;
draw = function() {
    background(255, 255, 255);
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            var nie = noise(i / 25, j / 25, inc)*255;
            fill(nie, nie, 255);
            rect(i * 1, j * 1, 1, 1);
        }
    }
    text(frameCount, 10, 110);
    text(frameCount*0.02, 10, 120);
    inc+= 0.02;
};
