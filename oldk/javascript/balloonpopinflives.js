/* If you have problems in understanding the code (or the game), feel free to ask me */

/**
    BALLOON POP!
*/

/**
    This was once a lame program sitting in my programs library,
    that did nothing but draw a static colorless shuriken.
    I then decided to take it and develop it into a game!
*/

/*
    Created By : Piyush
*/

scale(width/400, height/400);

    /* Global variables */
var screen = 0;
var Delay = 40, DelayPnt = Delay, Speed = 5;
var ColorMode = 0;
var Difficulty = 0;     // 0:Easy, 1:Hard
var Paused = 0;         // 0:Paused, 1:Not Paused
var Score = 0;
var PauseCtr = 0;       // Pause Counter
var W = 400, H = 400;   // Expected Canvas Width, Height (These variables are important for the program to draw correctly in any canvas size)
var mouse_X, mouse_Y;   // The custom mouse_X, and mouse_Y variables (In a scaled up canvas, the regular mouseX and mouseY variables do not work properly. See the setMouseXY() function to know how these are calculated [Line No. 79]).
var ang = 0;            // Angle of rotation of the 'shuriken'
var count = 0;          // Custom program counter. Starts increasing as soon as the game starts (Very critical variable)
var Balloons = [];      // Stores the data of balloons. This is an array of 'Balloon' objects

    /* Function Declarations */
var mouseClickedCopy;           // [Line no. 456] Copy of mouseClicked() function
var setMouseXY;                 // [79] Sets up the mouse_X and mouse_Y variables
var drawBalloon;                // [84] Draws a balloon
var setBalloons;                // [121] Manages Balloon object
var putBalloons;                // [141] Puts the balloons based on the values in Balloons[] array
var Collision;                  // [151] Detects Collision
var GameOver;                   // [170] Draws the Game Over screen
var LeaderBoard;                // [209] Draws the Leaderboard
var Instructions;               // [268] Draws the 'Instructions' screen
var Title;                      // [313] Draws the Title screen
var drawBG;                     // [380] Draws the background (clouds)


    /* The Balloon object */
var Balloon = function(x, y, PoppedTime, type){
    this.x = x;
    this.y = y;
    this.PoppedTime = PoppedTime;
    this.type = type;
};

    /* Rest of the program */
mouseClicked = function(){
    if(mouseButton === CENTER){     // Pressing the middle-mouse button pauses/resumes the game
        if(!Paused){
            Paused = 1;
            ++PauseCtr;
        }
        else{Paused = 0;}
    }
    else if(!Paused){
        ColorMode = (ColorMode === 0) ? 1 : 0;
    }
};

keyPressed = function(){
    if(keyCode === 32){             // Pressing the space pauses/resumes the game
        if(!Paused){
            Paused = 1;
            ++PauseCtr;
        }
        else{Paused = 0;}
    }
    if(keyCode === 16){
        if(!Paused){
            ColorMode = (ColorMode === 0) ? 1 : 0;
        }
    }
};

setMouseXY = function(){
    mouse_X = mouseX * 400 / width;
    mouse_Y = mouseY * 400 / height;
};

drawBalloon = function(x, y, type){
    pushMatrix();
    if(type >= 2){      // Giant balloon (scaling)
        scale(2, 2);
        x /= 2;
        y /= 2;
        type -= 2;
    }

    beginShape();

    if(type === 0){
        fill(255, 30, 30);          // Red balloon
    }
    else{
        fill(50, 80, 255);          // Blue balloon
    }
    
    vertex(x, y + 15);
    bezierVertex(x - 50, y - 35, x + 50, y - 35, x, y + 15);                // Balloon surface
    endShape();

    noFill();
    bezier(x, y + 15, x - 20 * sin(ang), y + 33, x + 20 * sin(ang+30), y + 35, x - 3 * sin(ang+90), y + 45);        // Thread
    
    if(type === 0){         // Gleam
        fill(255, 90, 90);
    }
    else{
        fill(80, 100, 255);
    }
    noStroke();
    ellipse(x-7, y-10, 8, 15);
    stroke(0, 0, 0);
    popMatrix();
};

setBalloons = function(){
    if(count > DelayPnt){
        Balloons.push(new Balloon(random(0, 401)|0 , H+45 , -1, random(0, 2)|0 + ((random(0, 41) <= 1)? 2 : 0)));   // Inserts properties of new balloons
        DelayPnt += Delay;      // These two variables help create the time interval between the balloons.

        if(Delay >= 18){
            Delay *= 0.99;
        }
    }
    for(var i=0 ; i<Balloons.length ; ++i){
        if(Balloons[i].y <= -40){           // If the balloon goes off screen (far up)
            Balloons.splice(i, 1);          // Removes that particular balloon
            if(Difficulty !== 0){           // However in hard mode the game should be over
                count = 0;                  // count should be zero for the fading to occur
                draw = GameOver;            // The game is over
            }
        }
    }
};

putBalloons = function(){
    for(var i=0 ; i<Balloons.length ; ++i){
        stroke(0, 0, 0);
        strokeWeight(1);
        drawBalloon(Balloons[i].x, Balloons[i].y, Balloons[i].type);        // Draws balloon using the Balloons[] array
        Balloons[i].y -= Speed|0;       // This makes the balloons go up
        Speed += 0.00002;
    }
};

Collision = function(){
    for(var i=0 ; i<Balloons.length ; ++i){
        if(dist(mouse_X, mouse_Y, Balloons[i].x, Balloons[i].y) <= 50){     // If the distance between the centre of the balloon and the centre of shuriken is less than 50, there is a collision
            if(ColorMode === Balloons[i].type || ColorMode === Balloons[i].type-2){     // If the color of shuriken is same as that of the balloon hit
                if(Balloons[i].type >= 2){      // If it is a giant balloon
                    Score += 1000    ;
                }
                Balloons.splice(i, 1);          // Remove (Pop) the balloon
                Score += 10;
            }
            else{           // (If the colors are not the same)
                Balloons.splice(i, 1);
            }
        }
    }
};

GameOver = function(){
    if(count <= 20){
        fill(0, 0, 0, 40);              // A black transparent color
        rect(0, 0, W, H);               // Covers the whole canvas with a black transparent rectangle (continuously, hence making the black color darker and giving a fading effect)
        ++count;
    }
    else{
        background(0, 0, 0);

        textAlign(CENTER, CENTER);
        textFont(createFont("Sans Serif"));

        if(Difficulty === 0){           // On easy mode, the 'Game Over' screen is blue in color
            fill(0, 0, 40);
            stroke(40, 80, 255);
        }
        else{                           // On hard mode, the 'Game Over' screen is red in color
            fill(40, 0, 0);
            stroke(255, 40, 40);
        }
        strokeWeight(4);
        rect(0, 20, W, H-40);           // Dark blue/red rectangle spanning the complete width
        if(Difficulty === 0){
            fill(40, 80, 255);
        }
        else{
            fill(255, 40, 40);
        }

        textSize(50);
        text("GAME OVER", W/2, 100);
        textSize(35);
        text((Difficulty === 0) ? "(Easy Mode)" : "(Hard Mode)", W/2, 160);
        text("Score : " + Score, W/2, 230);
        text("Times Paused : " + PauseCtr, W/2, 280);
        text("Thank you for playing!", W/2, 350);
    }
};

LeaderBoard = function(){
    background(0, 0, 0);

    pushMatrix();
    scale(4, 4);
    drawBalloon(300/4, 250/4, 0);           // The balloons in the background
    drawBalloon(100/4, 250/4, 1);
    popMatrix();

    fill(0, 0, 0, 220);                     // A black, 15% transparent color
    noStroke();
    rect(0, 0, W, H);                       // ^ Covers the whole canvas with that color, hence making the balloons in the backgound darker and "hidden"

    fill(50, 200, 50);
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont(createFont("Consolas"));

    text("LEADERBOARD", W/2, 40);
    textSize(25);
    text("(Click to Continue)", W/2, H-40);

    textAlign(LEFT, CENTER);
    fill(40, 100, 255);
    text("Easy Mode", 10, 90);

    textSize(15);
    text("1. Sbayley13 - 1160", 10, 120);
    text("2. ---", 10, 140);
    text("3. ---", 10, 160);
    text("4. ---", 10, 180);
    text("5. ---", 10, 200);
    text("6. ---", 10, 220);
    text("7. ---", 10, 240);
    text("8. ---", 10, 260);
    text("9. ---", 10, 280);
    text("10. ---", 10, 300);

    fill(200, 40, 40);
    textSize(25);
    text("Hard Mode", W/2 + 10, 90);

    textSize(15);

    text("1. Sbayley13 - 710", W/2 + 10, 120);
    text("2. THEG∆MERM∆GE - 570", W/2 + 10, 140);
    text("3. ℜℯყℜѻմᎿ - 250", W/2 + 10, 160);
    text("4. ---", W/2 + 10, 180);
    text("5. ---", W/2 + 10, 200);
    text("6. ---", W/2 + 10, 220);
    text("7. ---", W/2 + 10, 240);
    text("8. ---", W/2 + 10, 260);
    text("9. ---", W/2 + 10, 280);
    text("10. ---", W/2 + 10, 300);

    mouseClicked = function(){
        Title();
    };
};

Instructions = function(){
    var ins;

    stroke(0, 0, 0);
    strokeWeight(1);
    background(100, 220, 255);

    pushMatrix();
    scale(4, 4);
    drawBalloon(300/4, 150/4, 0);       // Balloons in the background
    drawBalloon(100/4, 200/4, 1);
    popMatrix();

    fill(100, 220, 255, 200);           // Same as in LeaderBoard(), but sky-blueish
    noStroke();
    rect(0, 0, W, H);

    fill(0, 0, 0);

    textSize(30);
    text("Instructions", W/2, 20);

    textAlign(CENTER, BASELINE);
    textSize(16);
    ins =  "The objective of this game is to pop as many\n";
    ins += "balloons as possible using your, umm.. shuriken?..\n";
    ins += "that you control with your mouse.\n\n";
    ins += "There are 2 types of balloons : red and blue.\n";
    ins += "Red balloons can only be popped using a red\n";
    ins += "shuriken. Same applies to blue balloons. If\n";
    ins += "a balloon is popped with the wrong shuriken,\n";
    ins += "the game is over. (You can switch between\n";
    ins += "the two shurikens by clicking, or by hitting the\n";
    ins += "shift key. The middle mouse button and Space key\n";
    ins += "pause the game).\n\n";
    ins += "You can avoid balloons in Easy mode, but in\n";
    ins += "Hard mode, you must pop every single balloon\n";
    ins += "that appears.";
    text(ins, W/2, 50);

    mouseClicked = function(){
        stroke(0, 0, 0);
        Title();
    };
};

Title = function(){
    background(100, 220, 255);
    stroke(0, 0, 0);
    strokeWeight(1);

    pushMatrix();
    scale(4, 4);
    drawBalloon(300/4*400/width, 150/4*400/height, 0);      // Balloons in the background
    drawBalloon(100/4*400/width, 200/4*400/height, 1);
    popMatrix();

    fill(100, 220, 255, 180);           // Same as in LeaderBoard(), but sky-blueish
    noStroke();
    rect(0, 0, W, H);

    textAlign(CENTER, CENTER);
    textFont(createFont("Sans Serif"));

    textSize(80);

    fill(0, 80, 180);
    text("BALLOON\nPOP!", W/2-5, 100-5);
    fill(0, 20, 180, 60);
    text("▒▒▒▒▒▒▒\n▒▒▒▒", W/2, 100);
    
    strokeWeight(3);
    stroke(20, 20, 255);
    fill(80, 80, 255);
    rect(W/2 - 130, 220, 120, 60);          // Easy mode button
    stroke(255, 20, 20);
    fill(255, 80, 80);
    rect(W/2 + 10, 220, 120, 60);           // Hard mode button
    stroke(20, 150, 20);
    fill(80, 150, 80);
    rect(W/2 - 130, 300, 120, 60);          // Instructions button
    rect(W/2 + 10, 300, 120, 60);           // High-Scores button

    textSize(20);
    fill(0, 0, 0);
    text("Easy Mode", W/2-70, 250);
    text("Hard Mode", W/2+70, 250);
    text("Instructions", W/2-70, 330);
    text("High-Scores", W/2+70, 330);
    textSize(15);
    text("Created By : Piyush", W/2, 382);

    mouseClicked = function(){
        stroke(0, 0, 0);
        if(mouse_X >= W/2 - 130 && mouse_X <= W/2 - 10 && mouse_Y >= 220 && mouse_Y <= 280){
            Difficulty = 0;                 // Easy Mode
            screen = 1;                     // Starts the game
            mouseClicked = mouseClickedCopy;
        }
        else if(mouse_X >= W/2 + 10 && mouse_X <= W/2 + 130 && mouse_Y >= 220 && mouse_Y <= 280){
            Difficulty = 1;                 // Hard Mode
            screen = 1;
            mouseClicked = mouseClickedCopy;
        }
        else if(mouse_X >= W/2 - 130 && mouse_X <= W/2 - 10 && mouse_Y >= 300 && mouse_Y <= 360){
            Instructions();
        }
        else if(mouse_X >= W/2 + 10 && mouse_X <= W/2 + 130 && mouse_Y >= 300 && mouse_Y <= 360){
            LeaderBoard();
        }
    };
};

drawBG = function(){
    background(100, 220, 255);

    noStroke();
    fill(255, 255, 255);
    ellipse(120, 120, 100, 80);         // Top-Left cloud
    ellipse(160, 140, 100, 80);
    ellipse(100, 160, 100, 80);

    ellipse(270, 270, 100, 80);         // Bottom-Right cloud
    ellipse(310, 290, 100, 80);
    ellipse(250, 310, 100, 80);
};

/**/
draw = function() {
    setMouseXY();
    if(!Paused && screen){
        drawBG();

        setBalloons();
        putBalloons();
        Collision();
    
        if(ColorMode === 0){        // If it is to be a Red shuriken
            fill(200, 50, 10);
        }
        else{                       // else a blue shuriken
            fill(10, 50, 200);
        }
        strokeWeight(1);
        stroke(0, 0, 0);
    
        pushMatrix();
        // These two translate() calls make the shuriken rotate around its center (mouse) instead of the canvas origin.
        translate(mouse_X, mouse_Y);
        rotate(ang);
        translate(-mouse_X, -mouse_Y);
        /*
            This code:

                translate(40, 30);
                rotate(30);
                translate(-40, -30);
            
            will rotate the canvas 30 degrees around the point (40, 30) instead of the canvas origin (0, 0).
        */
    
        beginShape();
        vertex(mouse_X, mouse_Y-45);
        bezierVertex(mouse_X-80, mouse_Y-15, mouse_X+50, mouse_Y+15, mouse_X, mouse_Y+45);      // Shuriken
        bezierVertex(mouse_X+80, mouse_Y+15, mouse_X-50, mouse_Y-15, mouse_X, mouse_Y-45);
        endShape();
    
        pushMatrix();
        translate(mouse_X, mouse_Y);
        rotate(90);
        translate(-mouse_X, -mouse_Y);
        beginShape();
        vertex(mouse_X, mouse_Y-45);
        bezierVertex(mouse_X-80, mouse_Y-15, mouse_X+50, mouse_Y+15, mouse_X, mouse_Y+45);
        bezierVertex(mouse_X+80, mouse_Y+15, mouse_X-50, mouse_Y-15, mouse_X, mouse_Y-45);
        endShape();
        popMatrix();
        popMatrix();
        
        fill(0, 0, 0);
        textSize(20);
        text(Score, 20, 20);
    
        ang += 10;
        ++count;
    }
};
//*/

mouseClickedCopy = mouseClicked;        // Makes a copy of the original mouseClicked() function before starting the program
Title();
