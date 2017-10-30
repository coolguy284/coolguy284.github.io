/************************************************************************************
 * Created by Abdul Gilani
 * Lets get to 25 votes
 * Created on the 25 April
                          ******Instructions******** 

 It is your task to help poor little Mr Pants, he is stuck with one off his hardest challenges yet. An equation. 1+1=...... Press the up arrow key to set the light bulb alight, but a ramdom number will appeare. Find your closest number for the equation, make a spin off and you name will go below on the hall of fame. The closer the better. Lets see who can get to closest number.  ITS UP TO YOU.
************************************************************************************/
// Hall of Fame
//Name:                //Number:
//Abdul Gilani ---------- 1.945
//hickmakhan------------- 1.984
//Groppolo1510----------- 2.077
//Hope Bethel------------ 1.997




background(201, 255, 206);

noStroke();

var randomX = random(0, 3);
var randomY = random(34,34 );

fill(255, 0, 0);
var randomSize = random(20, 200);

fill (245, 245, 245);
rect(187,205,93,86);
fill (173, 173, 173);
rect(204,290,59,13);

var draw = function() {
    if (keyIsPressed && keyCode === UP) {
        fill(255, 0, 0);
        textSize(randomY);
        text(randomX, 18, 216);
        fill(247, 255, 0);
    } else {
        fill(255, 255, 255);
    }

    ellipse(231,121,208,218);
};

var pic = getImage("avatars/mr-pants");
image(pic, 14, 291,116,109);

fill(140, 122, 122);
textSize(17);
text ("Oh no Mr Pants needs\nhelp! But dont worry\nyour here to help\nhim.\nHelp Mr Pants\nto work out this\nequation. 1+1=...",5,19);

text("Please read instructions ",212,394);

