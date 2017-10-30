var position = new PVector(0, 0);
var velocity = new PVector(0, 0);
var acceleration = new PVector(0, 0);
var rotation = 0;

var rvelocity = new PVector(0, 0);
var power = 0.1;
var lightspeed = 1000;
var uselight = false;
var shift = 0.001;
//star image function
var stars = [];
for (var i = 0; i < 100; i ++) {
    stars.push({
        x: random(0, 8000),
        y: random(0, 8000),
        depth: random(1, 20),
    });
}
var tmod = function(val) {
    val = val % 360;
    if (val < 0) {
        val += 360;
    }
    return val;
};
var tmod2 = function(val) {
    val = val % 600;
    if (val < 0) {
        val += 600;
    }
    return val;
};
background(0);
var drawstars = function() {
    pushMatrix();
    pushStyle();
    resetMatrix();
    background(0);
    noStroke();
    fill(255);
    translate(200, 200);
    rotate(-rotation);
    for (var i = 0; i < 100; i ++) {
        var x = tmod2((stars[i].x + -position.x * shift) / stars[i].depth) - 300;
        var y = tmod2((stars[i].y + position.y * shift) / stars[i].depth) - 300;
        var size = (1 / stars[i].depth) * 20;
        ellipse(x, y, size, size);
    }
    popStyle();
    popMatrix();
};
var drawship = function() {
    pushMatrix();
    pushStyle();
    resetMatrix();
    translate(200, 200);
    //rotate(rotation);
    noStroke();
    fill(255, 127, 0);
    quad(-20, -10, 20, -10, 40, 10, -40, 10);
    fill(127);
    rect(-10, -40, 20, 50);
    triangle(-10, -40, -10, -10, -20, -10);
    triangle(10, -40, 10, -10, 20, -10);
    triangle(-10, -40, 10, -40, 0, -50);
    fill(255, 0, 0);
    triangle(-8, -42, 8, -42, 0, -48);
    fill(0);
    triangle(-6, -44, 8, -44, 0, -46);
    popMatrix();
    popStyle();
};
var update = function() {
    if (keyIsPressed) {
        if (keyCode === UP) {
            acceleration.x = cos(-rotation + 90) * power;
            acceleration.y = sin(-rotation + 90) * power;
        } else if (keyCode === DOWN) {
            acceleration.x = -cos(-rotation + 90) * power;
            acceleration.y = -sin(-rotation + 90) * power;
        } else if (keyCode === LEFT) {
            rotation -= 1;
        } else if (keyCode === RIGHT) {
            rotation += 1;
        } else if (key.toString() === 'b') {
            if (velocity.mag() > 0.1) {
                velocity.mult(0.99);
            } else {
                velocity.set(0, 0);
            }
        } else if (key.toString() === 'r') {
            position.set(0, 0);
            velocity.set(0, 0);
            acceleration.set(0, 0);
            rotation = 0;
        }
    } else {
        acceleration.x = 0;
        acceleration.y = 0;
    }
    if (! uselight) {
        velocity.add(acceleration);
    } else {
        acceleration.mult((lightspeed - velocity.mag()) / lightspeed);
        velocity.add(acceleration);
    }
    position.add(velocity);
    rotation = tmod(rotation + 180) - 180;
};
var nor = createFont('calibri', 12);
var hea = createFont('calibri', 30);
draw = function() {
    //background(0);
    update();
    drawstars();
    drawship();
    noStroke();
    fill(255);
    rect(400, 0, 400, 400);
    fill(0);
    textFont(hea);
    text('Precieved Stats:', 405, 27);
    textFont(nor);
    text('Ship Position:\nX: ' + position.x.toFixed(3) + '\nY: ' + position.y.toFixed(3) + '\nT: ' + position.mag().toFixed(3), 405, 43);
    text('Ship Velocity:\nX: ' + velocity.x.toFixed(3) + '\nY: ' + velocity.y.toFixed(3) + '\nT: ' + velocity.mag().toFixed(3), 505, 43);
    text('Ship Acceleration:\nX: ' + acceleration.x.toFixed(3) + '\nY: ' + acceleration.y.toFixed(3) + '\nT: ' + acceleration.mag().toFixed(3), 605, 43);
    text('Ship Rotation: ' + rotation.toFixed(0), 705, 43);
};