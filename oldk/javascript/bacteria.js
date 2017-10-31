var bl;

var Bacteria = function(x, y, dx, dy, type) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.type = type;
};

Bacteria.prototype.draw = function() {
    ellipse(this.x, this.y, 5, 5);
};

Bacteria.prototype.update = function() {
    this.x += this.dx;
    this.y += this.dy;
    for (var j = 0; j < bl.length; j ++) {
        if (j !== this) {
            if (j.type === 1 && this.type === 0 && dist(j.x, j.y, this.x, this.y) < 5) {
                bl.push(new Bacteria(this.x, this.y, 1, 0, 0));
                this.dx = -1;
            }
        }
    }
    if (this.x < 0) {
        this.x = 0;
        this.dx *= -1;
    } else if (this.x > 400) {
        this.x = 400;
        this.dx *= -1;
    }
    if (this.y < 0) {
        this.y = 0;
        this.dy *= -1;
    } else if (this.y > 400) {
        this.y = 400;
        this.dy *= -1;
    }
};

var bl = [new Bacteria(200, 200, 0, 0, 0)];

mouseClicked = function() {
    bl.push(new Bacteria(mouseX, mouseY, 0, -1, 1));
};

draw = function() {
    background(255);
    for (var i = 0; i < bl.length; i ++) {
        var b = bl[i];
        b.draw();
        b.update();
    }
};