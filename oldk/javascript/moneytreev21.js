var onplwf = function(mtval) {
    switch (mtval) {
        case 0:
            return "";
        case 1:
            return "-one";
        case 2:
            return "-two";
        case 3:
            return "-three";
        case 4:
            return "-four";
        case 5:
            return "-five";
        case 6:
            return "-six";
        case 7:
            return "-seven";
        case 8:
            return "-eight";
        case 9:
            return "-nine";
    }
};
var teplwf = function(mtval) {
    var outpute = "";
    if (mtval < 20) {
        switch (mtval) {
            case 0:
                outpute += "";
                break;
            case 1:
                outpute += " one";
                break;
            case 2:
                outpute += " two";
                break;
            case 3:
                outpute += " three";
                break;
            case 4:
                outpute += " four";
                break;
            case 5:
                outpute += " five";
                break;
            case 6:
                outpute += " six";
                break;
            case 7:
                outpute += " seven";
                break;
            case 8:
                outpute += " eight";
                break;
            case 9:
                outpute += " nine";
                break;
            case 10:
                outpute += " ten";
                break;
            case 11:
                outpute += " eleven";
                break;
            case 12:
                outpute += " twelve";
                break;
            case 13:
                outpute += " thirteen";
                break;
            case 14:
                outpute += " fourteen";
                break;
            case 15:
                outpute += " fifteen";
                break;
            case 16:
                outpute += " sixteen";
                break;
            case 17:
                outpute += " seventeen";
                break;
            case 18:
                outpute += " eighteen";
                break;
            case 19:
                outpute += " nineteen";
                break;
        }
    } else if (mtval < 100) {
        if (mtval < 30) {
            outpute += " twenty" + onplwf(mtval % 10);
        } else if (mtval < 40) {
            outpute += " thirty" + onplwf(mtval % 10);
        } else if (mtval < 50) {
            outpute += " fourty" + onplwf(mtval % 10);
        } else if (mtval < 60) {
            outpute += " fifty" + onplwf(mtval % 10);
        } else if (mtval < 70) {
            outpute += " sixty" + onplwf(mtval % 10);
        } else if (mtval < 80) {
            outpute += " seventy" + onplwf(mtval % 10);
        } else if (mtval < 90) {
            outpute += " eighty" + onplwf(mtval % 10);
        } else if (mtval < 100) {
            outpute += " ninty" + onplwf(mtval % 10);
        }
    }
    return outpute;
};
var wordh = function(value) {
    value = floor(value);
    var output = "";
    if (value < 20) {
        switch (value) {
            case 0:
                output += "";
                break;
            case 1:
                output += "one";
                break;
            case 2:
                output += "two";
                break;
            case 3:
                output += "three";
                break;
            case 4:
                output += "four";
                break;
            case 5:
                output += "five";
                break;
            case 6:
                output += "six";
                break;
            case 7:
                output += "seven";
                break;
            case 8:
                output += "eight";
                break;
            case 9:
                output += "nine";
                break;
            case 10:
                output += "ten";
                break;
            case 11:
                output += "eleven";
                break;
            case 12:
                output += "twelve";
                break;
            case 13:
                output += "thirteen";
                break;
            case 14:
                output += "fourteen";
                break;
            case 15:
                output += "fifteen";
                break;
            case 16:
                output += "sixteen";
                break;
            case 17:
                output += "seventeen";
                break;
            case 18:
                output += "eighteen";
                break;
            case 19:
                output += "nineteen";
                break;
        }
    } else if (value < 100) {
        if (value < 30) {
            output += "twenty" + onplwf(value % 10);
        } else if (value < 40) {
            output += "thirty" + onplwf(value % 10);
        } else if (value < 50) {
            output += "fourty" + onplwf(value % 10);
        } else if (value < 60) {
            output += "fifty" + onplwf(value % 10);
        } else if (value < 70) {
            output += "sixty" + onplwf(value % 10);
        } else if (value < 80) {
            output += "seventy" + onplwf(value % 10);
        } else if (value < 90) {
            output += "eighty" + onplwf(value % 10);
        } else if (value < 100) {
            output += "ninty" + onplwf(value % 10);
        }
    } else if (value < 1000) {
        if (value < 200) {
            output += "one hundred" + teplwf(value % 100);
        } else if (value < 300) {
            output += "two hundred" + teplwf(value % 100);
        } else if (value < 400) {
            output += "three hundred" + teplwf(value % 100);
        } else if (value < 500) {
            output += "four hundred" + teplwf(value % 100);
        } else if (value < 600) {
            output += "five hundred" + teplwf(value % 100);
        } else if (value < 700) {
            output += "six hundred" + teplwf(value % 100);
        } else if (value < 800) {
            output += "seven hundred" + teplwf(value % 100);
        } else if (value < 900) {
            output += "eight hundred" + teplwf(value % 100);
        } else if (value < 1000) {
            output += "nine hundred" + teplwf(value % 100);
        }
    } else if (value === 1000) {
        output += "one thousand";
    }
    return output;
};
var wordForm = function(value) {
    value = floor(value);
    var output = "";
    if (value < 0) {
        value = abs(value);
        output = "negative ";
    }
    if (value < 20) {
        switch (value) {
            case 0:
                output += "zero";
                break;
            case 1:
                output += "one";
                break;
            case 2:
                output += "two";
                break;
            case 3:
                output += "three";
                break;
            case 4:
                output += "four";
                break;
            case 5:
                output += "five";
                break;
            case 6:
                output += "six";
                break;
            case 7:
                output += "seven";
                break;
            case 8:
                output += "eight";
                break;
            case 9:
                output += "nine";
                break;
            case 10:
                output += "ten";
                break;
            case 11:
                output += "eleven";
                break;
            case 12:
                output += "twelve";
                break;
            case 13:
                output += "thirteen";
                break;
            case 14:
                output += "fourteen";
                break;
            case 15:
                output += "fifteen";
                break;
            case 16:
                output += "sixteen";
                break;
            case 17:
                output += "seventeen";
                break;
            case 18:
                output += "eighteen";
                break;
            case 19:
                output += "nineteen";
                break;
        }
    } else if (value < 100) {
        if (value < 30) {
            output += "twenty" + onplwf(value % 10);
        } else if (value < 40) {
            output += "thirty" + onplwf(value % 10);
        } else if (value < 50) {
            output += "fourty" + onplwf(value % 10);
        } else if (value < 60) {
            output += "fifty" + onplwf(value % 10);
        } else if (value < 70) {
            output += "sixty" + onplwf(value % 10);
        } else if (value < 80) {
            output += "seventy" + onplwf(value % 10);
        } else if (value < 90) {
            output += "eighty" + onplwf(value % 10);
        } else if (value < 100) {
            output += "ninty" + onplwf(value % 10);
        }
    } else if (value < 1000) {
        if (value < 200) {
            output += "one hundred" + teplwf(value % 100);
        } else if (value < 300) {
            output += "two hundred" + teplwf(value % 100);
        } else if (value < 400) {
            output += "three hundred" + teplwf(value % 100);
        } else if (value < 500) {
            output += "four hundred" + teplwf(value % 100);
        } else if (value < 600) {
            output += "five hundred" + teplwf(value % 100);
        } else if (value < 700) {
            output += "six hundred" + teplwf(value % 100);
        } else if (value < 800) {
            output += "seven hundred" + teplwf(value % 100);
        } else if (value < 900) {
            output += "eight hundred" + teplwf(value % 100);
        } else if (value < 1000) {
            output += "nine hundred" + teplwf(value % 100);
        }
    } else if (value < 1000000) {
        if (value / 1000 !== floor(value / 1000)) {
            output += wordh(floor(value / 1000)) + " thousand, " + wordh(value % 1000);
        } else {
            output += wordh(value / 1000) + " thousand";
        }
    } else if (value < 1000000000) {
        if (value / 1000000 !== floor(value / 1000000)) {
            if (value / 1000 !== floor(value / 1000)) {
                output += wordh(floor(value / 1000000)) + " million, " + wordh(floor(value / 1000) % 1000) + " thousand, " + wordh(value % 1000);
            } else {
                output += wordh(floor(value / 1000000)) + " million, " + wordh((value / 1000) % 1000) + " thousand";
            }
        } else {
            output += wordh(value / 1000000) + " million";
        }
    } else if (value < 1000000000000) {
        if (value / 1000000000 !== floor(value / 1000000000)) {
            if (value / 1000000 !== floor(value / 1000000)) {
                if (value / 1000 !== floor(value / 1000)) {
                    output += wordh(floor(value / 1000000000)) + " billion, " + wordh(floor(value / 1000000) % 1000) + " million, " + wordh(floor(value / 1000) % 1000) + " thousand, " + wordh(value % 1000);
                } else {
                    output += wordh(floor(value / 1000000000)) + " billion, " + wordh(floor(value / 1000000) % 1000) + " million, " + wordh(floor(value / 1000) % 1000) + " thousand";
                }
            } else {
                output += wordh(floor(value / 1000000000)) + " billion, " + wordh(floor(value / 1000000) % 1000) + " million";
            }
        } else {
            output += wordh(floor(value / 1000000000)) + " billion";
        }
    }
    return output;
};
textAlign(CENTER, CENTER);
draw = function() {
    var val = 19141121;
    background(255);
    fill(0);
    textSize(40);
    text("Standard Form", 200, 20);
    text("Word Form", 200, 100);
    textSize(20);
    text(val, 0, 0, 400, 100);
    text(wordForm(val), 0, 0, 400, 280);
};
/*
while (i < 201) {
    println(wordForm(i));
    i ++;
}
*/