if (width !== 800 || height !== 600) {
    println("Add ?width=800&height=600 to url.");
}

var tool = "none";
var colorm = "fill";
var thickm = "fill";
var fcolor = color(255, 0, 0);
var scolor = color(255, 0, 0);
var backg = color(255, 255, 255);
var ssize = 1;
var Wait = 3;
var slwidth = 1;
var sltstart = frameCount;
var slarst = false;
var slshramt = 0.01;

var colorchoice = function() {
    pushStyle();
    noFill();
    stroke(0, 128, 0);
    switch (tool) {
        case "ellipse":
            rect(12, 474, 32, 32);
            break;
        case "point":
            rect(42, 474, 32, 32);
            break;
        case "line":
            rect(72, 474, 32, 32);
            break;
        case "shrinkline":
            rect(102, 474, 32, 32);
            break;
    }
    popStyle();
};

var colorfs = function() {
    pushStyle();
    noFill();
    stroke(0, 128, 0);
    switch (colorm) {
        case "fill":
            rect(210, 553, 282, 17);
            break;
        case "stroke":
            rect(210, 570, 282, 17);
            break;
        case "background":
            rect(208, 441, 70, 34);
            break;
    }
    popStyle();
};

var drawpaint = function() {
    pushStyle();
    strokeWeight(10);
    strokeCap(SQUARE);
    strokeJoin(MITER);
    fill(255);
    noStroke();
    rect(0, 0, 40, 600);
    rect(0, 0, 800, 40);
    rect(0, 400, 800, 200);
    rect(640, 0, 160, 400);
    stroke(0);
    fill(0, 0, 0, 0);
    rect(40, 40, 600, 360);
    line(5, 0, 5, 600);
    line(795, 0, 795, 600);
    line(0, 435, 800, 435);
    line(675, 0, 675, 435);
    line(0, 5, 800, 5);
    line(0, 595, 800, 595);
    line(200, 435, 200, 600);
    line(500, 435, 500, 600);
    strokeWeight(5);
    fill(128, 255, 255);
    stroke(0, 255, 255);
    rect(18, 480, 20, 20);
    rect(48, 480, 20, 20);
    rect(78, 480, 20, 20);
    rect(108, 480, 20, 20);
    rect(138, 480, 20, 20);
    rect(168, 480, 20, 20);
    rect(510, 475, 50, 50);
    rect(510, 534, 50, 50);
    rect(280, 480, 30, 30);
    rect(280, 520, 30, 30);
    rect(335, 480, 30, 30);
    rect(335, 520, 30, 30);
    rect(390, 480, 30, 30);
    rect(390, 520, 30, 30);
    fill(backg);
    rect(685, 15, 30, 30);
    strokeWeight(1);
    fill(255, 0, 0);
    stroke(0, 0, 255);
    ellipse(28, 490, 10, 10);
    noStroke();
    ellipse(58, 490, 10, 10);
    stroke(255, 0, 0);
    line(82, 496, 94, 484);
    triangle(112, 483, 112, 497, 125, 491);
    strokeWeight(5);
    strokeCap(ROUND);
    line(520, 516, 535, 485);
    line(550, 516, 535, 485);
    line(520, 544, 535, 575);
    line(550, 544, 535, 575);
    strokeWeight(3);
    line(285, 505, 295, 486);
    line(305, 505, 295, 486);
    line(285, 525, 295, 545);
    line(305, 525, 295, 545);
    line(340, 505, 350, 486);
    line(360, 505, 350, 486);
    line(340, 525, 350, 545);
    line(360, 525, 350, 545);
    line(395, 505, 405, 486);
    line(415, 505, 405, 486);
    line(395, 525, 405, 545);
    line(415, 525, 405, 545);
    strokeCap(SQUARE);
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont(createFont("courier"));
    text("Tool:", 100, 460);
    text("Color:", 350, 460);
    text("Thickness:", 650, 460);
    textSize(100);
    text(ssize, 675, 530);
    textSize(10);
    text("Background:", 245, 445);
    text(red(backg), 220, 455);
    text(green(backg), 242, 455);
    text(blue(backg), 265, 455);
    textSize(15);
    text("Fill:", 245, 562);
    text("Stroke:", 245, 578);
    textSize(20);
    text(red(fcolor), 295, 562);
    text(green(fcolor), 350, 562);
    text(blue(fcolor), 405, 562);
    text(red(scolor), 295, 578);
    text(green(scolor), 350, 578);
    text(blue(scolor), 405, 578);
    noStroke();
    fill(backg);
    rect(210, 460, 65, 13);
    fill(fcolor);
    rect(425, 555, 65, 13);
    fill(scolor);
    rect(425, 572, 65, 13);
    strokeWeight(1);
    popStyle();
    colorchoice();
    colorfs();
};

drawpaint();

var wait = 0;

draw = function() {
    fill(fcolor);
    stroke(scolor);
    if (mouseX > 18 && mouseY > 480 && mouseX < 38 && mouseY < 500 && mouseIsPressed) {
        tool = "ellipse";
        drawpaint();
    } else if (mouseX > 48 && mouseY > 480 && mouseX < 68 && mouseY < 500 && mouseIsPressed) {
        tool = "point";
        drawpaint();
    } else if (mouseX > 78 && mouseY > 480 && mouseX < 98 && mouseY < 500 && mouseIsPressed) {
        tool = "line";
        drawpaint();
    } else if (mouseX > 108 && mouseY > 480 && mouseX < 128 && mouseY < 500 && mouseIsPressed) {
        tool = "shrinkline";
        drawpaint();
    }
    if (mouseX > 210 && mouseY > 553 && mouseX < 492 && mouseY < 570 && mouseIsPressed) {
        colorm = "fill";
    } else if (mouseX > 210 && mouseY > 570 && mouseX < 492 && mouseY < 587 && mouseIsPressed) {
        colorm = "stroke";
    } else if (mouseX > 208 && mouseY > 441 && mouseX < 278 && mouseY < 475 && mouseIsPressed) {
        colorm = "background";
    }
    if (mouseX > 685 && mouseY > 15 && mouseX < 715 && mouseY < 45 && mouseIsPressed) {
        fill(backg);
        noStroke();
        rect(40, 40, 600, 360);
    }
    if (mouseX > 280 && mouseY > 480 && mouseX < 310 && mouseY < 510 && mouseIsPressed && colorm === "fill" && wait === 0 && red(fcolor) < 255) {
        fcolor = color(red(fcolor) + 1, green(fcolor), blue(fcolor));
        wait = Wait;
    } else if (mouseX > 280 && mouseY > 520 && mouseX < 310 && mouseY < 550 && mouseIsPressed && colorm === "fill" && wait === 0 && red(fcolor) > 0) {
        fcolor = color(red(fcolor) - 1, green(fcolor), blue(fcolor));
        wait = Wait;
    } else if (mouseX > 335 && mouseY > 480 && mouseX < 365 && mouseY < 510 && mouseIsPressed && colorm === "fill" && wait === 0 && green(fcolor) < 255) {
        fcolor = color(red(fcolor), green(fcolor) + 1, blue(fcolor));
        wait = Wait;
    } else if (mouseX > 335 && mouseY > 520 && mouseX < 365 && mouseY < 550 && mouseIsPressed && colorm === "fill" && wait === 0 && green(fcolor) > 0) {
        fcolor = color(red(fcolor), green(fcolor) - 1, blue(fcolor));
        wait = Wait;
    } else if (mouseX > 390 && mouseY > 480 && mouseX < 420 && mouseY < 510 && mouseIsPressed && colorm === "fill" && wait === 0 && blue(fcolor) < 255) {
        fcolor = color(red(fcolor), green(fcolor), blue(fcolor) + 1);
        wait = Wait;
    } else if (mouseX > 390 && mouseY > 520 && mouseX < 420 && mouseY < 550 && mouseIsPressed && colorm === "fill" && wait === 0 && blue(fcolor) > 0) {
        fcolor = color(red(fcolor), green(fcolor), blue(fcolor) - 1);
        wait = Wait;
    } else if (mouseX > 280 && mouseY > 480 && mouseX < 310 && mouseY < 510 && mouseIsPressed && colorm === "stroke" && wait === 0 && red(scolor) < 255) {
        scolor = color(red(scolor) + 1, green(scolor), blue(scolor));
        wait = Wait;
    } else if (mouseX > 280 && mouseY > 520 && mouseX < 310 && mouseY < 550 && mouseIsPressed && colorm === "stroke" && wait === 0 && red(scolor) > 0) {
        scolor = color(red(scolor) - 1, green(scolor), blue(scolor));
        wait = Wait;
    } else if (mouseX > 335 && mouseY > 480 && mouseX < 365 && mouseY < 510 && mouseIsPressed && colorm === "stroke" && wait === 0 && green(scolor) < 255) {
        scolor = color(red(scolor), green(scolor) + 1, blue(scolor));
        wait = Wait;
    } else if (mouseX > 335 && mouseY > 520 && mouseX < 365 && mouseY < 550 && mouseIsPressed && colorm === "stroke" && wait === 0 && green(scolor) > 0) {
        scolor = color(red(scolor), green(scolor) - 1, blue(scolor));
        wait = Wait;
    } else if (mouseX > 390 && mouseY > 480 && mouseX < 420 && mouseY < 510 && mouseIsPressed && colorm === "stroke" && wait === 0 && blue(scolor) < 255) {
        scolor = color(red(scolor), green(scolor), blue(scolor) + 1);
        wait = Wait;
    } else if (mouseX > 390 && mouseY > 520 && mouseX < 420 && mouseY < 550 && mouseIsPressed && colorm === "stroke" && wait === 0 && blue(scolor) > 0) {
        scolor = color(red(scolor), green(scolor), blue(scolor) - 1);
        wait = Wait;
    } else if (mouseX > 280 && mouseY > 480 && mouseX < 310 && mouseY < 510 && mouseIsPressed && colorm === "background" && wait === 0 && red(backg) < 255) {
        backg = color(red(backg) + 1, green(backg), blue(backg));
        wait = Wait;
    } else if (mouseX > 280 && mouseY > 520 && mouseX < 310 && mouseY < 550 && mouseIsPressed && colorm === "background" && wait === 0 && red(backg) > 0) {
        backg = color(red(backg) - 1, green(backg), blue(backg));
        wait = Wait;
    } else if (mouseX > 335 && mouseY > 480 && mouseX < 365 && mouseY < 510 && mouseIsPressed && colorm === "background" && wait === 0 && green(backg) < 255) {
        backg = color(red(backg), green(backg) + 1, blue(backg));
        wait = Wait;
    } else if (mouseX > 335 && mouseY > 520 && mouseX < 365 && mouseY < 550 && mouseIsPressed && colorm === "background" && wait === 0 && green(backg) > 0) {
        backg = color(red(backg), green(backg) - 1, blue(backg));
        wait = Wait;
    } else if (mouseX > 390 && mouseY > 480 && mouseX < 420 && mouseY < 510 && mouseIsPressed && colorm === "background" && wait === 0 && blue(backg) < 255) {
        backg = color(red(backg), green(backg), blue(backg) + 1);
        wait = Wait;
    } else if (mouseX > 390 && mouseY > 520 && mouseX < 420 && mouseY < 550 && mouseIsPressed && colorm === "background" && wait === 0 && blue(backg) > 0) {
        backg = color(red(backg), green(backg), blue(backg) - 1);
        wait = Wait;
    }
    if (mouseX > 510 && mouseY > 475 && mouseX < 560 && mouseY < 525 && mouseIsPressed && wait === 0) {
        ssize += 1;
        drawpaint();
        wait = Wait;
    } else if (mouseX > 510 && mouseY > 534 && mouseX < 560 && mouseY < 584 && mouseIsPressed && ssize > 0 && wait === 0) {
        ssize -= 1;
        drawpaint();
        wait = Wait;
    }
    pushStyle();
    if (mouseX > 40 - ssize / 2 && mouseX < 640 + ssize / 2 && mouseY > 40 - ssize / 2 && mouseY < 400 + ssize / 2 && mouseIsPressed) {
        if (tool === "ellipse") {
            ellipse(mouseX, mouseY, ssize, ssize);
        } else if (tool === "point") {
            strokeWeight(ssize);
            point(mouseX, mouseY);
        } else if (tool === "line") {
            strokeWeight(ssize);
            line(mouseX, mouseY, pmouseX, pmouseY);
        } else if (tool === "shrinkline") {
            if (! slarst) {
                sltstart = frameCount;
                slarst = true;
                slwidth = 1;
            }
            if (slarst) {
                slwidth -= slshramt;
                strokeWeight(slwidth * ssize);
                line(mouseX, mouseY, pmouseX, pmouseY);
            }
            if (slwidth <= 0) {
                slarst = false;
            }
        }
    }
    popStyle();
    if (wait > 0) {
        wait -= 1;
    }
    drawpaint();
};
