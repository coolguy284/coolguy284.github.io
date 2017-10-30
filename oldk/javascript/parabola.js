//PARABOLA

frameCount = -1;

translate(200, 400);

scale(1, -1);

var run = function(val) {
    return pow(val / 10, floor(pow(10, 0.5)) - 1);
};

draw = function() {
    var pow1 = run(frameCount);
    var pow2 = run(-frameCount);
    var ppow1 = run(frameCount - 1);
    var ppow2 = run(-frameCount + 1);
    var len1 = frameCount;
    var len2 = -frameCount;
    var plen1 = frameCount - 1;
    var plen2 = -frameCount + 1;
    line(len1, pow1, plen1, ppow1);
    line(len2, pow2, plen2, ppow2);
};