var x = 200,
    y = 50,
    frequency = 1,
    accuracy = 400,
    iterator = 100,
    type = "test",
    mode = "additive";

stroke(0);
line(0, 200, 400, 200);
line(200, 0, 200, 400);
translate(200, 200);
stroke(255, 0, 0);
var mod = function(val, modu) {
    if (modu === undefined) {
        if (val > 0) {
            return val % 1 - 1;
        } else {
            return val % 1;
        }
    } else {
        if (val > 0) {
            return val % modu - 1;
        } else {
            return val % modu;
        }
    }
};
if (mode === "additive") {
    if (type === "sine") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var ycord = sin(map(i, -x, x, 180, -180) * frequency) * y;
            var pycord = sin(map(i - a, -x, x, 180, -180) * frequency) * y;
            line(len, ycord, plen, pycord);
        }
    } else if (type === "square") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var ycord = 0;
            var pycord = 0;
            for (var mj = 0; mj < iterator; mj += 1) {
                var j = (mj * 2) + 1;
                ycord += (sin(map(i * j, -x, x, 180, -180) * frequency) * y) / j * 1.3;
                pycord += (sin(map((i - a) * j, -x, x, 180, -180) * frequency) * y) / j * 1.3;
            }
            line(len, ycord, plen, pycord);
        }
    } else if (type === "sawtooth") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var ycord = 0;
            var pycord = 0;
            for (var mj = 1; mj < iterator + 1; mj += 1) {
                var j = mj;
                ycord += (sin(map(i * j, -x, x, 180, -180) * frequency) * y) / -j * 0.65;
                pycord += (sin(map((i - a) * j, -x, x, 180, -180) * frequency) * y) / -j * 0.65;
            }
            line(len, ycord, plen, pycord);
        }
    } else if (type === "triangle") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var ycord = 0;
            var pycord = 0;
            for (var mj = 1; mj < (iterator * 2) + 1; mj += 1) {
                if (mj % 4 === 1) {
                    var j = mj * 2;
                    ycord += (sin(map(i * j / 2, -x, x, 180, -180) * frequency) * y) / sq(j) * 3.25;
                    pycord += (sin(map((i - a) * j / 2, -x, x, 180, -180) * frequency) * y) / sq(j) * 3.25;
                } else if (mj % 4 === 3) {
                    var j = mj * 2;
                    ycord += (sin(map(i * j / 2, -x, x, 180, -180) * frequency) * y) / -sq(j) * 3.25;
                    pycord += (sin(map((i - a) * j / 2, -x, x, 180, -180) * frequency) * y) / -sq(j) * 3.25;
                }
            }
            line(len, ycord, plen, pycord);
        }
    } else if (type === "inverse sawtooth") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var ycord = 0;
            var pycord = 0;
            for (var mj = 1; mj < iterator + 1; mj += 1) {
                var j = mj;
                ycord += (sin(map(i * j, -x, x, 180, -180) * frequency) * y) / j * 0.65;
                pycord += (sin(map((i - a) * j, -x, x, 180, -180) * frequency) * y) / j * 0.65;
            }
            line(len, ycord, plen, pycord);
        }
    } else if (type === "test") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var ycord = 0;
            var pycord = 0;
            for (var mj = 0; mj < iterator; mj += 1) {
                var j = (mj * 2) + 1 * noise(mj / 1000);
                ycord += (sin(map(i * j, -x, x, 180, -180) * frequency) * y) / j * 1.3;
                pycord += (sin(map((i - a) * j, -x, x, 180, -180) * frequency) * y) / j * 1.3;
            }
            line(len, ycord, plen, pycord);
        }
    }
} else if (mode === "true") {
    if (type === "sine") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var ycord = sin(map(i, -x, x, 180, -180) * frequency) * y;
            var pycord = sin(map(i - a, -x, x, 180, -180) * frequency) * y;
            line(len, ycord, plen, pycord);
        }
    } else if (type === "square") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var ycord;
            var pycord;
            ycord = sin(map(i, -x, x, 180, -180) * frequency) * y;
            pycord = sin(map(i - a, -x, x, 180, -180) * frequency) * y;
            if (ycord > 0) {
                ycord = y;
            } else if (ycord === 0) {
                ycord = 0;
            } else if (ycord < 0) {
                ycord = -y;
            }
            if (pycord > 0) {
                pycord = y;
            } else if (pycord === 0) {
                pycord = 0;
            } else if (pycord < 0) {
                pycord = -y;
            }
            if (y < 0) {
                ycord *= -1;
                pycord *= -1;
            }
            line(len, ycord, plen, pycord);
        }
    } else if (type === "sawtooth") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var mi = -i / 360 * frequency * 0.9;
            var ma = -a / 360;
            if (mi < 0.005) {
                var ycord = mod(mi) * y;
                var pycord = mod(mi - ma) * y;
            } else {
                var ycord = mod(mi) * y;
                var pycord = mod(mi - (-ma)) * y;
            }
            ycord = (ycord + y / 2) * 2;
            pycord = (pycord + y / 2) * 2;
            line(len, ycord, plen, pycord);
        }
    } else if (type === "triangle") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var mi = -i / 360 * frequency * 0.9;
            var ma = -a / 360;
            if (mi < 0.005) {
                var ycord = mod(mi) * y;
                var pycord = mod(mi - ma) * y;
            } else {
                var ycord = mod(mi) * y;
                var pycord = mod(mi - (-ma)) * y;
            }
            ycord = (abs(mod(mi, 4) - 2) - 4) * 40;
            pycord = (abs(mod(mi - ma, 4) - 2) - 4) * 40;
            ycord = (ycord + y / 2) * 2;
            pycord = (pycord + y / 2) * 2;
            line(len, ycord, plen, pycord);
        }
    } else if (type === "inverse sawtooth") {
        for (var i = -x; i < x + (x * 2) / accuracy; i += (x * 2) / accuracy) {
            var a = (x * 2) / accuracy;
            var len = i;
            var plen = i - a;
            var mi = -i / 360 * frequency * 0.9;
            var ma = -a / 360;
            if (mi < 0.005) {
                var ycord = mod(mi) * y;
                var pycord = mod(mi - ma) * y;
            } else {
                var ycord = mod(mi) * y;
                var pycord = mod(mi - (-ma)) * y;
            }
            ycord = (ycord + y / 2) * -2;
            pycord = (pycord + y / 2) * -2;
            line(len, ycord, plen, pycord);
        }
    }
}