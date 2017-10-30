/*
Copyright (c) 2013 dissimulate at Codepen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Code adapted from CodePen to work on Khan Academy by Jacob 2015
*/
var physics_accuracy  = 10,
    mouse_influence   = 20,
    mouse_cut         = 5,
    gravity           = 1200,
    cloth_height      = 30,
    cloth_width       = 25,
    start_y           = 20,
    spacing           = 4,
    tear_distance     = 60;

var boundsx,
    boundsy;
    
var Constraint = function (p1, p2) {

    this.p1     = p1;
    this.p2     = p2;
    this.length = spacing;
};
var Point = function (x, y) {

    this.x      = x;
    this.y      = y;
    this.px     = x;
    this.py     = y;
    this.vx     = 0;
    this.vy     = 0;
    this.pin_x  = null;
    this.pin_y  = null;
    
    this.constraints = [];
};
Point.prototype.update = function (delta) {

    if (mouseIsPressed) {

        var diff_x = this.x - mouseX,
            diff_y = this.y - mouseY,
            dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y);

        if (mouseButton === LEFT) {

            if (dist < mouse_influence) {
                this.px = this.x - (mouseX - pmouseX) * 1.8;
                this.py = this.y - (mouseY - pmouseY) * 1.8;
            }

        } else if (dist < mouse_cut){ 
            this.constraints = [];
        }
    }

    this.add_force(0, gravity);

    delta *= delta;
    var nx = this.x + ((this.x - this.px) * 0.99) + ((this.vx / 2) * delta);
    var ny = this.y + ((this.y - this.py) * 0.99) + ((this.vy / 2) * delta);

    this.px = this.x;
    this.py = this.y;

    this.x = nx;
    this.y = ny;

    this.vy = this.vx = 0;
    this.y=constrain(this.y, -400, 320);
    this.x = constrain(this.x, 10, 390);
};
Point.prototype.draw = function () {

    if (!this.constraints.length){ return; }

    var i = this.constraints.length;
    while (i--){ this.constraints[i].draw(); }
};

Point.prototype.resolve_constraints = function () {

    if (this.pin_x !== null && this.pin_y !== null) {

        this.x = this.pin_x;
        this.y = this.pin_y;
        return;
    }

    var i = this.constraints.length;
    while (i--){ this.constraints[i].resolve(); }
};

Point.prototype.attach = function (point) {
    this.constraints.push(
        new Constraint(this, point)
    );
};

Point.prototype.remove_constraint = function (constraint) {
    this.constraints.splice(this.constraints.indexOf(constraint), 1);
};

Point.prototype.add_force = function (x, y) {
    this.vx += x;
    this.vy += y;
};

Point.prototype.pin = function (pinx, piny) {
    this.pin_x = pinx;
    this.pin_y = piny;
};

Constraint.prototype.resolve = function () {

    var diff_x  = this.p1.x - this.p2.x,
        diff_y  = this.p1.y - this.p2.y,
        dist    = Math.sqrt(diff_x * diff_x + diff_y * diff_y),
        diff    = (this.length - dist) / dist;

    if (dist > tear_distance){ this.p1.remove_constraint(this); }

    var px = diff_x * diff * 0.5;
    var py = diff_y * diff * 0.5;

    this.p1.x += px;
    this.p1.y += py;
    this.p2.x -= px;
    this.p2.y -= py;
};

Constraint.prototype.draw = function () {
    line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
};
var p = [];
/*
for(var i=0;i<35;i++){
    p.push( new Point(200-i*5, i*10) );
    if(i===0){
        p[i].pin(200, 0);
    }else{
        p[i].attach(p[i-1]);
    }
}*/
var start_x = width / 2 - cloth_width * spacing / 2;

    for (var y = 0; y <= cloth_height; y++) {

        for (var x = 0; x <= cloth_width; x++) {

            var P = new Point(start_x + x * spacing, start_y + y * spacing);

            if(x !== 0){ P.attach(p[p.length - 1]); }
            if(y === 0){ P.pin(P.x, P.y); }
            else if(y !== 0){ P.attach(p[x + (y - 1) * (cloth_width + 1)]); }

            p.push(P);
        }
    }
strokeWeight(0.5);
println("Note, this code is NOT mine. I simply adapted it from CodePen:\nhttp://codepen.io/dissimulate/pen/KrAwx");
fill(227, 227, 227);
var draw = function() {
    background(255, 255, 255);
    noStroke();
    fill(227);
    quad(0,330,20,310,380,310,400,330);
    fill(240);
    quad(0,0,20,0,20,310,0,330);
    fill(210);
    quad(400,0,380,0,380,310,400,330);
    fill(148, 148, 148);
    text("- Move the cloth\n  with your mouse\n\n- Right click and\n  drag to cut the\n  cloth\n",5,20);
    stroke(0, 0, 0);
    var i = physics_accuracy;

    while (i--) {
        var k = p.length;
        while (k--){ p[k].resolve_constraints(); }
    }

    i = p.length;
    while (i--){ p[i].update(0.016); }
    for(var i in p){
        p[i].draw();
    }
    fill(50);
    text("© 2013 dissimulate at Codepen",221,326);
};







