var drawRange = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t+0);
        var y = map(n, 0, 1, 0, height);
        rect(t*100, height-y, 1, y);
    }
};

drawRange();
