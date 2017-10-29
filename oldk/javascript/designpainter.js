var drawellipse = function(mode, size, sides) {
    pushMatrix();
    translate(200, 200);
    if (mode === null) {mode = 4;}
    if (size === null) {size = 50;}
    if (mode === 3) {
        ellipse(-mouseX + 200, -mouseY + 200, size, size);
        ellipse(mouseX - 200, mouseY - 200, size, size);
        pushMatrix();
        scale(-1,1);
        ellipse(-mouseX + 200, -mouseY + 200, size, size);
        ellipse(mouseX - 200, mouseY - 200, size, size);
        popMatrix();
        pushMatrix();
        rotate(45);
        ellipse(-mouseX + 200, -mouseY + 200, size, size);
        ellipse(mouseX - 200, mouseY - 200, size, size);
        pushMatrix();
        scale(-1,1);
        ellipse(-mouseX + 200, -mouseY + 200, size, size);
        ellipse(mouseX - 200, mouseY - 200, size, size);
        popMatrix();
        popMatrix();
    } else if (mode === 4) {
        pushMatrix();
        for (var i = 0; i < 360; i += 360 / sides) {
            rotate(i);
            ellipse(mouseX - 200, mouseY - 200, size, size);
        }
        popMatrix();
    } else if (mode === 2) {
        ellipse(-mouseX + 200, -mouseY + 200, size, size);
        ellipse(mouseX - 200, mouseY - 200, size, size);
        pushMatrix();
        scale(-1,1);
        ellipse(-mouseX + 200, -mouseY + 200, size, size);
        ellipse(mouseX - 200, mouseY - 200, size, size);
        popMatrix();
    } else if (mode === 1) {
        ellipse(-mouseX + 200, -mouseY + 200, size, size);
        ellipse(mouseX - 200, mouseY - 200, size, size);
    } else if (mode === 0) {
        ellipse(mouseX - 200, mouseY - 200, size, size);
    } else if (mode === 5) {
        ellipse(mouseX - 200, mouseY - 200, size, size);
        ellipse(mouseY - 200, mouseX - 200, size, size);
    } else if (mode === 6) {} else {
        Program.assertEqual(1, 2);
    }
    popMatrix(); 
};
/*
for (var i = 0; i < 360; i += 360 / 256) {
    rotate(i);
    noFill();
    rect(0, 0, 100, 100);
    fill(0, 0, 0);
    //text("rotate", 10, 20);
}
*/
draw = function() {
    background(255, 255, 255);//comment this if you want to make a cool pattern
    drawellipse(0, 50, 8);
};
