/***************************************************
DETAILS-

1) This is just a test version of a long series of physics experiments I intend to release.
2) You can drag the gears about and change their size, but cannot add any more.
3) Instructions - Use the RIGHT and LEFT arrow keys to increase and decrease the size of the lighter gears and UP and DOWN to change the size of the darker gears while pressing your mouse over them. The gears will stick to each other if dragged too close.
4) I know that there are many, many graphical mistakes in this, but in real life, gears will behave exactly as these are behaving.
5) The slightly tinted gear always revolves with a constant speed, you can change the size of the other gears to see how the last gear will behave, the default setting is such that the first and last gear revolve with the same speed.
6) The number which appears when you hover above a gear is the speed at which the gear is rototing (speed is in   [rotation / frame]   ).
7) If you have any queries about the how each gear behaves, just ask, remember though, don't ask everything, only ask what you don't know.

***************************************************/



var drawGear = function(x, y, s, rot, dim) {
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(176, 176, 176);
    if(dim) {
        fill(207, 207, 207);
    }
    ellipse(x, y, s, s);
    for(var i = rot; i < 360 + rot; i += 30) {
        line(cos(i) * s / 4 + x, sin(i) * s / 5 + y, cos(i) * s / 2.5 + x, sin(i) * s / 2.5 + y);
    }
    noStroke();
    fill(0, 0, 0);
    ellipse(x, y, s / 3, s / 3);
    fill(255, 255, 255);
    ellipse((cos(rot) * s / 12) + x, (sin(rot) * s / 12) + y, s / 9, s / 9);
};  //A simple function that draws the gears

var CGear = function(nG, xx, yy, ss, rr, ns) {
    this.nG = nG;
    this.xx = xx;
    this.yy = yy;
    this.ss = ss;
    this.rr = rr;
    this.ns = ns;
    this.aVel = 1;
};  //The constructor function for the chain of gears
CGear.prototype.display = function() {
    for(var i = 0; i < this.nG; i++) {
        var kk = i;
        if(i === this.nG - 1) {
            kk = 0;
        }
        if(this.ss[i] > this.ns[i]) {
            if(i !== 0) {
                drawGear(this.xx[i], this.yy[i], this.ss[i], this.rr[i], false);
            }
            drawGear(this.xx[i], this.yy[i], this.ns[i], this.rr[i], true);
        }
        else {
            drawGear(this.xx[i], this.yy[i], this.ns[i], this.rr[i], true);
            if(i !== 0) {
                drawGear(this.xx[i], this.yy[i], this.ss[i], this.rr[i], false);
            }
        }
        if(i === 0) {
            fill(191, 53, 38, 50);
            stroke(0, 0, 0);
            strokeWeight(2);
            ellipse(this.xx[0], this.yy[0], this.ns[0] / 1.5, this.ns[0] / 1.5);
        }
    }
    for(var i = 0; i < this.nG; i++) {
        var kk = i;
        if(i === this.nG - 1) {
            kk = 0;
        }
        stroke(0, 0, 0);
        noFill();
        strokeWeight(5);
        var fir = new PVector(this.xx[kk], this.yy[kk]);
        var sec = new PVector(this.xx[kk + 1], this.yy[kk + 1]);
        fir.sub(sec);
        var ang = atan2(fir.x, fir.y);
        var rShift = (this.ss[kk] + this.ss[kk + 1]) / 10;
        ang -= ang * 2 + (rShift / 2);
        var beg1 = new PVector((cos(ang) * this.ns[kk] / 2) + this.xx[kk], (sin(ang) * this.ns[kk] / 2) + this.yy[kk]);
        var end1 = new PVector((cos(-ang) * this.ss[kk + 1] / 2) + this.xx[kk + 1], (sin(ang) * this.ss[kk + 1] / 2) + this.yy[kk + 1]);
        line(beg1.x, beg1.y, end1.x, end1.y);
        arc(this.xx[kk], this.yy[kk], this.ns[kk], this.ns[kk], ang, ang + 180 + rShift);
        
        if(this.ns[kk] < this.ss[kk]) {
            ang += 175 + rShift;
            rShift = 25 - rShift;
        }
        else {
            ang += 180 + rShift;
        }
        
        var beg2 = new PVector((cos(ang) * this.ns[kk] / 2) + this.xx[kk], (sin(ang) * this.ns[kk] / 2) + this.yy[kk]);
        var end2 = new PVector((cos(ang) * this.ss[kk + 1] / 2) + this.xx[kk + 1], (sin(ang) * this.ss[kk + 1] / 2) + this.yy[kk + 1]);
        
        line(beg2.x, beg2.y, end2.x, end2.y);
        
        arc(this.xx[kk + 1], this.yy[kk + 1], this.ss[kk + 1], this.ss[kk + 1], ang, ang + 201 - rShift);
    }
};  //Displays the gears and their joints
CGear.prototype.update = function() {
    var nV = this.aVel;
    for(var i = 0; i < this.nG; i++) {
        nV *= this.ns[i - 1] / this.ss[i];
        var m = max(this.ss[i], this.ns[i]);
        if(i === 0) {
            nV = this.aVel;
            m = this.ns[i];
        }
        if(dist(this.xx[i], this.yy[i], mouseX, mouseY) < m / 2) {
            fill(0, 0, 0);
            textAlign(CENTER);
            textSize(25);
            text(nV, this.xx[i] - (max(this.ss[i], this.ns[i]) * 2 / 3), this.yy[i]);
        }
        this.rr[i] += nV;
    }
};  //Tells the speed at which the gears must revolve
CGear.prototype.respond = function() {
    for(var i = 0; i < this.nG + 1; i++) {
        var kk = i;
        var dis = max(this.ss[i], this.ns[i]);
        dis /= 2;
        if(mouseIsPressed) {
            if(dist(mouseX, mouseY, this.xx[kk], this.yy[kk]) < dis) {
                this.xx[kk] = mouseX;
                this.yy[kk] = mouseY;
                if(keyIsPressed && this.ss[kk] >= 25 && this.ss[kk] <= 150 && i !== 0) {
                    if(keyCode === UP) {
                        this.ss[kk] += 1 / this.nG;
                    }
                    else if(keyCode === DOWN) {
                        this.ss[kk] -= 1 / this.nG;
                    }
                }
                if(this.ss[i] < 25) {
                    this.ss[i] = 25;
                }
                if(this.ss[i] > 150) {
                    this.ss[i] = 150;
                }
                if(keyIsPressed && this.ns[kk] >= 25 && this.ns[kk] <= 150) {
                    if(keyCode === RIGHT) {
                        this.ns[kk] += 1 / this.nG;
                    }
                    else if(keyCode === LEFT) {
                        this.ns[kk] -= 1 / this.nG;
                    }
                }
                if(this.ns[i] < 25) {
                    this.ns[i] = 25;
                }
                if(this.ns[i] > 150) {
                    this.ns[i] = 150;
                }
            }
        }
    }
};  //Makes the gears interactive

//These four arrays are the default setting for the gears, if you add a value to ALL of them, you can add another gear
var xS = [66.666, 200, 333.333, 333.333, 200, 66.666];  //The X co-ordinates of the gears
var yS = [66.666, 66.666, 66.666, 200, 200, 200];  //The Y co-ordinates of the gears
var sS = [100, 100, 100, 100, 100, 100];  //The sizes of the darker gears
var nSS = [sS[0], 100, 100, 100, 100, 100];  //The sizes of the lighter gears
var rS = [0, 0, 0, 0, 0, 0];  //The angle at which each gear will start at

var gS = [];  //The array which contains individual pairs of gears

for(var i = 0; i < sS.length; i++) {
    var k = i;
    if(i === yS.length - 1) {
        k = 0;
    }
    gS.push(new CGear(sS.length, xS, yS, sS, rS, nSS));
}  //The loop that inserts the default setting into the gear array

draw = function() {
    background(255, 255, 255);
    
    for(var i = 0; i < yS.length; i++) {
        gS[i].display();
        gS[i].update();
        gS[i].respond();
    }  //Calls all the gears
    
    //Makes the text on the background--------------
    fill(0, 0, 0, 80);
    pushMatrix();
    translate(width / 2, height / 2);
    rotate(38);
    textAlign(CENTER);
    textFont(createFont("Algerian"));
    textSize(69 * width * height / 160000);
    text("Interactive\ngears", 0, 0);
    popMatrix();
    //----------------------------------------------
};
//And finally, a full stop.