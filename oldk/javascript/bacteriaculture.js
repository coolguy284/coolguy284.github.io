var splitenergy = 20;
var partlist = [];
var pi = 0;
var part;
var add = function(x, y, dx, dy, type, energy) {
    partlist.push(new part(x, y, dx, dy, type, energy, pi));
    pi ++;
};
var part = function(x, y, dx, dy, type, energy, num) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.type = type;
    this.energy = energy;
    this.num = num;
};
part.prototype.draw = function() {
    noStroke();
    if (this.type === 0) {
        fill(0);
        ellipse(this.x, this.y, 1, 1);
    } else if (this.type === 1) {
        fill(255, 0, 0);
        ellipse(this.x, this.y, 5, 5);
    }
};
part.prototype.update = function() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 5) {
        this.x = 5 - (this.x - 5);
        this.dx *= -1;
    } else if (this.x > 395) {
        this.x = 395 - (this.x - 395);
        this.dx *= -1;
    }
    if (this.y < 5) {
        this.y = 5 - (this.y - 5);
        this.dy *= -1;
    } else if (this.y > 395) {
        this.y = 395 - (this.y - 395);
        this.dy *= -1;
    }
    for (var i = 0; i < partlist.length; i ++) {
        var p2p = partlist[i];
        if (this.num !== p2p.num) {
            var sep = dist(this.x, this.y, p2p.x, p2p.y);
            if (sep < 5 && p2p.type === 0 && this.type === 1) {
                this.energy += 1;
            }
        }
    }
    if (this.energy > splitenergy) {
        add(this.x, this.y, random(-2, 2), random(-2, 2), 1, 0);
    }
};
add(200, 200, 0, 0, 1, 0);
mouseClicked = function() {
    add(mouseX, mouseY, random(-2, 2), random(-2, 2), 0, 0);
};
draw = function() {
    background(255);
    for (var i = 0; i < partlist.length; i ++) {
        var e = partlist[i];
        e.draw();
        e.update();
    }
};