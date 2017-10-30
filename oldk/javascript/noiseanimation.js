var nframes = 400;
var frames = [];
var ns = 0.03;
textAlign(CENTER, CENTER);
var x, y = 0, z = 0;
var fr = 0;
var mode = "replay";

draw = function() {
    if (z < nframes) {
        for (x = 0; x < 400; x ++) {
            for (var ya = 0; ya < 10; ya += 1) {
                var nfil = color(noise(x * ns, (y + ya) * ns, z * ns) * 255);
                set(x, y + ya, nfil);
            }
        }
        if (y < 400) {
            y += 10;
        } else {
            y = 0;
            z += 1;
            var img = get(0, 0, 400, 400);
            frames.push(img);
            background(255);
            fill(255, 0, 0);
            text("Initalizing Video: " + z / (nframes / 100) + "%", 600, 10);
            text("Time Remaining:\n" + ((nframes - z) * 2) + " seconds\n" + ((nframes - z) / 30) + " minutes\n" + ((nframes - z) / 1800) + " hours", 600, 50);
        }
    } else {
        background(255);
        if (mode === "replay") {
            image(frames[fr], 0, 0, 400, 400);
            if (fr < nframes - 1) {
                fr += 1;
            }
            fill(0);
            text("Frame:", 575, 10);
            text(fr % nframes, 625, 10);
            fill(127);
            rect(550, 100, 100, 50);
            fill(0);
            text("Restart", 600, 125);
            if (mouseIsPressed && mouseX > 550 && mouseY > 100 && mouseX < 650 && mouseY < 150) {
                fr = 0;
            }
        }
    }
};