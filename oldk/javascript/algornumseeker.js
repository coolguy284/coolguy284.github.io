var tot = 100;
var guess = tot / 2;
var pguess = tot / 2;
var raval = floor(random(0, tot))+1;
fill(0, 0, 0);
draw = function() {
    if (guess !== raval) {
        text(guess, 10, 10 + frameCount * 10);
        if (guess > raval) {
            guess = round(guess/2);
        } else if (guess < raval) {
            guess = round((guess+guess)/2);
        }
    }
    pguess = guess;
};
