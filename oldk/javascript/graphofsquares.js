var distancex = 133;
var distancey = 12.46;
fill(0, 0, 0);
for (var i = 0; i < height; i+=distancex) {
    line(i, 0, i, height);
}
for (var i = 0; i < width; i+=distancey) {
    line(0, i, width, i);
}
for (var i = 0; i < height/12.46; i++) {
    text(i + "*" + i + "= " + i*i, 10, i * 12.46);
    text((i+32) + "*" + (i+32) + "= " + (i+32)*(i+32), 143, i * 12.46);
    text((i+64) + "*" + (i+64) + "= " + (i+64)*(i+64), 276, i * 12.46);
}
