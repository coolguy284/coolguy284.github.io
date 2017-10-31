/**
 * type - 0, null; 1, quark; 2, lepton;
*/
var angleMode = 'rad';
var partarr = [];
var pi = 0;
var mesh = 5;
var tens = 0.5 * 100;
var resis = 0.01;
var debugforce = 1;
var zom = 5000;
var grav = 1;
var electro = 2;
var strong = 1;
var weak = 0;
var part;
var r1 = radians(120);
var r2 = radians(240);
var rr = radians(90);
var partp = {
    pm: 938,
    nm: 939,
    pc: 1,
    nc: 0,
    lg: 1,
    le: 1,
    ls: 0,
    lw: 0,
    lem: 0.510998910,
    lenm: 0.0000022,
    lmm: 105.6583368,
    lmnm: 0.17,
    ltm: 1776.84,
    ltnm: 15.5,
    lec: 1,
    lenc: 0,
    lmc: 1,
    lmnc: 0,
    ltc: 1,
    ltnc: 0,
};
var add = function(x, y, dx, dy, type, prop) {
    partarr[pi] = new part(x, y, dx, dy, type, prop, pi);
    pi += 1;
};
var look = function(par, thi) {
    if (par.type === 1) {
        if (thi === 'c') {
            return partp.pc;
        }
    } else if (par.type === 2) {
        if (thi === 'c') {
            return partp.nc;
        }
    }
};
var part = function(x, y, dx, dy, type, prop, pi) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.type = type;
    this.prop = prop;
    this.pi = pi;
};
part.prototype.draw = function() {
    if (this.type === 1) {
        fill(255, 0, 0);
    } else if (this.type === 2) {
        fill(0, 0, 255);
    }
    ellipse(this.x, this.y, 10, 10);
};
part.prototype.update = function() {
    //this.dy += 0.01;
    this.x += this.dx;
    this.y += this.dy;
    for (var i = 0; i < partarr.length; i ++) {
        if (i !== this.pi) {
            var p2p = partarr[i];
            var sep = dist(this.x, this.y, p2p.x, p2p.y);
            var strength = electro * (look(this, 'c') * look(p2p, 'c')) / sq(max(sep, 1));
            var ang = atan2(this.y - p2p.y, this.x - p2p.x);
            this.dx += strength * cos(ang);
            this.dy += strength * sin(ang);
            if ((this.type === 1 || this.type === 2) && (p2p.type === 1 || p2p.type === 2)) {
                var nstrength = -strong * max(pow(2, min(-sep / 10, 1023)), 0.5);
                this.dx += nstrength * cos(ang);
                this.dy += nstrength * sin(ang);
            }
        }
    }
    if (this.dx > 0) {
        this.dx -= sq(this.dx) * resis;
    } else {
        this.dx += sq(this.dx) * resis;
    }
    if (this.dy > 0) {
        this.dy -= sq(this.dy) * resis;
    } else {
        this.dy += sq(this.dy) * resis;
    }
    if (this.x > width - mesh) {
        this.x = width - mesh - (width - mesh - this.x);
        this.dx *= -1;
    } else if (this.x < mesh) {
        this.x = -mesh - (-mesh - this.x);
        this.dx *= -1;
    } else if (this.y > height - mesh) {
        this.y = height - mesh - (height - mesh - this.y);
        this.dy *= -1;
    } else if (this.y < mesh) {
        this.y = -mesh - (-mesh - this.y);
        this.dy *= -1;
    }
};
for (var i = 0; i < 50; i ++) {
    add(200, 200, 0, 0, 1, 0);
}
for (var i = 0; i < 50; i ++) {
    add(200, 200, 0, 0, 2, 0);
}
draw = function() {
    background(255);
    try {
    for (var i = 0; i < partarr.length; i ++) {
        noStroke();
        partarr[i].draw();
        partarr[i].update();
        if (false) {
            partarr[i].dx = 0;
            partarr[i].dy = 0;
            partarr[i].x = 200;
            partarr[i].y = 20;
        }
    }
    } finally {}
};