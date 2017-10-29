fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer < 2) {
    text("NOT YET", 176, 200);
}
else (answer < 3);{
    text("YES!", 176, 200);
}
