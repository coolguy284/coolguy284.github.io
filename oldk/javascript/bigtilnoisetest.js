var noiseScale = 0.015;

noiseDetail(3, 0.6);
noStroke();

var tileNoise = function(tileWidth, tileHeight, tileSize) {
    var c1 = color(0, 0, 255);
    var c2 = color(255, 255, 255);
    
    var x, y, firstValue, finalValue, noiseVal, d;
    
    for (y = 0; y < tileHeight; y++) {
        firstValue = noise(0, y * noiseScale);
        finalValue = noise((tileWidth - 1) * noiseScale, y * noiseScale);
        d = (firstValue - finalValue) / (tileWidth - 1);
        
        for (x = 0; x < tileWidth; x++) {
            noiseVal = noise(x * noiseScale, y * noiseScale) + d * x;
            fill(lerpColor(c1, c2, noiseVal));
            rect(x * tileSize, y * tileSize, tileSize, tileSize);
            rect(200 + x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
};

var marbleEffect = function(tileWidth, tileHeight, tileSize, xof, yof) {
    // http://lodev.org/cgtutor/randomnoise.html
    
    var xPeriod = 5;
    var yPeriod = 10;
    var turbPower = 500;
    
    var c1 = color(27, 34, 125);
    var c2 = color(120, 192, 196);
    
    var x, y, z, turbulence;
    
    for (y = yof; y < tileHeight + yof; y++) {
        for (x = xof; x < tileWidth + xof; x++) {
            turbulence = x * xPeriod + y * yPeriod + turbPower * noise(x * noiseScale, y * noiseScale);
            //z = abs(sin(turbulence));
            z = 0.5 + sin(turbulence) / 2;
            fill(lerpColor(c1, c2, z));
            rect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
};

//tileNoise(100, 80, 2);

var panx = 0,
    pany = 0,
    xec = 20,
    yec = 20,
    sizet = 20;

loop();

draw = function() {
    if (pany <= yec - 1) {
        marbleEffect(sizet, sizet, 1, sizet * panx, sizet * pany);
    }
    if (pany < yec) {
        if (panx < xec - 1) {
            panx += 1;
        } else {
            pany += 1;
            panx = 0;
        }
    } else {
        noLoop();
    }
};
