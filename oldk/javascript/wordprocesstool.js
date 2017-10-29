var textprint = [];
var rectposx = 10;
var rectposy = 0;
fill(0, 0, 0);
var readfunction = function(textpl) {
    var readtext = "";
    for (var i = 0; i < textpl.length; i++) {
        readtext = readtext + textpl[i];
    }
    return readtext;
};
keyPressed = function() {
    if (keyCode !== 16 && keyCode !== 8 && keyCode !== 9 && keyCode !== 10 && keyCode !== 20) {
        textprint.push(key.toString());
        rectposx += 7;
    } else if (keyCode === 8) {
        if ((textprint.length) - 1 === "\n") {
            rectposx -= 7;
            rectposy -= 10;
        } else {
            rectposx -= 7;
        }
        textprint.splice((textprint.length) - 1);
    } else if (keyCode === 10) {
        textprint.push("\n");
        rectposy += 14;
        rectposx = 10;
    } else if (keyCode === 9) {
        textprint.push("    ");
        rectposx += 25;
    }
};
draw = function() {
    background(255, 255, 255);
    var newstring = readfunction(textprint);
    text(newstring, 10, 10);
    rect(textWidth(newstring) + 10, rectposy, 2, 10);
};