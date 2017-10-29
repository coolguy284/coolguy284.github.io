var pow2 = 0;
mousePressed = function() {
    if (mouseX > 20 && mouseX < 70 && mouseY > 20 && mouseY < 70) {
        pow2++;
    } else if (mouseX > 20 && mouseX < 70 && mouseY > 80 && mouseY < 130) {
        pow2--;
    }
};
draw = function() {
    pow2 = constrain(pow2, -319, 512);
    background(255);
    fill(0);
    textSize(10);
    textAlign(CORNER, BASELINE);
    text(pow2, 0, 190);
    if (pow2 <= 69) {
        text(pow(2, pow2).toFixed(-constrain(pow2, -100, 0)), 0, 200, width - 5, height);
    } else {
        text(pow(2, pow2), 0, 200, width - 5, height);
    }
    rect(20, 20, 50, 50);
    rect(20, 80, 50, 50);
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("^", 45, 45);
    text("v", 45, 105);
};