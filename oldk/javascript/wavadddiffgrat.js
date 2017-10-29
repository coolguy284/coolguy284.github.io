angleMode = "radians";
var count = 0;
var frequency = 1;
var amplitude = 30;
var accuracy = 50;
var ratio = 1;
var mode = 0;//0 = waves going in opposite directions, 1 = one wave going foward, 2 = one wave going backward
var run = 1;
var incamount = 0.5;
draw = function() {
    background(255);
    stroke(0);
    line(0, height / 2, width, height / 2);
    var shift = count / (360 / (PI * 2));
    if (mode === 0) {
        for(var i = 0; i < (PI * 2) * frequency; i += (PI / accuracy) * frequency) {
            var sin1 = sin(i - (shift * -1.5) % PI * 2);
            var sin2 = sin(i * ratio - (shift * -0.5) % PI * 2);
            var sin3 = sin(i * pow(ratio, 2) - (shift * 0.5) % PI * 2);
            var sin4 = sin(i * pow(ratio, 3) - (shift * 1.5) % PI * 2);
            var psin1 = sin(i - ((PI / accuracy) * frequency) - (shift * -1.5) % PI * 2);
            var psin2 = sin((i * ratio - ((PI / accuracy) * frequency * ratio)) - (shift * -0.5) % PI * 2);
            var psin3 = sin((i * pow(ratio, 2) - ((PI / accuracy) * frequency * ratio)) - (shift * 0.5)% PI * 2);
            var psin4 = sin((i * pow(ratio, 3) - ((PI / accuracy) * frequency * ratio)) - (shift * 1.5) % PI * 2);
            var len = (i / ((PI * 2) / width)) / frequency;
            var plen = ((i - ((PI / accuracy) * frequency)) / ((PI * 2) / width)) / frequency;
            var sum = sin1 + sin2 + sin3 + sin4;
            var psum = psin1 + psin2 + psin3 + psin4;
            var corsin1 = sin1 * amplitude + (height / 2);
            var corsin2 = sin2 * amplitude + (height / 2);
            var corsin3 = sin3 * amplitude + (height / 2);
            var corsin4 = sin4 * amplitude + (height / 2);
            var corpsin1 = psin1 * amplitude + (height / 2);
            var corpsin2 = psin2 * amplitude + (height / 2);
            var corpsin3 = psin3 * amplitude + (height / 2);
            var corpsin4 = psin4 * amplitude + (height / 2);
            var corsum = sum * amplitude + (height / 2);
            var corpsum = psum * amplitude + (height / 2);
            stroke(255, 0, 0);
            line(len, corsin1, plen, corpsin1);
            stroke(255, 255, 0);
            line(len, corsin2, plen, corpsin2);
            stroke(0, 255, 0);
            line(len, corsin3, plen, corpsin3);
            stroke(0, 255, 255);
            line(len, corsin4, plen, corpsin4);
            stroke(0, 0, 255);
            line(len, corsum, plen, corpsum);
        }
    } else if (mode === 1) {
        for(var i = 0; i < (PI * 2) * frequency; i += (PI / accuracy) * frequency) {
            var sin1 = sin(i + shift * 0 % PI * 2);
            var sin2 = sin(i * ratio - shift % PI * 2);
            var sin3 = sin(i * pow(ratio, 2) - (shift * 2) % PI * 2);
            var sin4 = sin(i * pow(ratio, 3) - (shift * 3) % PI * 2);
            var psin1 = sin(i - ((PI / accuracy) * frequency) + shift * 0 % PI * 2);
            var psin2 = sin((i * ratio - ((PI / accuracy) * frequency * ratio)) - shift % PI * 2);
            var psin3 = sin((i * pow(ratio, 2) - ((PI / accuracy) * frequency * ratio)) - (shift * 2)% PI * 2);
            var psin4 = sin((i * pow(ratio, 3) - ((PI / accuracy) * frequency * ratio)) - (shift * 3) % PI * 2);
            var len = (i / ((PI * 2) / width)) / frequency;
            var plen = ((i - ((PI / accuracy) * frequency)) / ((PI * 2) / width)) / frequency;
            var sum = sin1 + sin2 + sin3 + sin4;
            var psum = psin1 + psin2 + psin3 + psin4;
            var corsin1 = sin1 * amplitude + (height / 2);
            var corsin2 = sin2 * amplitude + (height / 2);
            var corsin3 = sin3 * amplitude + (height / 2);
            var corsin4 = sin4 * amplitude + (height / 2);
            var corpsin1 = psin1 * amplitude + (height / 2);
            var corpsin2 = psin2 * amplitude + (height / 2);
            var corpsin3 = psin3 * amplitude + (height / 2);
            var corpsin4 = psin4 * amplitude + (height / 2);
            var corsum = sum * amplitude + (height / 2);
            var corpsum = psum * amplitude + (height / 2);
            stroke(255, 0, 0);
            line(len, corsin1, plen, corpsin1);
            stroke(255, 255, 0);
            line(len, corsin2, plen, corpsin2);
            stroke(0, 255, 0);
            line(len, corsin3, plen, corpsin3);
            stroke(0, 255, 255);
            line(len, corsin4, plen, corpsin4);
            stroke(0, 0, 255);
            line(len, corsum, plen, corpsum);
        }
    } else if (mode === 2) {
        for(var i = 0; i < (PI * 2) * frequency; i += (PI / accuracy) * frequency) {
            var sin1 = sin(i + shift * 0 % PI * 2);
            var sin2 = sin(i * ratio + shift % PI * 2);
            var sin3 = sin(i * pow(ratio, 2) + (shift * 2) % PI * 2);
            var sin4 = sin(i * pow(ratio, 3) + (shift * 3) % PI * 2);
            var psin1 = sin(i - ((PI / accuracy) * frequency) + shift * 0 % PI * 2);
            var psin2 = sin((i * ratio - ((PI / accuracy) * frequency * ratio)) + shift % PI * 2);
            var psin3 = sin((i * pow(ratio, 2) - ((PI / accuracy) * frequency * ratio)) + (shift * 2)% PI * 2);
            var psin4 = sin((i * pow(ratio, 3) - ((PI / accuracy) * frequency * ratio)) + (shift * 3) % PI * 2);
            var len = (i / ((PI * 2) / width)) / frequency;
            var plen = ((i - ((PI / accuracy) * frequency)) / ((PI * 2) / width)) / frequency;
            var sum = sin1 + sin2 + sin3 + sin4;
            var psum = psin1 + psin2 + psin3 + psin4;
            var corsin1 = sin1 * amplitude + (height / 2);
            var corsin2 = sin2 * amplitude + (height / 2);
            var corsin3 = sin3 * amplitude + (height / 2);
            var corsin4 = sin4 * amplitude + (height / 2);
            var corpsin1 = psin1 * amplitude + (height / 2);
            var corpsin2 = psin2 * amplitude + (height / 2);
            var corpsin3 = psin3 * amplitude + (height / 2);
            var corpsin4 = psin4 * amplitude + (height / 2);
            var corsum = sum * amplitude + (height / 2);
            var corpsum = psum * amplitude + (height / 2);
            stroke(255, 0, 0);
            line(len, corsin1, plen, corpsin1);
            stroke(255, 255, 0);
            line(len, corsin2, plen, corpsin2);
            stroke(0, 255, 0);
            line(len, corsin3, plen, corpsin3);
            stroke(0, 255, 255);
            line(len, corsin4, plen, corpsin4);
            stroke(0, 0, 255);
            line(len, corsum, plen, corpsum);
        }
    }
    fill(0);
    text("Degrees of shift(mod 360): " + floor(((count % 360) - 180) * 10) / 10, 0, 12);
    text("Degrees of shift(mod 180): " + floor(((count % 180) - 90) * 10) / 10, 0, 24);
    text("Degrees of shift(mod 90): " + floor(((count % 90) - 45) * 10) / 10, 0, 36);
    text("Degrees of shift(mod 360 NONEG): " + floor(count % 360 * 10) / 10, 0, 48);
    text("Degrees of shift(mod 180 NONEG): " + floor(count % 180 * 10) / 10, 0, 60);
    text("Degrees of shift(mod 90 NONEG): " + floor(count % 90 * 10) / 10, 0, 72);
    //count = (mouseX * ((width / 360) / 2)) - (200 * ((width / 360) / 2));
    //count = 60;
    if (run) {
        count += incamount;
    }
    count %= 360;
};