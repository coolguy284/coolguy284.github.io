var bright = 1,
    xd = 20,
    yd = 20,
    dw = 200 / xd,
    dh = 200 / yd,
    x = 0,
    y = 0;

var Display = function(bright, xd, yd, dw, dh, x, y, arr) {
    this.bright = bright;
    this.xd = xd;
    this.yd = yd;
    this.dw = dw;
    this.dh = dh;
    this.x = x;
    this.y = y;
    this.arr = arr;
};

Display.prototype.createarr = function() {
    this.arr = [];
    for (var x = 0; x < this.xd; x += 1) {
        this.arr.push([]);
        for (var y = 0; y < this.yd; y += 1) {
            this.arr[x].push(color(0));
        }
    }
};

Display.prototype.setcolor = function(x, y, color) {
    this.arr[x][y] = color;
};

Display.prototype.getcolor = function(x, y) {
    return this.arr[x][y];
};

Display.prototype.draw = function() {
    for (var x = 0; x < this.xd; x += 1) {
        for (var y = 0; y < this.yd; y += 1) {
            var filcol = this.arr[x][y];
            fill(red(filcol) * bright, green(filcol) * bright, blue(filcol) * bright);
            rect(x * this.dw, y * this.dh, this.dw, this.dh);
        }
    }
};

var disp = new Display(bright, xd, yd, dw, dh, x, y);
disp.createarr();
disp.setcolor(10, 10, color(255, 0, 0));
noStroke();
//*
var draw = function() {
    fill(disp.getcolor(constrain(floor(mouseX / dw), 0, xd - 1), constrain(floor(mouseY / dh), 0, yd - 1)));
    rect(200, 0, 200, 200);
    disp.draw();
};
//*/