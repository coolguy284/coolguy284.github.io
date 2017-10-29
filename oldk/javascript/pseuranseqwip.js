var pseudo = function(seed) {
    var length = seed.length;
    var square = sq(seed);
    var sqlength = square.length;
    var outputval1 = square[round(sqlength / 2) - round(length / 2)];
    var outputval2 = square[round(sqlength / 2) + round(length / 2)];
    var difference = (round(sqlength / 2) + round(length / 2)) - (round(sqlength / 2) - round(length / 2));
    var output = "";
    for (var i = 0; i < difference; i ++) {
        output = output + square[i + outputval1];
    }
    return output;
};
var randomstring = [];
fill(0, 0, 0);
draw = function() {
    if (randomstring.length < 255) {
        background(255, 255, 255);
        randomstring.push(pseudo(32));
        text(randomstring, 10, 10, 380, 380);
    }
};
