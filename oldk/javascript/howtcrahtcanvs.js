//crashcanvas
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
cursor(ARROW);
fill(255, 0, 0);
ellipse(200, 200, 250, 250);
fill(0);
textAlign(CENTER, CENTER);
textSize(20);
text("Do Not Press This Button", 200, 200);
var timer = 100;
var countteddowne = 0;
var gisp = false;
keyPressed = function() {
    gisp = true;
};
draw = function() {
    var distance = dist(200, 200, mouseX, mouseY);
    if (distance < 125) {
        cursor(HAND);
        if (mouseIsPressed) {
            countteddowne = 1;
        }
        if (countteddowne) {
            cursor(WAIT);
        }
    } else {
        cursor(ARROW);
    }
    if (countteddowne && timer >= 0) {
        timer --;
        println(timer);
    }
    if (timer === 1) {
        println("HOTCR");
    } else if (timer === 0) {
        text(pow(2, 10000), 0, 0, 390, 390);
        while (gisp) {
            timer++;
        }
        timer--;
    } else if (timer === -1) {
        background(255);
        countteddowne = 0;
        fill(255, 0, 0);
        ellipse(200, 200, 250, 250);
        fill(0);
        textSize(16);
        text("I told you not to press the button!", 200, 200);
        cursor(ARROW);
    }
};