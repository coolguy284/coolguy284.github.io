var px = [];
var py = [];
var vx = [];
var vy = [];
var numparticles = 50;
var sqeezeint = 10;
var sqeezef = 0.1;
var isRigid = true;
var ax = 0;
var ay = 0.1;
var bouncef = 0.5;
var drag = 0.01;
for (var i = 0; i++ < numparticles;) {
    px.push(random(0, width));
    py.push(random(0, height));
    vx.push(random(-10, 10));
    vy.push(random(-10, 10));
}
var draw = function() {
    background(255, 255, 255);
    for (var j = 0; j++ < numparticles;) {
        px[j] += vx[j];
        py[j] += vy[j];
        vx[j] += ax;
        vy[j] += ay;
        /*
        vx[j] += sq(-vx[j]) * (1 - drag);
        vy[j] += sq(-vy[j]) * (1 - drag);
        */
        ellipse(px[j], py[j], 10, 10);
        if (py[j] >= height-vy[j]-sqeezeint && vy[j] === abs(vy[j])) {
            vy[j] = -vy[j] * bouncef;
            py[j] = py[j] - 1;
        }
        if (px[j] >= width-vx[j]-sqeezeint && vx[j] === abs(vx[j])) {
            vx[j] = -vx[j] * bouncef;
            px[j] = px[j] - 1;
            
        }
        if (px[j] <= 0+vx[j]+sqeezeint && vx[j] !== abs(vx[j])) {
            vx[j] = -vx[j] * bouncef;
            px[j] = px[j] + 1;
        }
        if (py[j] <= 0+vy[j]+sqeezeint && vy[j] !== abs(vy[j])) {
            vy[j] = -vy[j] * bouncef;
            py[j] = py[j] + 1;
        }
        for (var i = 0; i < numparticles; i ++) {
            var appdist = dist(px[j], py[j], px[i], py[i]);
            var relatex = px[j] - px[i];
            var relatey = py[j] - py[i];
            if (appdist < sqeezeint && j !== i) {
                if (isRigid) {
                    vx[i] = -relatex * sqeezef;
                    vy[i] = -relatey * sqeezef;
                    vx[j] = relatex * sqeezef;
                    vx[j] = relatey * sqeezef;
                } else {
                    vx[i] += -relatex * sqeezef;
                    vy[i] += -relatey * sqeezef;
                    vx[j] += relatex * sqeezef;
                    vx[j] += relatey * sqeezef;
                }
            }
        }
    }
};