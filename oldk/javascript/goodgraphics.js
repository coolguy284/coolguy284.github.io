var randomThing = function() {
    var thing = random(1, 7);
    var c = random(0, 2), j = random(0, 2);
    if (c < 1) {
        strokeCap(SQUARE);
    } else if (c < 2) {
        strokeCap(PROJECT);
    } else if (c < 3) {
        strokeCap(ROUND);
    }
    if (j < 1) {
        strokeJoin(MITER);
    } else if (j < 2) {
        strokeJoin(BEVEL);
    } else if (j < 3) {
        strokeJoin(ROUND);
    }
    if (thing < 2) {
        //line
        var sw = random(1, 20); 
        strokeWeight(sw);
        stroke(random(0, 255), random(0, 255), random(0, 255));
        line(random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw));
    } else if (thing < 3) {
        //rectangle
        var sw = random(1, 20); 
        strokeWeight(sw);
        fill(random(0, 255), random(0, 255), random(0, 255));
        stroke(random(0, 255), random(0, 255), random(0, 255));
        var x = random(sw, 399 - sw);
        var y = random(sw, 399 - sw);
        rect(x, y, random(sw, 399 - x - sw), random(sw, 399 - y - sw));
    } else if (thing < 4) {
        //point
        var sw = random(1, 20); 
        strokeWeight(sw);
        stroke(random(0, 255), random(0, 255), random(0, 255));
        point(random(sw, 399 - sw), random(sw, 399 - sw));
    } else if (thing < 5) {
        //ellipse
        var sw = random(1, 20); 
        strokeWeight(sw);
        fill(random(0, 255), random(0, 255), random(0, 255));
        stroke(random(0, 255), random(0, 255), random(0, 255));
        var size = random(1, 50);
        var x = random(sw + size / 2, 399 - sw - size / 2);
        var y = random(sw + size / 2, 399 - sw - size / 2);
        ellipse(x, y, size, size);
    } else if (thing < 6) {
        //triangle
        var sw = random(1, 20); 
        strokeWeight(sw);
        fill(random(0, 255), random(0, 255), random(0, 255));
        stroke(random(0, 255), random(0, 255), random(0, 255));
        triangle(random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw));
    } else if (thing < 7) {
        //quadrilaterial
        var sw = random(1, 20); 
        strokeWeight(sw);
        fill(random(0, 255), random(0, 255), random(0, 255));
        stroke(random(0, 255), random(0, 255), random(0, 255));
        quad(random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw), random(sw, 399 - sw));
    }
};

var genImage = function(mode, inv, gry, blr, invgry, invblr, gryblr) {
    if (mode === 0 || mode === undefined) {
        var imge = {
            original: get(0, 0, 400, 400),
        };
        filter(INVERT);
        imge.inverted = get(0, 0, 400, 400);
        image(imge.original, 0, 0);
        filter(GRAY);
        imge.grayscale = get(0, 0, 400, 400);
        image(imge.original, 0, 0);
        filter(BLUR);
        imge.blurred = get(0, 0, 400, 400);
        image(imge.original, 0, 0);
        return imge;
    }
};

var sprite = function(img, x, y, mode, wid, rot, hei) {
    pushStyle();
    pushMatrix();
    imageMode(CENTER);
    translate(x, y);
    if (rot !== undefined) {
        rotate(rot);
    }
    if (mode === undefined || mode === 0) {
        if (wid !== undefined && hei !== undefined){
            image(img, 0, 0, wid * img.width, hei * img.height);
        } else if (wid !== undefined && hei === undefined) {
            image(img, 0, 0, wid * img.width, wid * img.height);
        } else {
            image(img, 0, 0);
        }
    } else if (mode === 1) {
        if (wid !== undefined && hei !== undefined){
            image(img, 0, 0, wid, hei);
        } else if (wid !== undefined && hei === undefined) {
            image(img, 0, 0, wid, wid);
        } else {
            image(img, 0, 0);
        }
    }
    popMatrix();
    popStyle();
};

for (var i = 0; i < 100; i ++) {
    randomThing();
}

var ex = 200;

var img = get(-ex, -ex, 400 + (ex * 2), 400 + (ex * 2));
draw = function() {
    cursor(CROSS);
    background(255);
    var xcopy = (mouseX * 1) + ex;
    var ycopy = (mouseY * 1) + ex;
    sprite(img, 200, 200, 1, 800, 0, 800);
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(xcopy - 300, ycopy - 300, 200, 200);
    rect(xcopy - 250, ycopy - 250, 100, 100);
    rect(xcopy - 225, ycopy - 225, 50, 50);
    rect(xcopy - 212.5, ycopy - 212.5, 25, 25);
    copy(img, xcopy - 100, ycopy - 100, 200, 200, 400, 0, 200, 200);
    copy(img, xcopy - 50, ycopy - 50, 100, 100, 600, 0, 200, 200);
    copy(img, xcopy - 25, ycopy - 25, 50, 50, 400, 200, 200, 200);
    copy(img, xcopy - 12.5, ycopy - 12.5, 25, 25, 600, 200, 200, 200);
};