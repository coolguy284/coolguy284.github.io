var g = createGraphics(400, 400, P3D);
g.noStroke();
//g.camera(100, 0, 0, 0, 0, 0);
draw = function() {
    g.background(0);
    g.directionalLight(0, 0, 255, 0, 0, -1);
    g.specular(102, 102, 102);
    //g.lights();
    g.pushMatrix();
    g.translate(200, 200);
    g.rotateX(-0.5);
    g.rotateY((frameCount % 625) / 10);
    g.box(60);
    g.popMatrix();
    g.noLights();
    image(g, 0, 0);
};