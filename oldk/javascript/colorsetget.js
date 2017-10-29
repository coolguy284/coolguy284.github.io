
/**
 * Inverts the color on the left side of the board and puts it on the right.
 * The colors on the left are purposely inverted, so it looks normal afterward.
 */
strokeWeight(30);
background(0);
stroke(255);
fill(0);
line(0, 0, 232, 123);
line(12, 131, 211, 322);
rect(46, 26, 120, 120);
stroke(255, 0, 255);
line(45, 234, 134, 123);
point(343, 123);
stroke(0, 255, 255);
point(342, 321);
strokeWeight(2);
for (var i = 0; i < 100; i ++) {
    var colorfinal = color(255, 255, 255 - map(i, 0, 100, 0, 255));
    fill(colorfinal);
    noStroke();
    rect(i + 147, 200, 1, 100);
}
for (var i = 0; i < 100; i++) {
    var colorfinal = color(map(i, 0, 100, 0, 255), map(i, 0, 100, 0, 255), 0);
    fill(colorfinal);
    noStroke();
    rect((100 - i) + 246, 200, 1, 100);
}
stroke(255);
noFill();
beginShape();
vertex(147, 200);
vertex(347, 200);
vertex(347, 300);
vertex(147, 300);
endShape(CLOSE);
var sweep = 0;
draw = function() {
    if (sweep < 400) {
        for (var i = 0; i < 400; i++) {
            var colorget = get(i, sweep);
            var redcolor = red(colorget);
            var greencolor = green(colorget);
            var bluecolor = blue(colorget);
            var colorfinal = color(255 - redcolor, 255 - greencolor, 255 - bluecolor);
            set(i, sweep, colorfinal);
        }
        sweep++;
    }
};
