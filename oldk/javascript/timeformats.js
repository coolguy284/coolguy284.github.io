var dategeter = Date || (new Object.constructor("return Date;"))();
/*
var dategeter = function() {
    this.getDay = function() {
        return 1;
    };
    this.getMonth = function() {
        return 5;
    };
    this.getDate = function() {
        return 22;
    };
    this.getYear = function() {
        return 2015;
    };
    this.getHours = function() {
        return 0;
    };
    this.getMinutes = function() {
        return 39;
    };
    this.getSeconds = function() {
        return 12;
    };
    this.getMilliseconds = function() {
        return 089;
    };
    this.getTime = function() {
        return 1434991152090;
    };
};
*/
var exz = function(num) {
var strnum = num.toString();
var newnum;
if (strnum<10) {
newnum = "0" + strnum;
} else {
newnum = strnum;
}
return newnum;
};
var invexz = function(num) {
var strnum = num.toString();
var newnum;
if (strnum<10) {
newnum = "00" + strnum;
} else if (strnum<100) {
newnum = "0" + strnum;
} else {
newnum = strnum;
}
return newnum;
};
draw = function() {
    background(255);
    textAlign(CENTER, BASELINE);
    fill(0);
    textSize(31);
    text("Date and Time", 190, 100);
    textSize(12);
    var dayname;
    var monthname;
    switch (new dategeter().getDay()) {
        case 0:
            dayname = "Sunday";
            break;
        case 1:
            dayname = "Monday";
            break;
        case 2:
            dayname = "Tuesday";
            break;
        case 3:
            dayname = "Wednesday";
            break;
        case 4:
            dayname = "Thursday";
            break;
        case 5:
            dayname = "Friday";
            break;
        case 6:
            dayname = "Saturday";
            break;
    }
    switch (new dategeter().getMonth()) {
        case 0:
            monthname = "Janurary";
            break;
        case 1:
            monthname = "Feburary";
            break;
        case 2:
            monthname = "March";
            break;
        case 3:
            monthname = "April";
            break;
        case 4:
            monthname = "May";
            break;
        case 5:
            monthname = "June";
            break;
        case 6:
            monthname = "July";
            break;
        case 7:
            monthname = "August";
            break;
        case 8:
            monthname = "September";
            break;
        case 9:
            monthname = "October";
            break;
        case 10:
            monthname = "November";
            break;
        case 11:
            monthname = "December";
            break;
    }
    fill(0);
    var date = dayname + ", " + monthname + " " + (new dategeter().getDate()) + ", " + ((new dategeter().getYear()) + 1900);
    var miltime = exz(new dategeter().getHours()) + ":" + exz(new dategeter().getMinutes()) +":" + exz(new dategeter().getSeconds()) + "." + invexz(new dategeter().getMilliseconds());
    var ampm;
    var parse;
    if (new dategeter().getHours() < 12 && new dategeter().getHours() > -1) {
        ampm = "AM";
        if (new dategeter().getHours() !== 0) {
            parse = ((new dategeter().getHours() - 1) % 12) + 1;
        } else {
            parse = 12;
        }
    } else {
        ampm = "PM";
        parse = ((new dategeter().getHours() - 1) % 12) + 1;
    }
    var time = exz(parse) + ":" + exz(new dategeter().getMinutes()) + ":" + exz(new dategeter().getSeconds()) + "." + invexz(new dategeter().getMilliseconds()) + " " + ampm;
    var totaldate = date + " " + time;
    var mildate = date + " " + miltime;
    textAlign(CENTER, BASELINE);
    text("Military Time: " + mildate, 200, 176);
    text("Standard Time: " + totaldate, 200, 192);
    textSize(10);
    text("Date & Time: " + new dategeter(), 200, 208);
    textSize(12);
    text("TimeCode: " + new dategeter().getTime(), 200, 224);
};