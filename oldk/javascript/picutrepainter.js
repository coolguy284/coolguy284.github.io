var paintBrush = {
    x: 158,
    y: 267,
    img: getImage("cute/GemGreen")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

paintCanvas();
paintBrush.x=mouseX;
paintBrush.y=mouseY;

var mouseMoved = function() {
    paintBrush.x=mouseX;
    paintBrush.y=mouseY;
    paintCanvas();
};
