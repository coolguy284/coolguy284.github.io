noStroke();
var sprite = function(img, x, y, rot) {
    pushMatrix();
    pushStyle();
    imageMode(CENTER);
    translate(x, y);
    rotate(rot);
    image(img, 0, 0);
    popStyle();
    popMatrix();
};
var objects = {};
fill(255, 0, 0);
rect(0, 10, 50, 40);
fill(0, 255, 0);
rect(10, 10, 30, 40);
fill(255, 255, 0);
rect(20, 10, 10, 40);
fill(255, 128, 0);
rect(10, 5, 30, 5);
fill(128);
rect(22.5, 0, 5, 5);
objects.present = {
    image: get(0, 0, 50, 50),
    w: 50,
    h: 50,
};
background(255);
var data = [];
var obj = function(val) {
    switch(val) {
        case 0:
            return objects.present;
        
    }
};
data.push([0, 200, 200, 0, 2, 3, 5]);
draw = function() {
    background(255);
    for (var i = 0; i < data.length; i ++) {
        var img = obj(data[i][0]).image;
        sprite(img, data[i][1], data[i][2], data[i][3]);
        data[i][1] += data[i][4];
        data[i][2] += data[i][5];
        data[i][3] += data[i][6];
        data[i][3] %= 360;
        if (data[i][1] > 300) {
            data[i][1] = 300;
            data[i][4] *= -1;
        } else if (data[i][2] > 300) {
            data[i][2] = 300;
            data[i][5] *= -1;
        } else if (data[i][1] < 100) {
            data[i][1] = 100;
            data[i][4] *= -1;
        } else if (data[i][2] < 100) {
            data[i][2] = 100;
            data[i][5] *= -1;
        }
    }
};