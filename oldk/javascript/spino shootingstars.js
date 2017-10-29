var x1 = 200;
var y1 = 0;
var x2 = 175;
var y2 = 0;
var s1x = 0;
var s1y = 10;
var s2x = 1.25;
var s2y = 10;
var massrange = [120, 300];
var numobjects = 100;
var masses = [];
var sizes = [];
var xs = [];
var ys = [];
for (var i = 0; i < numobjects; i++) {
    masses.push(random(massrange[0], massrange[1]));
    sizes.push(pow(masses[i], 1/3));
    xs.push(random(0, width));
    ys.push(random(0, height));
}
fill(255, 242, 0);
draw = function() {
    background(29, 40, 115);
    for (var j = 0; j < xs.length; j++) {
        ellipse(xs[j], ys[j], sizes[j], sizes[j]);
    }
    ellipse(x1, y1, 10, 10);
    ellipse(x2, y2, 10, 10);
    x1+=s1x;
    y1+=s1y;
    x2+=s2x;
    y2+=s2y;
};


