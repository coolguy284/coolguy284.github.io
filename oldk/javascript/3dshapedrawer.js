var permap = function(x, y, z) {
    return [x / z, y / z];
};
var cube = function(x, y, z, xd, yd, zd, facecolor) {
    var hxd = xd / 2;
    var hyd = yd / 2;
    var hzd = zd / 2;
    var vertices = [[x - hxd, y + hyd, z - hzd], [x + hxd, y + hyd, z - hzd], [x - hxd, y + hyd, z + hzd], [x + hxd, y + hyd, z + hzd], [x - hxd, y - hyd, z - hzd], [x + hxd, y - hyd, z - hzd], [x - hxd, y - hyd, z + hzd], [x + hxd, y - hyd, z + hzd]];
    var edges = [[0, 1], [2, 3], [0, 2], [1, 3], [4, 5], [6, 7], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
    var faces;
    if (vertices[0][1] < 0 && y < 0) {
        faces = [[1, 3, 7, 5], [0, 1, 3, 2], [0, 1, 5, 4]];
    } else if (x < 0 && y === 0) {
        faces = [];
    } else if (x < 0 && y > 0) {
        faces = [];
    } else if (x === 0 && y < 0) {
        faces = [];
    } else if (x === 0 && y === 0) {
        faces = [];
    } else if (x === 0 && y > 0) {
        faces = [];
    } else if (x > 0 && y < 0) {
        faces = [];
    } else if (x > 0 && y === 0) {
        faces = [];
    } else if (x > 0 && y > 0) {
        faces = [];
    }
    if (faces === []) {
        faces = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    }
    for (var i = 0; i < edges.length; i ++) {
        var p1s = permap(vertices[edges[i][0]][0], vertices[edges[i][0]][1], vertices[edges[i][0]][2]);
        var p2s = permap(vertices[edges[i][1]][0], vertices[edges[i][1]][1], vertices[edges[i][1]][2]);
        var xp1 = p1s[0], yp1 = p1s[1], xp2 = p2s[0], yp2 = p2s[1];
        line(xp1, yp1, xp2, yp2);
    }//*
    for (var i = 0; i < faces.length; i ++) {
        fill(facecolor);
        var p1s = permap(vertices[faces[i][0]][0], vertices[faces[i][0]][1], vertices[faces[i][0]][2]);
        var p2s = permap(vertices[faces[i][1]][0], vertices[faces[i][1]][1], vertices[faces[i][1]][2]);
        var p3s = permap(vertices[faces[i][2]][0], vertices[faces[i][2]][1], vertices[faces[i][2]][2]);
        var p4s = permap(vertices[faces[i][3]][0], vertices[faces[i][3]][1], vertices[faces[i][3]][2]);
        var xp1 = p1s[0], yp1 = p1s[1], xp2 = p2s[0], yp2 = p2s[1], xp3 = p3s[0], yp3 = p3s[1], xp4 = p4s[0], yp4 = p4s[1];
        quad(xp1, yp1, xp2, yp2, xp3, yp3, xp4, yp4);
    }//*/
};
draw = function() {
    background(255);
    pushMatrix();
    translate(200, 200);
    var smX = mouseX * 4 - 800;
    var smY = mouseY * 4 - 800;
    cube(smX, smY, 5, 400, 400, 1, color(255, 0, 0));
    popMatrix();
};