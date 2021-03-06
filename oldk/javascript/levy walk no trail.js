var monteCarlo = function() {
    while (true) {
        var r1 = random(1);
        var probability = r1;
        var r2 = random(1);
        if (r2 > probability) {
            return r1;
        }
    }
};

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    var stepSize = monteCarlo()*10;
 
    var xStepSize = random(-stepSize, stepSize);
    var yStepSize = random(-stepSize, stepSize);
 
    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new Walker();

var draw = function() {
    background(255, 255, 255);
    w.walk();
    w.display();
};
