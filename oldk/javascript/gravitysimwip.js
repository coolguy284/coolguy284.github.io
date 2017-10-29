var gconstant = 1;
var massrange = [100, 1200];
var numobjects = 100;
var masses = [];
var sizes = [];
var pxs = [];
var pys = [];
var vxs = [];
var vys = [];
for (var i = 0; i < numobjects; i++) {
    masses.push(random(massrange[0], massrange[1]));
    sizes.push(pow(masses[i], 1/3));
    pxs.push(random(0, width));
    pys.push(random(0, height));
    vxs.push(random(-5, 5));
    vys.push(random(-5, 5));
}
draw = function() {
    background(255, 255, 255);
    for (var j = 0; j < pxs.length; j++) {
        ellipse(pxs[j], pys[j], sizes[j], sizes[j]);
        pxs[j] += vxs[j];
        pys[j] += vys[j];
        if (pxs[j] < 0) {pxs[j] = width;}
        if (pxs[j] > width) {pxs[j] = 0;}
        if (pys[j] < 0) {pys[j] = height;}
        if (pys[j] > height) {pys[j] = 0;}
    }
};
