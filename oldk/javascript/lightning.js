var Lightning = function(x, y, ang) {
    this.x = x;
    this.y = y;
    this.ang = ang;
};

var ll = [new Lightning(200, 0, 90)];

var update = function(thia) {
    var px = thia.x;
    var py = thia.y;
    thia.x += cos(thia.ang);
    thia.y += sin(thia.ang);
    thia.y += 1;
    thia.ang += random(-10, 10);
    line(px, py, this.x, this.y);
};

for (var i = 0; i < 1000; i ++) {
    for(var j = 0; j < ll.length; j ++) {
        update(ll[j]);
    }
}