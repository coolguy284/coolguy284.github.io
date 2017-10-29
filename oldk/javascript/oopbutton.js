var Button = function(config) {
    this.x = config.x;
    this.y = config.y;
    this.w = config.w || 150;
    this.h = config.h || 100;
    this.text = config.text;
    this.size = config.size;
    this.r = config.r ;
    this.g = config.g ;
    this.b = config.b ;
    this.transperency = config.transperency;
};

Button.prototype.isInside = function() {
    if (mouseX > this.x && mouseY > this.y && mouseX < this.x + this.w && mouseY < this.y + this.h) {
        return true;
    } else {
        return false;
    }
};

Button.prototype.clickInside = function() {
    if (mouseX > this.x && mouseY > this.y && mouseX < this.x + this.w && mouseY < this.y + this.h && mouseIsPressed) {
        return true;
    } else {
        return false;
    }
};

Button.prototype.draw = function() {
    fill(this.r, this.g, this.b, this.transperency);
    stroke(0);
    rect(this.x, this.y, this.w, this.h);
    fill(0, 0, 0, this.transperency);
    textAlign(CENTER, CENTER);
    textSize(this.size);
    text(this.text, this.x, this.y, this.w, this.h);
    textSize(12);
    textAlign(CORNER, BASELINE);
};

var btn1 = new Button({
    x: 200,
    y: 200,
    w: 100,
    h: 50,
    r: 255,
    g: 0,
    b: 0,
    transperency: 255,
    size: 20,
    text: "Button",
});

draw = function() {
    background(255);
    btn1.draw();
    if (btn1.clickInside()) {
        textSize(12);
        text('The button labled "Button" is being pressed', 0, 10);
    }
};