/*
BACK 8
TAB 9
ENTER 10
DEL 127
INS 155
*/
var textdat = [[]];
var textlin = 0;
var totstr = "";
keyPressed = function() {
    fill(0);
    background(255);
    println(keyCode + " " + key);
    if (keyCode !== 8 && keyCode !== 9 && keyCode !== 10 && keyCode !== 127 && keyCode !== 155 && keyCode !== 16 && keyCode !== 20) {
        textdat[textlin].push(key.toString());
    } else if (keyCode === 10) {
        textdat.push([]);
        textlin++;
    } else if (keyCode === 8) {
        if (textdat[textlin].length !== 0) {
            textdat[textlin].splice(textdat[textlin].length - 1);
        } else {
            textdat.splice(textlin);
            textlin--;
        }
    }
    var totstr = "";
    for (var i = 0; i < textdat.length; i ++) {
        for (var j = 0; j < textdat[i].length; j ++) {
            totstr = totstr + textdat[i][j];
        }
        totstr = totstr + "\n";
    }
    text(totstr, 10, 10, 390, 390);
    fill(255);
};
