var particlearray = [];
var pi = 0;
var Part;
var add = function(x, y, dx, dy, type) {
    Part(x, y, dx, dy, type, pi);
    pi += 1;
};
var Part = function(x, y, dx, dy, type, pi) {
    this.x = x;
    this.y = y;
};