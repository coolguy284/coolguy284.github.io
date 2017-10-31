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
var electro = 10;
var strong = 1;
var weak = 0;
var part;
var r1 = radians(120);
var r2 = radians(240);
var rr = radians(90);
var partp = {
    qg: 1,
    qe: 0,
    qs: 1,
    qw: 1,
    qum: 2.3,
    qdm: 4.8,
    qcm: 1275,
    qsm: 95,
    qtm: 173210,
    qbm: 4180,
    qa: 1/2,
    qb: 1/3,
    quc: 2/3,
    qdc: -1/3,
    qcc: 2/3,
    qsc: -1/3,
    qtc: 2/3,
    qbc: -1/3,
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
var addproton = function(x, y, dx, dy, rot, rots) {
    add(x + cos(rot) * 20, y + sin(rot) * 20, dx + cos(rot + rr) * rots, dy + sin(rot + rr) * rots, 1, 0);
    add(x + cos(r1 + rot) * 20, y + sin(r1 + rot) * 20, dx + cos(rot + r1 + rr) * rots, dy + sin(rot + r1 + rr) * rots, 1, 1);
    add(x + cos(r2 + rot) * 20, y + sin(r2 + rot) * 20, dx + cos(rot + r2 + rr) * rots, dy + sin(rot + r2 + rr) * rots, 1, 5);
};
var addneutron = function(x, y, dx, dy, rot, rots) {
    add(x + cos(rot) * 20, y + sin(rot) * 20, dx + cos(rot + rr) * rots, dy + sin(rot + rr) * rots, 1, 0);
    add(x + cos(r1 + rot) * 20, y + sin(r1 + rot) * 20, dx + cos(rot + r1 + rr) * rots, dy + sin(rot + r1 + rr) * rots, 1, 4);
    add(x + cos(r2 + rot) * 20, y + sin(r2 + rot) * 20, dx + cos(rot + r2 + rr) * rots, dy + sin(rot + r2 + rr) * rots, 1, 5);
};
var look = function(par, thi) {
    if (par.type === 1) {
        if (floor(par.prop / 3) === 0) {
            if (thi === 'c') {
                return partp.quc;
            }
        } else if (floor(par.prop / 3) === 1) {
            if (thi === 'c') {
                return partp.qdc;
            }
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
        var col = this.prop % 3;
        if (col === 0) {
            fill(255, 0, 0);
        } else if (col === 1) {
            fill(0, 255, 0);
        } else if (col === 2) {
            fill(0, 0, 255);
        }
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
            var strength = -electro * (look(this, 'c') + look(p2p, 'c')) / sq(sep);
            var ang = atan2(this.y - p2p.y, this.x - p2p.x);
            this.dx += strength * cos(ang);
            this.dy += strength * sin(ang);
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
addproton(200, 200, 0, 0, 0, radians(90));
draw = function() {
    background(255);
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
};