var rotf = 0;
rectMode(CENTER);
draw = function() {
    background(255, 255, 255);
    pushMatrix();
    fill(255, 255, 255);
    translate(mouseX, mouseY);
    rotate(rotf);
    rect(0, 0, 50, 10);
    /*
    rotate(-rotf);
    rotate(rotf + 45);
    rect(0, 0, 200, 10);
    rotate(-rotf);
    rotate(rotf + 45);
    rect(0, 0, 200, 10);
    rotate(-rotf);
    rotate(rotf + 45);
    rect(0, 0, 200, 10);
    fill(0, 0, 0);
    */
    ellipse(0, 0, 10, 10);
    popMatrix();
    rotf += 5;
};
