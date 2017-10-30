var data = [];
for (var i = 0; i < 20; i ++) {
    data.push([random(0, 1), random(0, 400), random(0, 400), random(-5, 5), random(-5, 5)]);
}

var drawobjects = function() {
    background(255);
    for (var i = 0; i < data.length; i ++) {
        for (var j = 0; j < data.length; j ++) {
            if (j !== i) {
                var totaldist = dist(data[j][2], data[j][3], data[i][2], data[i][3]);
                
            }
        }
        data[i][1] += data[i][3];
        data[i][2] += data[i][4];
    }
};