rectMode(CENTER);
var grav = {
    x: 0,
    y: 0
};
var bord = 400;
var aird = 0.0001;
var proparray = [];
var pi = 0;
var Prop;
var add = function(x, y, dx, dy, sd, sx, sy, ang, dang) {
    proparray[pi] = new Prop(x, y, dx, dy, sd, sx, sy, ang, dang, pi);
    pi += 1;
};
var drawbit = function(x, y, sx, sy, ang) {
    pushMatrix();
    translate(x, y);
    rotate(ang);
    ellipse(0, 0, sx, sy);
    popMatrix();
};
var collide = function(t, a, res) {
    var relx = (t.dx + a.dx) / 2;
    var rely = (t.dy + a.dy) / 2;
    t.dx = (relx - t.dx) * 0 + relx;
    t.dy = (rely - t.dy) * 0 + rely;
    a.dx = (relx - a.dx) * 0 + relx;
    a.dy = (rely - a.dy) * 0 + rely;
};
var colltest = function(t, a, tx, ty, ax, ay) {
    var sep = dist(tx, ty, ax, ay);
    if (sep < t.sd + a.sd) {
        collide(t, a, 0.01);
    }
};
var Prop = function(x, y, dx, dy, sd, sx, sy, ang, dang, num) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.sd = sd;
    this.sx = sx;
    this.sy = sy;
    this.ang = ang;
    this.dang = dang;
    this.num = num;
};
Prop.prototype.draw = function() {
    fill(0, 0, 255);
    for (var i = -bord; i < bord + 1; i += bord) {
        for (var j = -bord; j < bord + 1; j += bord) {
            drawbit(this.x + i, this.y + j, this.sx, this.sy, this.ang);
        }
    }
};
Prop.prototype.update = function() {
    this.dx += grav.x;
    this.dy += grav.y;
    if (this.dx > 0) {
        this.dx -= aird * sq(this.dx);
    } else {
        this.dx += aird * sq(this.dx);
    }
    if (this.dy > 0) {
    } else {
        this.dy += aird * sq(this.dy);
    }
    this.x += this.dx;
    this.y += this.dy;
    this.ang += this.dang;
    if (this.x > bord) {
        this.x %= bord;
    } else if (this.x < 0) {
        this.x = (this.x % bord) + 400;
    }
    if (this.y > bord) {
        this.y %= bord;
    } else if (this.y < 0) {
        this.y = (this.y % bord) + 400;
    }
    for (var i = 0; i < proparray.length; i ++) {
        var p2p = proparray[i];
        var sep = dist(this.x, this.y, p2p.x, p2p.y);
        if (p2p.num !== this.num) {
            for (var i = -bord; i < bord + 1; i += bord) {
                for (var j = -bord; j < bord + 1; j += bord) {
                    for (var k = -bord; k < bord + 1; k += bord) {
                        for (var l = -bord; l < bord + 1; l += bord) {
                            colltest(this, p2p, this.x + i, this.y + j, p2p.x + k, p2p.y + l);
                        }
                    }
                }
            }
        }
        
    }
};
for (var i = 0; i < 20; i += 1) {
    add(random(0, 400), random(0, 400), random(0, 3), random(0, 3), 5, 10, 10, 0, 0);
}
draw = function() {
    background(255);
    for (var i = 0; i < proparray.length; i ++) {
        proparray[i].draw();
        proparray[i].update();
    }
};