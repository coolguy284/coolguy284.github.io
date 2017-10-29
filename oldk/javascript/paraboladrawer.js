// draw the axes
stroke(148, 148, 148);
line(0, 200, 400, 200);
line(200, 0, 200, 400);

strokeWeight(2);
stroke(0, 173, 23);

var x = -200;

var draw = function() {
    // this caculates -(x/10)^2
    var pam = 5;
    var y = -pow(x / 10, 2);
    var yva = -pow((x-pam) / 10, 2);
    
    line(x + 200, y + 400, x + (200-pam) , yva + 400);
    x += pam;
};
