var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    stroke(0, 0, 0);
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x, this.y,20,20);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    var choice = floor(random(4));
    if (choice === 0) {
        this.x+= 5;
    } else if (choice === 1) {
        this.x-= 5;
    } else if (choice === 2) {
        this.y+=5;
    } else {
        this.y-=5;
    } 
};

var w = new Walker();

var draw = function() {
    background(255, 255, 255);
    w.walk();
    w.display();
};
