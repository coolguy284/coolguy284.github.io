/*
IT IS NOW OUT!!!!
I was not planning to make any games anymore because of many people saying bad stuff of my last program...(click my name to see my programs!) but i just created a test but now turned out to be an awesome game!!! 

Do you remember speedy? he is my main special character of all my programs! but speedy lost his creator... play this game to help speedy!

This is my first ever killing game that has enemies. if you like it, be sure to smash that Vote button! hehe. i hope you like my new game!
heal=5
damage=2442
speed=338
healt=426
healp=1638
health=36176719
coin=84910
*//**
**********************
WARNING!
the text can be a little weird or not in the right place depending on different computers!
There can be up to 5 enemies appearing at once!(including the derpy boss)
**********************

THE EPIC LIST
1. get 10 votes? CHECK!

2. get 50 votes! CHECK!

3. get 100 votes!!! CHECK!!

4. get 200 votes!!!! YAY!!! CHECK!

5. GET 400 VOTES!

6. GET AN EPIC 700 VOTES LIKE ALL MY OTHER PROGRAMS!!

7. AWESOME 800 VOTES!!!

8. THE MOST AWESOMEST EPIC THING FOR ME. 1000 VOTES

9. 3rd place in the hot list CCHHEECCKK!

10. 2nd place in the hot list!! YUP!

11. FIRST PLACE IN THE HOT LIST!!!!! WTH!!! IN ONE DAY!!! CCHHEECCKK!!



*/


//first variables
var x = 50;
var y = 50;
var x2 = 50;
var y2 = 50;
var logoX = -218;
var logoX2 = 489;
var logoSpeed = 5;
var logoSpeed2 = 5;
var logotime = 0;
var speed = 2;
var enemySpeed = 1.1;
var enemySpeed2 = 2.2;
var enemySpeed3 = 1.4;
var enemySpeed4 = 3.6;
var enemySpeed1a = 1.1;
var bossHPlus = 0;
var bossKillB = 5000;
var keys = [];
var r = 255;
var g = 0;
var b = 0;
var dRed = -1;
var dGreen = 2;
var dBlue = 3;
var storyTextUp = 420;
var yellowBlink = 97;
var VOTES = "420+";
var VERSION = "1.1.0";
var scene = "logo";
var mainHealth = 20000000;
var enemy1TF = true;
var enemy2TF = true;
var enemy3TF = true;
var enemy4TF = true;
var enemy1aTF = true;
var trans = 0;
var attackS = 5;
var healthTime = 0;
var healthTimeLimit = 40;
var healS = 1;
var maxHealth = 100000000;
var crt = "front";
var coin = 0;
var randomNum = floor(random(1753,9934));
var enemyReleaseTime = 0;
var pauseColor = 123;
var pause = false;
var storyTrans = 255;
var storyTrans2 = 255;
var storyTrans3 = 0;
var f = createFont("sans-serif");
var eColor = 100;
var wood = getImage("cute/PlainBlock");
var textArray = ["Press Pause for the Shop!","Press Pause for the Settings!","welcome!","My first killing game!","Buy Awesome Stuff in the Shop!","First Voter - Epic Dan(lel ( ͡° ͜ʖ ͡°) "];
var healPrice=5;
var damagePrice = 10;
var speedPrice = 30;
var healTimePrice = 6;
var healPointPrice = 6;


//bigger var's
var backg = {
    one : 0,
    two : 0,
    three : 0,
};

var healCoinMain ={
x : 20,
y : 30,
};

var moneyCoinMain ={
x : 220,
y : 230,
};

var enemy1 = {
  x:284,
  y:200,
  damage :5,//5
  health:100,
  move : "true"
};

var enemy2 = {
  x:-1000,
  y:-1000,
  damage :4,//4
  health:40,
  move : "true"
};

var enemy3 = {
  x:-2000,  
  y:-2000,
  damage :10,//10
  health:1000,
  move : "true",
  ready : "not ready"
};

var enemy4 = {
  x:-100,
  y:-100,
  damage :1,
  health:80,
  move : "true"
};

var enemy1a = {
  x:284,
  y:200,
  damage :5,//5
  health:100,
  move : "true"
};

//functions
var keyPressed = function() {
    keys[keyCode] = true;
    
};

var colorChange = function(){
 if (r < 0 || r > 255) {
        dRed = -dRed;
    }
    if (b < 0 || b > 255) {
        dBlue = -dBlue;
    }
    if (g < 0 || g > 255) {
        dGreen = -dGreen;
    }
       r += dRed;
    b += dBlue;
    g += dGreen;   
};

var keyReleased = function() {
    keys[keyCode] = false;
    crt = "front";
};

var move = function(){
    if(keys[LEFT] || keys[65]){
       x -= speed; 
       crt = "left";
} 
if(keys [RIGHT] || keys[68]){
        x += speed; 
        crt = "right";
} 
if(keys[UP] || keys[87]){
       y -= speed; 
       crt = "up";
} 
if(keys[DOWN] || keys[83]){
         y += speed; 
         crt = "down";
}
    
    if(x <= 1){
        x = 1;
    }
    if(x >= 358){
     x = 358;   
    }
    if(y >= 308-43){
     y = 308-43;   
    }
    if(y <= 1){
     y = 1;   
    }
    
};

var mainC = function(){
    //aura
noStroke();
fill(255,0,0,50);
rect(x-40,y-40,120,120);
stroke(0, 0, 0);
//everything else
if(crt === "front"){
strokeWeight(3);
fill(r,g,b);
rect(x,y,40,40,5);
fill(255, 255, 255);
strokeWeight(1);
ellipse(x+13,y+15,5,5);
ellipse(x+28,y+15,5,5);
stroke(0, 0, 0);
strokeWeight(1);
textSize(20);
fill(0, 255, 0);
text(""+mainHealth,x-3,y-10);
}

if(crt === "right"){
strokeWeight(3);
fill(r,g,b);
rect(x,y,40,40,5);
fill(255, 255, 255);
strokeWeight(1);
ellipse(x+35,y+15,5,5);
ellipse(x+21,y+15,5,5);
stroke(0, 0, 0);
strokeWeight(1);
textSize(20);
fill(0, 255, 0);
text(""+mainHealth,x-3,y-10);
}
if(crt === "left"){
    strokeWeight(3);
fill(r,g,b);
rect(x,y,40,40,5);
fill(255, 255, 255);
strokeWeight(1);
ellipse(x+21,y+15,5,5);
ellipse(x+7,y+15,5,5);
stroke(0, 0, 0);
strokeWeight(1);
textSize(20);
fill(0, 255, 0);
text(""+mainHealth,x-3,y-10);
}
if(crt === "up"){
strokeWeight(3);
fill(r,g,b);
rect(x,y,40,40,5);
fill(255, 255, 255);
strokeWeight(1);
ellipse(x+13,y+8,5,5);
ellipse(x+28,y+8,5,5);
stroke(0, 0, 0);
strokeWeight(1);
textSize(20);
fill(0, 255, 0);
text(""+mainHealth,x-3,y-10); 
}
if(crt === "down"){
strokeWeight(3);
fill(r,g,b);
rect(x,y,40,40,5);
fill(255, 255, 255);
strokeWeight(1);
ellipse(x+13,y+22,5,5);
ellipse(x+28,y+22,5,5);
stroke(0, 0, 0);
strokeWeight(1);
textSize(20);
fill(0, 255, 0);
text(""+mainHealth,x-3,y-10);  
}

};

var die = function(){
  if(x+40>=enemy1.x&&x<enemy1.x+40&&y+40>enemy1.y&&y<enemy1.y+40&&enemy1TF === true){
    mainHealth -=enemy1.damage;
  }
  if(x+40>=enemy2.x&&x<enemy2.x+40&&y+40>enemy2.y&&y<enemy2.y+40&&enemy2TF === true){
    mainHealth -=enemy2.damage;
  }
  if(x+40>=enemy3.x&&x<enemy3.x+40&&y+40>enemy3.y&&y<enemy3.y+40&&enemy3TF === true){
    mainHealth -=enemy3.damage;
  }
  if(x+40>=enemy4.x&&x<enemy4.x+40&&y+40>enemy4.y&&y<enemy4.y+40&&enemy4TF === true){
    mainHealth -=enemy4.damage;
  }
  if(x+40>=enemy1a.x&&x<enemy1a.x+40&&y+40>enemy1a.y&&y<enemy1a.y+40&&enemy1aTF === true){
    mainHealth -=enemy1a.damage;
  }
  if(mainHealth <=0){
    scene = "death";  
  }

};

var heal = function(){
    healthTime +=1;
    if(healthTime>=healthTimeLimit){
        mainHealth +=healS;
        healthTime = 0;
    }
    if(mainHealth>=maxHealth){
     mainHealth = maxHealth;   
    }
};

var healCoin = function(){
    fill(0, 255, 0);
    ellipse(healCoinMain.x+6,healCoinMain.y-1.7,20,20);
    textSize(17);
    fill(0, 0, 0);
    if(x+40>healCoinMain.x-20&&x<healCoinMain.x+20&&y+40>healCoinMain.y-20&&y<healCoinMain.y+20){
        healCoinMain.x = random(40,360);
        healCoinMain.y = random(40,300);
        mainHealth += 100;
    }
};

var moneyCoin = function(){
    fill(255, 255, 0);
    ellipse(moneyCoinMain.x+6,moneyCoinMain.y-1.7,20,20);
    textSize(17);
    fill(0, 0, 0);
    if(x+40>moneyCoinMain.x-20&&x<moneyCoinMain.x+20&&y+40>moneyCoinMain.y-20&&y<moneyCoinMain.y+20){
        moneyCoinMain.x = random(40,360);
        moneyCoinMain.y = random(40,300);
        coin += 10;
    }
};


//the main things happening on the screen also, scenes
draw = function() {
    
    //logo
    if(scene === "logo"){
        background(0, 0, 0);
        logotime += 1;


textSize(84);
text("EPIC",logoX,79);
text("DAN",logoX2,176);
logoX2 -=logoSpeed2;
logoX+=logoSpeed;
if(logoX>=30){
 logoSpeed = 1;
}
if(logoX2<=243){
 logoSpeed2 = 1;   
}
if(logoX2<=30){
 logoSpeed2 = 5;   
}
if(logoX>=240){
 logoSpeed = 5;   
}


pushMatrix();
translate(0,126);
strokeWeight(5);
stroke(0, 255, 51);
line(5,random(270,269),5,272);
stroke(0, 255, 61);
line(15,random(270,269),15,272);
stroke(0, 255, 71);
line(25,random(270,260),25,272);
stroke(0, 255, 81);
line(35,random(270,260),35,272);
stroke(0, 255, 102);
line(45,random(270,240),45,272);
stroke(0, 255, 119);
line(45+10,random(270,240),45+10,272);
stroke(0, 255, 140);
line(55+10,random(270,220),55+10,272);
stroke(0, 255, 162);
line(65+10,random(270,220),65+10,272);
stroke(0, 255, 213);
line(75+10,random(270,220),75+10,272);
stroke(0, 255, 221);
line(85+10,random(270,190),85+10,272);
stroke(0, 255, 234);
line(95+10,random(270,180),95+10,272);
stroke(0, 255, 255);
line(105+10,random(270,170),105+10,272);
stroke(0, 247, 255);
line(115+10,random(260,160),115+10,272);
stroke(0, 238, 255);
line(125+10,random(250,150),125+10,272);
stroke(0, 225, 255);
line(135+10,random(240,140),135+10,272);
stroke(0, 217, 255);
line(145+10,random(220,130),145+10,272);
stroke(0, 207, 255);
line(155+10,random(210,120),155+10,272);
stroke(0, 197, 255);
line(165+10,random(200,110),165+10,272);
stroke(0, 187, 255);
line(175+10,random(210,120),175+10,272);
stroke(0, 177, 255);
line(185+10,random(220,130),185+10,272);
stroke(0, 167, 255);
line(195+10,random(240,140),195+10,272);
stroke(0, 157, 255);
line(205+10,random(250,150),205+10,272);
stroke(0, 147, 255);
line(215+10,random(260,160),215+10,272);
stroke(0, 137, 255);
line(225+10,random(270,170),225+10,272);
stroke(0, 127, 255);
line(235+10,random(270,180),235+10,272);
stroke(0, 117, 255);
line(245+10,random(270,190),245+10,272);
stroke(0, 107, 255);
line(255+10,random(270,200),255+10,272);
stroke(0, 97, 255);
line(265+10,random(270,210),265+10,272);
stroke(0, 87, 255);
line(275+10,random(270,220),275+10,272);
stroke(0, 77, 255);
line(285+10,random(270,230),285+10,272);
stroke(0, 67, 255);
line(295+10,random(270,240),295+10,272);
stroke(0, 57, 255);
line(305+10,random(270,250),305+10,272);
stroke(0, 47, 255);
line(315+10,random(270,260),315+10,272);
stroke(0, 37, 255);
line(325+10,random(270,265),325+10,272);
stroke(0, 27, 255);
line(335+10,random(270,268),335+10,272);
stroke(0, 17, 255);
line(345+10,random(270,268.5),345+10,272);
stroke(0, 07, 255);
line(355+10,random(270,268.9),355+10,272);
stroke(9, 0, 255);
line(365+10,random(270,269.2),365+10,272);
stroke(29, 0, 255);
line(375+10,random(270,269.6),375+10,272);
stroke(59, 0, 255);
line(385+10,random(270,269.9),385+10,272);
popMatrix();

if(logotime>=350){
    stroke(0);
 fill(0,0,0,storyTrans3);
 rect(0,0,400,400);
 storyTrans3+=2;
 if(storyTrans3>=255){
    storyTrans = 255;
    scene = "story";
 }
}
    }
    
    
    //main screen
    if(scene === "main"){
        strokeWeight(1);
        background(117, 117, 117);
        fill(143, 143, 143);
        rect(10,116,87,94);
        rect(111,116,87,94);
        rect(212,116,87,94);
        rect(312,116,87,94);
        fill(0);
        ellipse(26,168,10,10);
        ellipse(328,168,10,10);
        fill(84, 84, 84);
        rect(0,222,400,196);
        
        //text
        fill(173, 173, 173);
        rect(5,1,389,102,7);
        fill(0, 161, 97);
        textSize(93);
        text("Speedy's",6,81);
        fill(0, 255, 153);
        textSize(93);
        text("Speedy's",10,75);
        pushMatrix();
        rotate(-26);
        textSize(62);
        translate(-1,113);
        fill(56, 56, 56);
        rect(-12,80,196,78,5);
        fill(87, 87, 87);
        rect(-4,72,196,78,5);
        fill(148, 148, 148);
        ellipse(6,81,10,10);
        ellipse(183,81,10,10);
        ellipse(183,139,10,10);
        ellipse(6,139,10,10);
        fill(0, 0, 0);
        rect(4,79,4,2);
        rect(4,136,2,5);
        rect(181,78,2,5);
        rect(181,138,4,2);
        fill(yellowBlink,yellowBlink, 0);
        yellowBlink+=2;
        if(yellowBlink>=255){
         yellowBlink = 96;   
        }
        text("Quest",10,130);
        popMatrix();

//speedy
        pushMatrix();
        scale(2.5);
        translate(-43,61);
        strokeWeight(3);
fill(r,g,b);
rect(x2,y2,40,40,5);
fill(255, 255, 255);
strokeWeight(1);
rect(x2+13,y2+11,5,8);
rect(x2+28,y2+11,5,8);
fill(0, 0, 0);
rect(x2+31,y2+12,1,2);
rect(x2+16,y2+12,1,2);
stroke(0, 0, 0);
popMatrix();
        
        //enemy
        pushMatrix();
        scale(1.5);
        translate(-94,-80);
        fill(255, 0, 0);
        strokeWeight(3);
    rect(enemy1.x,enemy1.y,40,40,5);
    fill(random(0,255),0,0);
    strokeWeight(1);
    rect(enemy1.x+11,enemy1.y+7,4,12);
    rect(enemy1.x+25,enemy1.y+7,4,12);
    strokeWeight(1);
    fill(133, 133, 133);
    rect(enemy1.x+4,enemy1.y+23,32,13,2);
    fill(0, 0, 0);
    ellipse(enemy1.x+8,enemy1.y+27,2,2);
    ellipse(enemy1.x+8,enemy1.y+34,2,2);
    ellipse(enemy1.x+33,enemy1.y+34,2,2);
    ellipse(enemy1.x+33,enemy1.y+27,2,2);
    popMatrix();
    
    //start Button
    fill(0, 179, 0);
    strokeWeight(1);
    rect(225,309,122,56,9);
    fill(0,255,0);
    stroke(0, 0, 0);
    strokeWeight(1);
   rect(232,303,122,56,9);
    fill(0, 207, 0);
    strokeWeight(1);
    rect(239,308,110,46,9);
    fill(0, 0, 0);
    textSize(42);
    text("Start",245,344);
    if(mouseX>232&&mouseX<232+122&&mouseY>303&&mouseY<303+56){
        noStroke();
        fill(84, 84, 84);
        rect(184,283,224,124);
        stroke(0, 0, 0);
        fill(0, 179, 0);
    strokeWeight(1);
    rect(225,309,122,56,9);
    fill(0, 0, 0);
    textSize(42);
    text("Start",240,351);
    }
    
    
    //votes!
    fill(r,g,b);
    textSize(30);
    text(VOTES+" Votes!",162,277);
    
    //version
    fill(255, 255, 255);
    textSize(14);
    text("Version: "+VERSION,8,395);
    
    //by
    fill(2555, 255, 0);
    text("BY: Epic-Dan",312,394);
    
    fill(0,0,0,storyTrans);
    rect(0,0,400,400);
    storyTrans-=1;
    if(storyTrans <=0){
     storyTrans = 0;   
    }
    colorChange();
    }
    
    
    //story
    if(scene === "story"){
        strokeWeight(3);
stroke(0, 0, 0);
     background(0, 0, 0);
     fill(255, 255, 255);
     textSize(20);
     text(" once there was a scientist named Daniel\nSong. That scientist was working on an\namazing project named Test #3. That \nproject was all about a new creature\nnamed speedy. Speedy was a creature,\nthat sort of failed... Speedy needed help\nin order to move. So Daniel helped Speedy\nin many ways.\n\n\n But then, one day Daniel's friend had\nsuddenly turned evil. He was trying to\ncreate an artificial mind but accidentally\n dropped the formula. and that artificial\nmind was weirdly, EVIL.\n\n\n Daniel's friend captured Daniel and now \nspeedy needs YOUR help. You must\ncontrol speedy and defeat all of the\nenemies and save Daniel!\n\n\n But be careful. there may be some strong\nones. They almost never die and gets\nstronger everytime you kill it.\n\n\n IT is Speedy's Quest to stop all enemies...",10,storyTextUp);
     
     storyTextUp -= 0.3;
     if(storyTextUp <= -658){
      scene = "main"; 
     }
     
     
     fill(255, 0, 0);
     rect(10,10,58,24);
     fill(0, 0, 0);
     textSize(20);
     text("Skip",19,29);
     if(mouseX>10&&mouseX<10+58&&mouseY>10&&mouseY<10+24){
        fill(128, 0, 0);
     rect(10,10,58,24);
     fill(0, 0, 0);
     textSize(20);
     text("Skip",19,29);
     }
     fill(0,0,0,storyTrans2);
    rect(0,0,400,400);
    storyTrans2-=1;
    if(storyTrans2 <=0){
     storyTrans2 = 0;   
    }
     
    }
    
    
    //how to play
    if(scene === "how"){
        background(148, 148, 148);
        fill(219, 219, random(0,255));
        rect(29,4,354,51,5);
        fill(0, 0, 0);
        textSize(50);
        text("HOW TO PLAY",31,49);
        fill(0, 0, 0);
        textSize(20);
        text(" Use the Arrow keys or the 'W,A,S,D' keys\nto move speedy! the enemies will attack\nyou if they are on you. try to avoid them!\nyou can also attack by clicking the screen\nwhen the enemy is in your range (the red\nthing). you can get coins from killing\nenemies! you can upgrade your ability in \nthe shop with coins that's in the pause \nmenu.\n\n Be careful! there are bosses. when ever \nyou kill them, they will come back and get\nstronger.. so that's it! Good Luck!",10,95);
        textSize(14);
        text("Click here to continue",10,393);
        if(mouseX>10&&mouseX<10+143&&mouseY>376&&mouseY){
         fill(255, 255, 255);
         text("Click here to continue",10,393);
        }
    }
    
    
    //updates
    if(scene === "updates"){
        background(148, 148, 148);
        fill(0, 255, 0);
        rect(29,4,354,51,5);
        fill(0, 0, 0);
        textSize(50);
        text("Updates!",103,44);
        fill(0, 0, 0);
        textSize(18);
        text("- Added Heal Coins!(green coin) heals +100\n- Added money Coins!(yellow coin) +10 coins\n- Redesigned the shop\n- The updates menu now says Updates! instead\nof New Stuff!.",10,95);
        textSize(14);
        text("Click here to continue",172,393);
        if(mouseX>172&&mouseX<172+143&&mouseY>376&&mouseY){
         fill(255, 255, 255);
         text("Click here to continue",172,393);
        }
    }
    
    
    //scene one
    if(scene === "one"){
    //background
    background(148, 148, 148);
    //backgrounds stuff
    fill(217, 217, 217);
    rect(10,10,378,283,9);
    fill(150, 150, 150);
    rect(30,31,337,239);
    fill(148, 148, 148);
        ellipse(20,20,10,10);
        ellipse(379,21,10,10);
        ellipse(378,282,10,10);
        ellipse(21,282,10,10);
        fill(0, 0, 0);
        rect(18,19,4,2);
        rect(19,279,2,5);
        rect(378,18,2,5);
        rect(376,281,4,2);
        stroke(0, 0, 0);
        line(32,32,42,42);
        line(367,32,357,42);
        line(32,270,42,258);
        line(367,270,356,258);
        fill(150, 150, 150);
    rect(42,42,315,216);
    //background Text thingy
    //text
    fill(backg.one,backg.two,backg.three);
    textSize(31);
    text("Test Subject #"+randomNum,60,176);
    backg.one+=1;
    backg.two+=1;
    backg.three+=1;
    if(backg.one >= 148){
     backg.one = 148;   
    }
    if(backg.two >= 148){
     backg.two = 148; 
    }
    if(backg.three >= 148){
     backg.three = 148;   
    }
    
    
    
    
    //enemystuff1
    if(enemy1TF ===true){
    fill(eColor, 0, 0);
    eColor+=1;
    if(eColor >=280){
     eColor=100;   
    }
    
    strokeWeight(3);
    rect(enemy1.x,enemy1.y,40,40,5);
    fill(random(0,255),0,0);
    strokeWeight(1);
    rect(enemy1.x+11,enemy1.y+7,4,12);
    rect(enemy1.x+25,enemy1.y+7,4,12);
    strokeWeight(1);
    fill(133, 133, 133);
    rect(enemy1.x+4,enemy1.y+23,32,13,2);
    fill(0, 0, 0);
    ellipse(enemy1.x+8,enemy1.y+27,2,2);
    ellipse(enemy1.x+8,enemy1.y+34,2,2);
    ellipse(enemy1.x+33,enemy1.y+34,2,2);
    ellipse(enemy1.x+33,enemy1.y+27,2,2);
    //enemy movement
    if(enemy1.move === "true"){
    if(enemy1.x>x){
        enemy1.x -=enemySpeed;
    }
    if(enemy1.x < x){
     enemy1.x +=enemySpeed;  
    }
    if(enemy1.y>y){
     enemy1.y-=enemySpeed;
    }
    if(enemy1.y<y){
     enemy1.y+=enemySpeed;   
    }
    }
    //enemy health
    fill(255, 0, 0);
    textSize(20);
    text(""+enemy1.health,enemy1.x,enemy1.y-10);
    }
    //enemy1 death
    if(enemy1.health <=0){
        enemy1TF = false;
        coin += 100;
        enemy1.health = "ready";
        enemyReleaseTime += 1;
        if(enemy1.health ==="ready"){
            enemyReleaseTime = 0;
            enemy1.health = 100;
            enemy1TF = true;
            enemy1.x = random(-200,600);
            enemy1.y = random(-200,-40);
        }

    }
    
    
    
    
    
    //enemystuff1a
    if(enemy1aTF ===true){
    fill(eColor, 0, 0);
    eColor+=1;
    if(eColor >=280){
     eColor=100;   
    }
    
    strokeWeight(3);
    rect(enemy1a.x,enemy1a.y,40,40,5);
    fill(random(0,255),0,0);
    strokeWeight(1);
    rect(enemy1a.x+11,enemy1a.y+7,4,12);
    rect(enemy1a.x+25,enemy1a.y+7,4,12);
    strokeWeight(1);
    fill(133, 133, 133);
    rect(enemy1a.x+4,enemy1a.y+23,32,13,2);
    fill(0, 0, 0);
    ellipse(enemy1a.x+8,enemy1a.y+27,2,2);
    ellipse(enemy1a.x+8,enemy1a.y+34,2,2);
    ellipse(enemy1a.x+33,enemy1a.y+34,2,2);
    ellipse(enemy1a.x+33,enemy1a.y+27,2,2);
    //enemy movement
    if(enemy1a.move === "true"){
    if(enemy1a.x>x){
        enemy1a.x -=enemySpeed;
    }
    if(enemy1a.x < x){
     enemy1a.x +=enemySpeed;  
    }
    if(enemy1a.y>y){
     enemy1a.y-=enemySpeed;
    }
    if(enemy1a.y<y){
     enemy1a.y+=enemySpeed;   
    }
    }
    //enemy health
    fill(255, 0, 0);
    textSize(20);
    text(""+enemy1a.health,enemy1a.x,enemy1a.y-10);
    }
    //enemy1a death
    if(enemy1a.health <=0){
        enemy1aTF = false;
        coin += 100;
        enemy1a.health = "ready";
        enemyReleaseTime += 1;
        if(enemy1a.health ==="ready"){
            enemyReleaseTime = 0;
            enemy1a.health = 100;
            enemy1aTF = true;
            enemy1a.x = random(-200,600);
            enemy1a.y = random(-200,-40);
        }

    }
    
    
    
    
    
    
    
    //enemystuff 2
    if(enemy2TF ===true){
    fill(eColor, 0, 0);
    eColor+=1;
    if(eColor >=280){
     eColor=100;   
    }
    
    strokeWeight(3);
    rect(enemy2.x,enemy2.y,40,40,5);
    fill(0, random(0,255), 0);
    strokeWeight(1);
    rect(enemy2.x+11,enemy2.y+7,4,12);
    rect(enemy2.x+25,enemy2.y+7,4,12);
    strokeWeight(1);
    fill(133, 133, 133);
    rect(enemy2.x+4,enemy2.y+23,32,13,2);
    fill(0, 0, 0);
    ellipse(enemy2.x+8,enemy2.y+27,2,2);
    ellipse(enemy2.x+8,enemy2.y+34,2,2);
    ellipse(enemy2.x+33,enemy2.y+34,2,2);
    ellipse(enemy2.x+33,enemy2.y+27,2,2);
    //enemy movement
    if(enemy2.move === "true"){
    if(enemy2.x>x){
        enemy2.x -=enemySpeed2;
    }
    if(enemy2.x < x){
     enemy2.x +=enemySpeed2;  
    }
    if(enemy2.y>y){
     enemy2.y-=enemySpeed2;
    }
    if(enemy2.y<y){
     enemy2.y+=enemySpeed2;   
    }
    }
    //enemy health
    fill(255, 0, 0);
    textSize(20);
    text(""+enemy2.health,enemy2.x,enemy2.y-10);
    }
    //enemy2 death
    if(enemy2.health <=0){
        enemy2TF = false;
        coin += 200;
        enemy2.health = "ready";
        enemyReleaseTime += 1;
        if(enemy2.health ==="ready"){
            enemyReleaseTime = 0;
            enemy2.health = 40;
            enemy2TF = true;
            enemy2.x = random(-800,1000);
            enemy2.y = random(-1000,-1500);
        }

    }
    
    
    
    
    
    //enemy stuff 3 (BOSS!!)
    if(enemy3TF ===true){
    fill(random(0,255), random(0,255), random(0,255));
    
    strokeWeight(3);
    rect(enemy3.x,enemy3.y,40,40,5);
    fill(0, random(0,255), 0);
    strokeWeight(1);
    rect(enemy3.x+11,enemy3.y+7,4,12);
    rect(enemy3.x+25,enemy3.y+7,4,12);
    strokeWeight(1);
    fill(133, 133, 133);
    rect(enemy3.x+4,enemy3.y+23,32,13,2);
    fill(0, 0, 0);
    ellipse(enemy3.x+8,enemy3.y+27,2,2);
    ellipse(enemy3.x+8,enemy3.y+34,2,2);
    ellipse(enemy3.x+33,enemy3.y+34,2,2);
    ellipse(enemy3.x+33,enemy3.y+27,2,2);
    //enemy movement
    if(enemy3.move === "true"){
    if(enemy3.x>x){
        enemy3.x -=enemySpeed3;
    }
    if(enemy3.x < x){
     enemy3.x +=enemySpeed3;  
    }
    if(enemy3.y>y){
     enemy3.y-=enemySpeed3;
    }
    if(enemy3.y<y){
     enemy3.y+=enemySpeed3;   
    }
    }
    //enemy health
    fill(255, 0, 0);
    textSize(20);
    text(""+enemy3.health,enemy3.x,enemy3.y-10);
    text("*BOSS*",enemy3.x,enemy3.y-30);
    }
    //enemy3 death
    if(enemy3.health <=0){
        enemy3TF = false;
        coin += bossKillB;
        enemy3.ready = "ready";
        enemyReleaseTime += 1;
        if(enemy3.ready ==="ready"){
            enemyReleaseTime = 0;
            enemy3.health += bossHPlus;
            bossHPlus += 2000;
            enemy3TF = true;
            enemy3.x = -2000;
            enemy3.y = -2000;
            enemy3.damage += 10;
            enemy3.speed += 1;
            bossKillB += 4500;
            enemy3.ready = "not ready";
        }

    }
    
    
    
    
    
    
    //enemyStuff 4

    if(enemy4TF ===true){
    fill(255, 255, 255);
    
    strokeWeight(3);
    rect(enemy4.x,enemy4.y,40,40,5);
    fill(0, 0, 0);
    strokeWeight(1);
    rect(enemy4.x+11,enemy4.y+7,4,12);
    rect(enemy4.x+25,enemy4.y+7,4,12);
    strokeWeight(1);
    fill(133, 133, 133);
    rect(enemy4.x+4,enemy4.y+23,32,13,2);
    fill(0, 0, 0);
    ellipse(enemy4.x+8,enemy4.y+27,2,2);
    ellipse(enemy4.x+8,enemy4.y+34,2,2);
    ellipse(enemy4.x+33,enemy4.y+34,2,2);
    ellipse(enemy4.x+33,enemy4.y+27,2,2);
    //enemy movement
    if(enemy4.move === "true"){
    if(enemy4.x>x){
        enemy4.x -=enemySpeed4;
    }
    if(enemy4.x < x){
     enemy4.x +=enemySpeed4;  
    }
    if(enemy4.y>y){
     enemy4.y-=enemySpeed4;
    }
    if(enemy4.y<y){
     enemy4.y+=enemySpeed4;   
    }
    }
    //enemy health
    fill(255, 0, 0);
    textSize(20);
    text(""+enemy4.health,enemy4.x,enemy4.y-10);
    }
    //enemy4 death
    if(enemy4.health <=0){
        enemy4TF = false;
        coin += 200;
        enemy4.health = "ready";
        enemyReleaseTime += 1;
        if(enemy4.health ==="ready"){
            enemyReleaseTime = 0;
            enemy4.health = 80;
            enemy4TF = true;
            enemy4.x = random(-200,400);
            enemy4.y = random(-300,-500);
            enemy1.damage ++;
            enemy1a.damage++;
            enemy2.damage++;
            enemy3.damage++;
        }

    }
    
    
    
    
    
    
    
    //the bottom bar
    fill(87, 87, 87);
    strokeWeight(4);
    rect(2,308,396,90);
    fill(0, 255, 60);
    textSize(20);
    text("Your Health",10,330);
    text(""+mainHealth,10,356);
    //coins!
    fill(255, 255, 0);
    textSize(20);
    text("Coins:",10,384);
    text(""+coin,72,385);
    //random text
    fill(0, 0, 0);
    textSize(15);
    text(textArray[floor((frameCount/100)%textArray.length)],158,328);
    //boss away
    fill(255, 255, 255);
    textSize(15);
    text("Boss is "+floor(enemy3.x)+ " Pixels Away",145,384);
    
    
    //pause button
    fill(0, pauseColor, 0);
    rect(364,364,30,30);
    fill(0);
    rect(373,372,2,14,5);
    rect(382,372,2,14,5);
    if(mouseX>364&&mouseX<364+30&&mouseY>364&&mouseY<364+30){
        pauseColor = 255;
    }else{
     pauseColor = 123;   
    }
    
    
    //ready stuff
    move();
    colorChange();
    healCoin();
    moneyCoin();
    mainC();
    die();
    heal();
    }
    
    
    //scene death
    if(scene === "death"){
        fill(0, 0, 0,trans);
        trans +=0.05;
        if(trans >= 255){
         trans = 255;
        }
     rect(0,0,400,400);
     fill(255, 255, 255);
     textSize(75);
     text("YOU DIED!",10,220);
    }
    
    
    //pause
    if(scene === "pause"){
        strokeWeight(1);
        fill(123,123,123,10);
        rect(0,0,400,400);
        fill(255, 255, 255);
        textSize(50);
        text("Paused",116,78);
        textSize(30);
        text("Shop",171,235);
        text("Settings",22,235);
        text("Back",293,235);
        
        //settings
        strokeWeight(3);
        fill(166, 166, 166);
        rect(34,117,90,90,6);
        noStroke();
        fill(225, 255, 0);
        ellipse(79,172,55,55);
        fill(48, 48, 48);
        arc(36,207,63,70,-91,-1);
        arc(123,207,63,70,-177,-88);
        arc(81,118,63,70,-358,-181);
        fill(0, 0, 0);
        textSize(35);
        text("S",67,185);
        
        //shop
        strokeWeight(3);
        stroke(0, 0, 0);
        fill(166, 166, 166);
        rect(160,118,90,90,6);
        stroke(0);
        fill(237, 237, 237);
        rect(172,148,66,57,5);
        fill(0, 255, 242);
        triangle(224,178,192,194,192,164);
        noStroke();
        fill(0, 0, 0);
        arc(204,148,41,-45,-2,180);
        fill(123,123,123);
        arc(204,147,33,-36,3,178);
        
        //arrow
        strokeWeight(3);
        stroke(0, 0, 0);
        fill(166, 166, 166);
        rect(274,118,90,90,6);
        fill(0, 0, 0);
        textSize(56);
        text("←",293,181);
        stroke(0, 0, 0);
        
        if(mouseX>274&&mouseX<274+90&&mouseY>118&&mouseY<118+90){
            strokeWeight(3);
        stroke(0, 0, 0);
        fill(94, 94, 94);
        rect(274,118,90,90,6);
        fill(0, 0, 0);
        textSize(56);
        text("←",293,181);
        stroke(0, 0, 0);
        }
        
        if(mouseX>160&&mouseX<160+90&&mouseY>118&&mouseY<118+90){
            strokeWeight(3);
        stroke(0, 0, 0);
        fill(94, 94, 94);
        rect(160,118,90,90,6);
        stroke(0);
        fill(237, 237, 237);
        rect(172,148,66,57,5);
        fill(0, 255, 242);
        triangle(224,178,192,194,192,164);
        noStroke();
        fill(0, 0, 0);
        arc(204,148,41,-45,-2,180);
        fill(123,123,123);
        arc(204,147,33,-36,3,178);
        stroke(0, 0, 0);
        }
        
        if(mouseX>34&&mouseX<34+90&&mouseY>118&&mouseY<118+90){
           strokeWeight(3);
        fill(94, 94, 94);
        rect(34,117,90,90,6);
        noStroke();
        fill(225, 255, 0);
        ellipse(79,172,55,55);
        fill(48, 48, 48);
        arc(36,207,63,70,-91,-1);
        arc(123,207,63,70,-177,-88);
        arc(81,118,63,70,-358,-181);
        fill(0, 0, 0);
        textSize(35);
        text("S",67,185); 
        }
    }
    
    
    //shop
    if(scene === "shop"){
        background(112, 112, 112);
        image(wood,0,-303,400,1025);  
        //paper
        fill(240, 240, 240);
        strokeWeight(1);
        rect(57,37,291,400);
        //store
        fill(138, 138, 138);
        rect(127,42,135,63,8);
        fill(0, 153, 51);
        textSize(50);
        text("Shop",133,90);
        fill(0, 255, 85);
        textSize(50);
        text("Shop",138,88);
        
        //back
        strokeWeight(3);
        fill(0, 255, 68);
        rect(64,367,55,28);
        fill(0, 0, 0);
        textSize(20);
        text("back",70,389);
        if(mouseX>64&&mouseX<64+55&&mouseY>367&&mouseY<367+28){
            strokeWeight(3);
        fill(0, 138, 37);
        rect(64,367,55,28);
        fill(0, 0, 0);
        textSize(20);
        text("back",70,389);
        }
        
        //heal
        fill(0, 255, 0);
        rect(64,115,78,33);
        fill(0, 0, 0);
        textSize(30);
        text("Heal:  "+healPrice,68,143);
        
        //damage
        fill(255, 0, 0);
        rect(64,157,128,38);
        fill(0, 0, 0);
        textSize(30);
        text("Damage:  "+damagePrice,68,187);
        
        //speed
        fill(255, 255, 0);
        rect(64,205,102,38);
        fill(0, 0, 0);
        textSize(30);
        text("Speed:  "+speedPrice,68,233);
        
        //healtime
        fill(0, 255, 255);
        rect(64,252,153,38);
        fill(0);
        textSize(30); 
        text("Heal Time:  "+healTimePrice,68,282);
        
        //healPoint
        fill(145, 255, 0);
        rect(64,299,153,38);
        fill(0);
        textSize(30);
        text("Heal Point:  "+healPointPrice,68,328);
        
        
        
        
        
        
        //fill store
        if(mouseX>64&&mouseX<64+78&&mouseY>115&&mouseY<115+33&&scene === "shop"){
            fill(0, 135, 0);
        rect(64,115,78,33);
        fill(0, 0, 0);
        textSize(30);
        text("Heal:  "+healPrice,68,143);
        }
        
        //fill damage
        if(mouseX>64&&mouseX<64+128&&mouseY>157&&mouseY<157+38){
            fill(133, 0, 0);
        rect(64,157,128,38);
        fill(0, 0, 0);
        textSize(30);
        text("Damage:  "+damagePrice,68,187);
        }
        
        //fill speed
        if(mouseX>64&&mouseX<64+102&&mouseY>205&&mouseY<205+38){
        fill(153, 153, 0);
        rect(64,205,102,38);
        fill(0, 0, 0);
        textSize(30);
        text("Speed:  "+speedPrice,68,233);
        }
        
        //fill healtime
        if(mouseX>64&&mouseX<64+153&&mouseY>252&&mouseY<252+38){
        fill(0, 158, 158);
        rect(64,252,153,38);
        fill(0);
        textSize(30);
        text("Heal Time:  "+healTimePrice,68,282); 
        }
        
        //fill heal point
        if(mouseX>64&&mouseX<64+153&&mouseY>299&&mouseY<299+38){
         fill(89, 153, 0);
        rect(64,299,153,38);
        fill(0);
        textSize(30);
        text("Heal Point:  "+healPointPrice,68,328);  
        }
        
    }
    
    
    //settings
    if(scene === "settings"){
      background(r,g,b);
      stroke(0);
      fill(153, 153, 153);
      rect(99,6,201,58,5);
      fill(0);
      textSize(50);
      text("Settings",109,50);
      
      //stats sign
      fill(153,153,153);
      rect(19,112,115,36);
      fill(0);
      textSize(30);
      text("Stats",40,140);
      
      //credits sign
      fill(153,153,153);
      rect(19,160,115,36);
      fill(0);
      textSize(30);
      text("Credits",30,188);
      
      
      //how to play sign
      fill(153,153,153);
      rect(19,208,187,36);
      fill(0);
      textSize(30);
      text("How To Play",30,235);
      
      
      //menu sign
      fill(153,153,153);
      rect(19,256,112,36);
      fill(0);
      textSize(30);
      text("Menu",36,284);
      
      
      
      //updates sign
      fill(153,153,153);
      rect(19,302,140,36);
      fill(0);
      textSize(30);
      text("Updates",36,330);
      
      
      //fill stuff
      //stats
      if(mouseX>19&&mouseX<19+115&&mouseY>112&&mouseY<112+36){
        fill(56, 56, 56);
        rect(19,112,115,36);
        fill(0);
        textSize(30);
        text("Stats",40,140); 
      }
      //credits
      if(mouseX>19&&mouseX<19+115&&mouseY>160&&mouseY<160+36){
        fill(56, 56, 56);
        rect(19,160,115,36);
        fill(0);
        textSize(30);
        text("Credits",30,188);  
      }
      //how to play
      if(mouseX>19&&mouseX<19+187&&mouseY>208&&mouseY<208+36){
        fill(56, 56, 56);
        rect(19,208,187,36);
        fill(0);
        textSize(30);
        text("How To Play",30,235); 
      }
      //menu
      if(mouseX>19&&mouseX<19+112&&mouseY>256&&mouseY<256+36){
        fill(56, 56, 56);
        rect(19,256,112,36);
        fill(0);
        textSize(30);
        text("Menu",36,284);  
      }
      //updates
      if(mouseX>19&&mouseX<19+140&&mouseY>302&&mouseY<302+36){
        fill(56, 56, 56);
        rect(19,302,140,36);
        fill(0);
        textSize(30);
        text("Updates",36,330);  
      }
      
      
      //back
      textSize(20);
      fill(255, 255, 255);
     rect(285,355,102,31);
     fill(0);
     text("BACK",312,378);
     
     if(mouseX>285&&mouseX<285+102&&mouseY>355&&mouseY<355+31){
        fill(128, 128, 128);
     rect(285,355,102,31);
     fill(0);
     text("BACK",312,378); 
     }
      
      colorChange();
    }
    
    
    //stats
    if(scene === "stats"){
        stroke(0);
     background(143, 143, 143);
     textSize(47);
     fill(0);
     text("STATS",10,47);
     textSize(25);
     text("Health: "+mainHealth+"\nSpeed: "+speed+"\nDamage: "+attackS+"\nHeal Time: "+healthTimeLimit+"\n\nHeal Points: "+healS+"\nTest Number: "+"#"+ randomNum,10,94);
     textSize(20);
     text(" (The lower it is, the faster the heal time is)",-1,208);
     
     fill(255, 255, 255);
     rect(285,355,102,31);
     fill(0);
     text("BACK",312,378);
     
     if(mouseX>285&&mouseX<285+102&&mouseY>355&&mouseY<355+31){
        fill(128, 128, 128);
     rect(285,355,102,31);
     fill(0);
     text("BACK",312,378); 
     }
    }
    
    
    //credits
    if(scene === "credits"){
     background(133, 133, 133);
     stroke(0);
     textSize(47);
     fill(0);
     text("Credits",120,47);
     textSize(25);
     text("All code is writen by Epic Dan\n(Daniel Song) and the enemy\nmovement idea is from\nKingKhan007 from his awesome\ngame, Black & white(And Red).\nthe rest is the ideas from ME.\nso yeah. that's it! :)",10,94);
     
     textSize(20);
     
     fill(255, 255, 255);
     rect(285,355,102,31);
     fill(0);
     text("BACK",312,378);
     
     if(mouseX>285&&mouseX<285+102&&mouseY>355&&mouseY<355+31){
        fill(128, 128, 128);
     rect(285,355,102,31);
     fill(0);
     text("BACK",312,378); 
     }
    }
    
    
    //Click Function
    mouseClicked = function(){
        if(enemy1.x+40 > x-40&&enemy1.x<x+90&&enemy1.y+40>y-40&&enemy1.y<y+90){
            enemy1.health -= attackS;
        }
        
        //enemy1a
        if(enemy1a.x+40 > x-40&&enemy1a.x<x+90&&enemy1a.y+40>y-40&&enemy1a.y<y+90){
            enemy1a.health -= attackS;
        }
        
        //enemy2
        if(enemy2.x+40 > x-40&&enemy2.x<x+90&&enemy2.y+40>y-40&&enemy2.y<y+90){
            enemy2.health -= attackS;
        }
        
        //enemy3
        if(enemy3.x+40 > x-40&&enemy3.x<x+90&&enemy3.y+40>y-40&&enemy3.y<y+90){
            enemy3.health -= attackS;
        }
        
        //enemy4
        if(enemy4.x+40 > x-40&&enemy4.x<x+90&&enemy4.y+40>y-40&&enemy4.y<y+90){
            enemy4.health -= attackS;
        }
        
        //start button
        if(mouseX>232&&mouseX<232+122&&mouseY>303&&mouseY<303+56&&scene === "main"){
            scene = "how";
        }
        
        //skip(story)
        if(mouseX>10&&mouseX<10+58&&mouseY>10&&mouseY<10+24&&scene === "story"){
         scene = "main";   
        }
        
        //the how to play to the updates
        if(mouseX>10&&mouseX<10+143&&mouseY>376&&mouseY&&scene === "how"){
         scene = "updates";
        }
        
        //updates to the main game
        if(mouseX>172&&mouseX<172+143&&mouseY>376&&mouseY&&scene === "updates"){
         scene = "one";
        }
        
        //pausebutton
        if(mouseX>364&&mouseX<364+30&&mouseY>364&&mouseY<364+30&&scene === "one"){
        scene = "pause";
        }
        
        //settings
        if(mouseX>34&&mouseX<34+90&&mouseY>118&&mouseY<118+90&&scene === "pause"){
            scene = "settings";
        }
        if(mouseX>285&&mouseX<285+102&&mouseY>355&&mouseY<355+31&&scene === "settings"){
         scene = "one";   
        }
        
        //stats
        if(mouseX>19&&mouseX<19+115&&mouseY>112&&mouseY<112+36&&scene === "settings"){
         scene = "stats";   
        }
        if(mouseX>285&&mouseX<285+102&&mouseY>355&&mouseY<355+31&&scene === "stats"){
         scene = "settings";   
        }
        
        //credits
        if(mouseX>19&&mouseX<19+115&&mouseY>160&&mouseY<160+36&&scene === "settings"){
         scene = "credits";   
        }
        if(mouseX>285&&mouseX<285+102&&mouseY>355&&mouseY<355+31&&scene === "credits"){
         scene = "settings";   
        }
        
        //settings to the how to play
        if(mouseX>19&&mouseX<19+187&&mouseY>208&&mouseY<208+36&&scene === "settings"){
         scene = "how";   
        }
        
        //settings to the main menu
        if(mouseX>19&&mouseX<19+112&&mouseY>256&&mouseY<256+36&&scene === "settings"){
         scene = "main";   
        }
        
        //settings to the updates
        if(mouseX>19&&mouseX<19+140&&mouseY>302&&mouseY<302+36&&scene === "settings"){
         scene = "updates";   
        }
        
        //back(pause)
        if(scene === "pause"&&mouseX>274&&mouseX<274+90&&mouseY>118&&mouseY<118+90&&scene === "pause"){
         scene = "one";   
        }
        
        //shop
        if(mouseX>160&&mouseX<160+90&&mouseY>118&&mouseY<118+90&&scene === "pause"){
         scene = "shop";   
        }
        
        //back(store)
        if(mouseX>64&&mouseX<64+55&&mouseY>367&&mouseY<367+28&&scene === "shop"){
         scene = "one";   
        }
        
        //heal(store)
        if(mouseX>64&&mouseX<64+78&&mouseY>115&&mouseY<115+33&&coin>=healPrice&&scene === "shop"){
            mainHealth+=10000000;
            coin -= healPrice;
            healPrice += 0;
        }
        
        //damage(store)
        if(mouseX>64&&mouseX<64+128&&mouseY>157&&mouseY<157+38&&coin>=damagePrice&&scene === "shop"){
            attackS+= 100;
            coin-=damagePrice;
            damagePrice += 0;
        }
        
        //speed(store)
        if(mouseX>64&&mouseX<64+102&&mouseY>205&&mouseY<205+38&&coin>=speedPrice&&scene === "shop"){
         speed+=0.3;
         coin-=speedPrice;
         speedPrice += 0;
        }
        
        //healtime(store)
        if(mouseX>64&&mouseX<64+153&&mouseY>252&&mouseY<252+38&&coin>healTimePrice&&scene === "shop"&&healthTimeLimit > 0){
           healthTimeLimit -=1; 
           coin-=healTimePrice;
           healTimePrice += 0;
            
        }
        
        //healPoit(store)
        if(mouseX>64&&mouseX<64+153&&mouseY>299&&mouseY<299+38&&coin>healPointPrice&&scene === "shop"){
         healS+=1000;
         coin-=healPointPrice;
         healPointPrice += 0;
        }
        
    };
    
};
//de last line ov coode. xD