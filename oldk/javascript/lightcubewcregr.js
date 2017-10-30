var p3d = createGraphics(400, 400, P3D);
angleMode = "radians";
var sprite = function(img, cx, cy, sf, rot, mode) {
    mode = (mode === undefined) ? 1 : mode;
    if (mode === 1) {
        pushMatrix();
        pushStyle();
        imageMode(CENTER);
        translate(cx, cy);
        rotate(radians(rot));
        scale(sf);
        image(img, 0, 0);
        popStyle();
        popMatrix();
    }
};

p3d.background(0);
p3d.noStroke();
p3d.translate(width/2, height/2, 0);
p3d.pointLight(0, 0, 255, 12, 0, 100);
p3d.rotateX(radians(-45));
p3d.rotateY(radians(-45));
p3d.box(50);

var scalef = 4;
sprite(p3d, 200, 200, 1, 0);
