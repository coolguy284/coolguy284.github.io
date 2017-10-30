
var pg = createGraphics(400, 400, P3D);
var fov = PI/3.0;
var cameraZ = (height/2.0) / tan(fov/2.0);
pg.background(0);
pg.directionalLight(0, 255, 255, 1, 0, 0);
pg.perspective(fov, width/height, cameraZ/10.0, cameraZ*10.0);
pg.translate(50, 50, 0);
pg.rotateX(-PI/6);
pg.rotateY(PI/3);
pg.box(45);
image(pg, 0, 0);