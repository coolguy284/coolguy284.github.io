var per = 0.5;

var permap = function(x, y, z) {
    return [x / (max(z, 0) * per), y / (max(z, 0) * per)];
};

translate(200, 200);

var fy = 1000;
var rsize = 50;

noStroke();

var floorrect = function(x, y, w, h) {
    var x1 = x - w / 2;
    var y1 = y - h / 2;
    var x2 = x + w / 2;
    var y2 = y - h / 2;
    var x3 = x - w / 2;
    var y3 = y + h / 2;
    var x4 = x + w / 2;
    var y4 = y + h / 2;
    var p1 = permap(x1, fy, y1);
    var p2 = permap(x2, fy, y2);
    var p3 = permap(x3, fy, y3);
    var p4 = permap(x4, fy, y4);
    quad(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], p4[0], p4[1]);
};

for (var x = -50; x < 50; x += 1) {
    for (var y = 0; y < 75; y += 1) {
        fill(random(150, 200));
        var xc = x * rsize;
        var yc = y;
        floorrect(xc, yc, rsize, rsize);
    }
}