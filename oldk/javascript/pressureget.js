fill(0);
ellipse(5, 5, 9, 9);
var elip = get(0, 0, 10, 10);
imageMode(CENTER);
var drag;
//*
var Particle = function(x, y, dx, dy, neudist, size, constrained) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.neudist = neudist;
    this.size = size;
    this.l = 100 + neudist;
    this.h = 300 - neudist;
    this.constrained = constrained;
    this.ml = neudist;
    this.mhx = width - neudist;
    this.mhy = height - neudist;
};

Particle.prototype.draw = function() {
    if (this.size !== 1) {
        image(elip, this.x, this.y, this.size, this.size);
    } else {
        set(this.x, this.y, color(0));
    }
};

var top = 0;
var bottom = 0;
var left = 0;
var right = 0;

Particle.prototype.update = function() {
    this.dx *= drag;
    this.dy *= drag;
    this.x += this.dx;
    this.y += this.dy;
    if (this.constrained) {
        if (this.x < this.l) {
            this.x = -(this.x - this.l) + this.l;
            this.dx *= -1;
            left += abs(this.dx);
        } else if (this.y < this.l) {
            this.y = -(this.y - this.l) + this.l;
            this.dy *= -1;
            top += abs(this.dy);
        } else if (this.x > this.h) {
            this.x = -(this.x - this.h) + this.h;
            this.dx *= -1;
            right += abs(this.dx);
        } else if (this.y > this.h) {
            this.y = -(this.y - this.h) + this.h;
            this.dy *= -1;
            bottom += abs(this.dy);
        }
    } else {
        if (this.x < this.ml) {
            this.x = -(this.x - this.ml) + this.ml;
            this.dx *= -1;
            left += abs(this.dx);
        } if (this.y < this.ml) {
            this.y = -(this.y - this.ml) + this.ml;
            this.dy *= -1;
            top += abs(this.dy);
        } if (this.x > this.mhx) {
            this.x = -(this.x - this.mhx) + this.mhx;
            this.dx *= -1;
            right += abs(this.dx);
        } if (this.y > this.mhy) {
            this.y = -(this.y - this.mhy) + this.mhy;
            this.dy *= -1;
            bottom += abs(this.dy);
        }
    }
    
};

var top = 0;
var bottom = 0;
var left = 0;
var right = 0;

var ts = 0;
var bs = 0;
var ls = 0;
var rs = 0;

var smf = 0.005;
var drag = 1;

textFont(createFont('Arial', 20));
textAlign(CENTER, CENTER);

var particles = [];

var speed = 2;
var xo = 0;
var yo = 0;
var stiff = 100;

for (var i = 0; i < 10000; i ++) {
    particles.push(new Particle(random(100, 300), random(100, 300), random(-speed, speed) + xo, random(-speed, speed) + yo, 0.5, 1, true));
}

draw = function() {
    background(255);
    fill(0);
    for (var i = 0; i < particles.length; i ++) {
        particles[i].update();
        particles[i].draw();
    }
    line(100, 100, 300, 100);
    line(100, 100, 100, 300);
    line(100, 300, 300, 300);
    line(300, 100, 300, 300);
    fill(0);
    text('Pressure:\n' + top.toFixed(3), 200, 50);
    text('Pressure:\n' + bottom.toFixed(3), 200, 350);
    text('Pressure:\n' + left.toFixed(3), 50, 200);
    text('Pressure:\n' + right.toFixed(3), 350, 200);
    text('Average:\n' + ((top + bottom + left + right) / 4).toFixed(3), 350, 350);
    text('Stress:\n' + ts.toFixed(3), 600, 50);
    text('Stress:\n' + bs.toFixed(3), 600, 350);
    text('Stress:\n' + ls.toFixed(3), 450, 200);
    text('Stress:\n' + rs.toFixed(3), 750, 200);
    text('Stress:\n' + ((ts + bs + ls + rs) / 4).toFixed(3), 750, 350);
    noFill();
    bezier(500, 100, 500 - ls / stiff, 166, 500 - ls / stiff, 233, 500, 300);
    bezier(500, 100, 566, 100 - ts / stiff, 633, 100 - ts / stiff, 700, 100);
    bezier(700, 100, 700 + rs / stiff, 166, 700 + rs / stiff, 233, 700, 300);
    bezier(500, 300, 566, 300 + bs / stiff, 633, 300 + bs / stiff, 700, 300);
    ts += top * smf;
    bs += bottom * smf;
    ls += left *smf;
    rs += right * smf;
    ts = ts * (1 - smf);
    bs = bs * (1 - smf);
    ls = ls * (1 - smf);
    rs = rs * (1 - smf);
    top = 0;
    bottom = 0;
    left = 0;
    right = 0;
};
//*/