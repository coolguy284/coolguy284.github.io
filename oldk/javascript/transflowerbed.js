background(66, 156, 33);
noStroke();

var drawFlower = function(centerX, centerY) {
    var centerRadius = 30;
    var petalRadius = 20;
    var toPetal1 = centerRadius-5;
    var toPetal2 = centerRadius-13;
    fill(255, 0, 213);
    ellipse(centerX, centerY, centerRadius, centerRadius);
    fill(240, 206, 12);
    ellipse(centerX+toPetal1,centerY, petalRadius, petalRadius);
    ellipse(centerX-toPetal1,centerY, petalRadius, petalRadius);
    ellipse(centerX,centerY+toPetal1, petalRadius, petalRadius);
    ellipse(centerX,centerY-toPetal1, petalRadius, petalRadius);
    fill(192, 110, 224);
    ellipse(centerX+toPetal2, centerY+toPetal2, petalRadius, petalRadius);
    ellipse(centerX-toPetal2, centerY+toPetal2, petalRadius, petalRadius);
    ellipse(centerX+toPetal2, centerY-toPetal2, petalRadius, petalRadius);
    ellipse(centerX-toPetal2, centerY-toPetal2, petalRadius, petalRadius);
};
for(var i=0;i<=width;i+=(width/4)) {
    for(var j=0;j<=height;j+=(height/4)) {
        pushMatrix();
        translate(i,j);
        drawFlower(50,50);
        popMatrix();
    }
}
