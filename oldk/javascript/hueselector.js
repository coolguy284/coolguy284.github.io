/**
    
**/
noStroke();
textAlign(CENTER, CENTER);
textSize(map(height, 0, 400, 0, 16));
colorMode(HSB);
background(255, 0, 255);
var rec;
var gec;
var bec;
var hec;
var sec;
var Bec;
var swmouse = 0;
var satur = 255;
var brigh = 255;
var update = function() {
    swmouse = mouseX;
};
var button = function(buttonText, buttonX, buttonY, buttonW, buttonH) {
    rect(buttonX, buttonY, buttonW, buttonH);
    textAlign(CENTER, CENTER);
    textSize(10);
    fill(255, 0, 0);
    text(buttonText, buttonX, buttonY , buttonW, buttonH);
};
var buttonCheck = function(buttonX, buttonY, buttonW, buttonH) {
    var buttonClicked;
    if (mouseIsPressed && mouseX > buttonX && mouseY > buttonY && mouseX < buttonX + buttonW && mouseY < buttonY + buttonH) {
        buttonClicked = true;
    } else {
        buttonClicked = false;
    }
    return buttonClicked;
};
fill(0, 255, 255);
button("^", width / 400 * 302, height / 40 *18, width / 40 * 2, height / 40 * 2);
fill(0, 255, 255);
button("^", width / 400 * 323, height / 40 *18, width / 40 * 2, height / 40 * 2);
fill(0, 255, 255);
button("v", width / 400 * 302, height / 40 *20, width / 40 * 2, height / 40 * 2);
fill(0, 255, 255);
button("v", width / 400 * 323, height / 40 *20, width / 40 * 2, height / 40 * 2);

for (var i = 0; i < width; i++) {
    fill(color(i / (width/255), satur, brigh));
    rect(i, 0, 1, height / 8);
}
rect(width / 4, height / 4, width / 2, height / 2);
var draw = function() {
    if (buttonCheck(width / 400 * 302, height / 40 * 18, width / 40 * 2, height / 40 * 2) && satur < 255) {
        satur += 1;
    }
    if (buttonCheck(width / 400 * 323, height / 40 * 18, width / 40 * 2, height / 40 * 2) && brigh < 255) {
        brigh +=1;
    }
    if (buttonCheck(width / 400 * 302, height / 40 * 20, width / 40 * 2, height / 40 * 2) && satur > 0) {
        satur -= 1;
    }
    if (buttonCheck(width / 400 * 323, height / 40 * 20, width / 40 * 2, height / 40 * 2) && brigh > 0) {
        brigh -= 1;
    }
    rec = red(color(swmouse / (width/255), satur, brigh));
    gec = green(color(swmouse / (width/255), satur, brigh));
    bec = blue(color(swmouse / (width/255), satur, brigh));
    hec = round(hue(color(swmouse / (width/255), satur, brigh))*10)/10;
    sec = saturation(color(swmouse / (width/255), satur, brigh));
    Bec = brightness(color(swmouse / (width/255), satur, brigh));
    if (mouseIsPressed && mouseY < height / 8) {
        fill(hec, satur, brigh);
        rect(width / 4, height / 4, width / 2, height / 2);
        for (var i = 0; i < width; i++) {
    fill(color(i / (width/255), satur, brigh));
    rect(i, 0, 1, height / 8);
}
    }
    fill(255, 0, 255);
    if (mouseIsPressed && mouseY < height / 8) {
        update();
    }
    rect(0, height / 4 * 3, width, height / 4 * 3);
    fill(255, 0, 0);
    text("Color (HSB): " + hec + ", " + satur + ", " + brigh, width / 2, height / 16 * 13);
    text("Color (RGB): " + rec + ", " + gec + ", " + bec, width / 2, height / 16 * 14);
    fill(0, 255, 255);
    rect(0, height / 400 * 381, width / 400 * 30, height / 400 * -rec * 0.3);
    fill(255 / 3, 255, 255);
    rect(width / 40 * 3, height /400 * 381, width / 400 * 30, height / 400 * -gec * 0.3);
    fill(255 / 3 * 2, 255, 255);
    rect(width / 40 * 6, height / 400 * 381, width / 40 * 3, height / 400 * -bec * 0.3);
    fill(hec, sec, Bec);
    rect(width / 40 * 31, height / 400 * 381, width / 40 * 3, height / 400 * -hec * 0.3);
    fill(42.4, sec, 255);
    rect(width / 40 * 34, height / 400 * 381, width / 40 * 3, height / 400 * -sec * 0.3);
    fill(84.8, 255, Bec);
    rect(width / 40 * 37, height / 400 * 381, width / 40 * 3, height / 400 * -Bec * 0.3);
};
