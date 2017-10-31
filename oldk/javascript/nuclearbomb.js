var angleMode = 'rad';
var speed = 1;
var nspeed = 5;
var collspeed = 0;
var photspeed = 5;
var pi = 0;
var particlearray = [];
var grav = {
    x: 0,
    y: -0.05
};
var bord = 50;
var pu235 = 0;
var pu236 = 0;
var pneu = 0;
var pfiss = 0;
var pnullpar = 0;
var phydro = 0;
var pduter = 0;
var ppho = 0;
var ppoi = 0;
var pheil = 0;
var u235 = 0;
var u236 = 0;
var neu = 0;
var fiss = 0;
var nullpar = 0;
var hydro = 0;
var duter = 0;
var pho = 0;
var poi = 0;
var heil = 0;
var img = get(200, 400, 200, 200);
var determine = function(type) {
    var sd;
    if (type === 0) {
        sd = 5;
    } else if (type === 1) {
        sd = 6;
    } else if (type === 2) {
        sd = 1;
    } else if (type === 3) {
        sd = 3;
    } else if (type === 5) {
        sd = 2;
    } else if (type === 6) {
        sd = 2;
    } else if (type === 7) {
        sd = 2;
    } else if (type === 8) {
        sd = 5;
    } else if (type === 9) {
        sd = 4;
    }
    return sd;
};
var add;
var rand = function(mag) {
    var ang = random(0, 6.28318530717958);
    return new PVector(sin(ang) * mag * random(), cos(ang) * mag * random());
};
var destroy = function(part) {
    part.type = 4;
};
var remove = function(part) {
    var num = part.num;
    for (var i = num; i < particlearray.length - 1; i ++) {
        particlearray[i] = particlearray[i] + 1;
        particlearray[i].num -= 1;
    }
    particlearray.pop(particlearray.length);
};
//destroy = remove;
var collide = function(p1p, p2p) {
    if (p1p.type === 2) {
        if (p2p.type === 0) {
            p2p.type = 1;
            p2p.life = 5;
            destroy(p1p);
            //playSound(getSound("rpg/metal-clink"));
        } else if (p2p.type === 5 && dist(0, 0, p1p.dx - p2p.dx, p1p.dy - p2p.dy) > collspeed) {
            p2p.type = 6;
            var ang = random(0, 6.28318530717958);
            add(p2p.x, p2p.y, sin(ang) * photspeed, cos(ang) * photspeed, 7, -1);
            p2p.dx += p1p.dx / 5;
            p2p.dy += p1p.dy / 5;
            destroy(p1p);
        } else if (p2p.type === 8) {
            p2p.life -= 1;
            destroy(p1p);
        }
    } else if (p1p.type === 6) {
        if (p2p.type === 6 && dist(0, 0, p1p.dx - p2p.dx, p1p.dy - p2p.dy) > collspeed) {
            p2p.type = 9;
            p2p.dx = (p1p.dx + p2p.dx) / 2;
            p2p.dy = (p1p.dy + p2p.dy) / 2;
            var ang = random(0, 6.28318530717958);
            add(p2p.x, p2p.y, sin(ang) * photspeed, cos(ang) * photspeed, 7, -1);
            destroy(p1p);
        }
    }//*/
};
var Particle = function(x, y, dx, dy, type, life, num) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.type = type; //0-235 1-236 2-neutron 3-fission product 4-null 5-hydrogen 6-duterium 7-photon 8-neutron poison 9-helium
    this.life = life;
    this.num = num;
};
var add = function(x, y, dx, dy, type, life, num) {
    particlearray[pi] = new Particle(x, y, dx, dy, type, life, pi);
    pi += 1;
};
Particle.prototype.draw = function() {
    var sw = determine(this.type);
    var col;
    noStroke();
    if (this.type === 0) {
        col = color(0, 255, 0);
    } else if (this.type === 1) {
        col = color(255, 0, 0);
    } else if (this.type === 2) {
        col = color(0, 0, 0);
    } else if (this.type === 3) {
        col = color(0, 0, 0);
    } else if (this.type === 5) {
        col = color(255, 127, 0);
    } else if (this.type === 6) {
        col = color(255, 255, 0);
    } else if (this.type === 7) {
        col = color(0, 0, 255);
    } else if (this.type === 8) {
        col = color(0, 255, 255);
    } else if (this.type === 9) {
        col = color(255, 255, 0);
    }
    fill(col);
    ellipse(this.x, this.y, sw, sw);
    //set(round(this.x), round(this.y), col);
};
Particle.prototype.update = function() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x < 0) {
        this.x = 0;
        this.dx *= -1;
    } else if (this.x > bord) {
        this.x = bord;
        this.dx *= -1;
    } else if (this.y < 0) {
        this.y = 0;
        this.dy *= -1;
    } else if (this.y > bord) {
        this.y = bord;
        this.dy *= -1;
    }
    var mindist = 400;
    if (this.type === 0 || this.type === 5 || this.type === 6 || this.type === 8) {
        for (var i = 0; i < particlearray.length; i++) {
            var part1 = determine(this.type);
            var p2p = particlearray[i];
            var part2 = determine(p2p.type);
            var px = p2p.x;
            var py = p2p.y;
            var sep = dist(this.x, this.y, px, py);
            if (this.num !== p2p.num) {
                fill(0);
                if (sep < (part1 / 2 + part2 / 2)) {
                    collide(p2p, this);
                }
                mindist = min(mindist, sep);
            }
        }
    }
    if (this.life < 0) {
        if (this.type === 1) {
            var vect = rand(speed);
            add(this.x, this.y, vect.x, vect.y, 3, -1);
            var vect = rand(speed);
            add(this.x, this.y, vect.x, vect.y, 3, -1);
            for (var j = 0; j < random(0, 3); j++) {
                var vect = rand(nspeed);
                add(this.x, this.y, vect.x, vect.y, 2, -1);
            }
            var ang = random(0, 6.28318530717958);
            add(this.x, this.y, sin(ang) * photspeed, cos(ang) * photspeed, 7, -1);
            destroy(this);
        } else if (this.type === 8) {
            this.type = 0;
        }
    } else if (this.type !== 8) {
        this.life -= 1;
    }
};
for (pi; pi < 100; true) {
    var vect = rand(speed);
    add(random(0, bord), random(0, bord), vect.x, vect.y, 0, 5);
    var vect = rand(speed);
    add(random(0, bord), random(0, bord), vect.x, vect.y, 5, 5);
}
mouseClicked = function() {
    if (!keyIsPressed) {
        if (mouseButton === 37) {
            var vect = rand(nspeed);
            add(mouseX, mouseY, vect.x, vect.y, 2, -1);
        } else if (mouseButton === 39) {
            var vect = rand(nspeed);
            add(mouseX, mouseY, vect.x, vect.y, 8, 10);
        }
    } else if (keyCode === 16) {
        if (mouseButton === 37) {
            var vect = rand(speed);
            add(mouseX, mouseY, vect.x, vect.y, 1, 5);
        } else if (mouseButton === 39) {
            var vect = rand(speed);
            add(mouseX, mouseY, vect.x, vect.y, 0, -1);
        }
    } else if (keyCode === 17) {
        if (mouseButton === 37) {
            var vect = rand(speed);
            add(mouseX, mouseY, vect.x, vect.y, 5, 5);
        } else if (mouseButton === 39) {
            var vect = rand(speed);
            add(mouseX, mouseY, vect.x, vect.y, 6, -1);
        }
    }
};
textFont(createFont('arial'), 14);
draw = function() {
    u235 = 0;
    u236 = 0;
    neu = 0;
    fiss = 0;
    nullpar = 0;
    hydro = 0;
    duter = 0;
    pho = 0;
    poi = 0;
    heil = 0;
    background(255);
    for (var i = 0, par; i < particlearray.length; i ++) {
        par = particlearray[i];
        par.draw();
        par.update();
        if (par.type === 0) {
            u235 ++;
        } else if (par.type === 1) {
            u236 ++;
        } else if (par.type === 2) {
            neu ++;
        } else if (par.type === 3) {
            fiss ++;
        } else if (par.type === 4) {
            nullpar ++;
        } else if (par.type === 5) {
            hydro ++;
        } else if (par.type === 6) {
            duter ++;
        } else if (par.type === 7) {
            pho ++;
        } else if (par.type === 8) {
            poi ++;
        } else if (par.type === 9) {
            heil ++;
        }
    }
    fill(0);
    text('Uranium 235: ' + u235, 20, 416);
    text('Uranium 236: ' + u236, 20, 432);
    text('Neutron: ' + neu, 20, 448);
    text('Fission Product: ' + fiss, 20, 464);
    text('Null: ' + nullpar, 20, 480);
    text('Hydrogen: ' + hydro, 20, 496);
    text('Duterium: ' + duter, 20, 512);
    text('Photon: ' + pho, 20, 528);
    text('Neutron Poison: ' + poi, 20, 544);
    text('Helium: ' + heil, 20, 560);
    text('Particles: ' + particlearray.length, 20, 576);
    image(img, 200, 400);
    stroke(0, 255, 0);
    line(199.66666 + frameCount / 3, 580 - pu235, 200 + frameCount / 3, 580 - u235);
    stroke(255, 0, 0);
    line(199.66666 + frameCount / 3, 580 - pu236, 200 + frameCount / 3, 580 - u236);
    stroke(0);
    line(199.66666 + frameCount / 3, 580 - pneu, 200 + frameCount / 3, 580 - neu);
    line(199.66666 + frameCount / 3, 580 - pfiss, 200 + frameCount / 3, 580 - fiss);
    stroke(255, 127, 0);
    line(199.66666 + frameCount / 3, 580 - phydro, 200 + frameCount / 3, 580 - hydro);
    stroke(255, 255, 0);
    line(199.66666 + frameCount / 3, 580 - pduter, 200 + frameCount / 3, 580 - duter);
    line(199.66666 + frameCount / 3, 580 - pheil, 200 + frameCount / 3, 580 - heil);
    stroke(0, 0, 255);
    line(199.66666 + frameCount / 3, 580 - ppho, 200 + frameCount / 3, 580 - pho);
    stroke(0, 255, 255);
    line(199.66666 + frameCount / 3, 580 - ppoi, 200 + frameCount / 3, 580 - poi);
    img = get(200, 400, 600, 200);
    pu235 = u235;
    pu236 = u236;
    pneu = neu;
    pfiss = fiss;
    pnullpar = nullpar;
    phydro = hydro;
    pduter = duter;
    ppho = pho;
    ppoi = poi;
    pheil = heil;
    if (frameCount > 1800) {
        noLoop();
    }
};