var Processing = {
    NL: function() {
        
    },
    XSL: function() {
        for (var i = 0; i < 5; i ++) {
            pushStyle();
            fill(0);
            textSize(10);
            text(pow(2, 64), width + 200, height + 200);
            popStyle();
        }
    },
    SL: function() {
        for (var i = 0; i < 20; i ++) {
            pushStyle();
            fill(0);
            textSize(10);
            text(pow(2, 64), width + 200, height + 200);
            popStyle();
        }
    },
    ML: function() {
        for (var i = 0; i < 100; i ++) {
            pushStyle();
            fill(0);
            textSize(10);
            text(pow(2, 64), width + 200, height + 200);
            popStyle();
        }
    },
    LL: function() {
        for (var i = 0; i < 500; i ++) {
            pushStyle();
            fill(0);
            textSize(10);
            text(pow(2, 64), width + 200, height + 200);
            popStyle();
        }
    },
    XLL: function() {
        for (var i = 0; i < 1000; i ++) {
            pushStyle();
            fill(0);
            textSize(10);
            text(pow(2, 64), width + 200, height + 200);
            popStyle();
        }
    },
    INFWHILE: function() {
        while (true) {
            pushStyle();
            fill(0);
            textSize(10);
            text(pow(2, 64), width + 200, height + 200);
            popStyle();
        }
    },
    HPRO: function() {
        pushStyle();
        fill(0);
        textSize(10);
        text(pow(2, 1024), width + 200, height + 200);
        popStyle();
    },
    CRASH: function() {
        return undefined;
    },
};

draw = function() {
    Processing.NL();
};