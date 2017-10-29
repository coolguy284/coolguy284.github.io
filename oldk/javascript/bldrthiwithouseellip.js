var a = 0;
textAlign(CENTER,CENTER);
noStroke();
angleMode = "degrees";
var draw = function() {
    var frrate = 60;
    frameRate(frrate);
    var an = a+"/3600 "+angleMode;
    var anl = an.length;
    //background(255, 255, 255);
    pushMatrix();
    translate(200,200);
    rotate(a);
    fill(255, 0, 0, 25.5);
    rect(-50,-1.5,100,3);
    translate(-200,-200);
    popMatrix();
    fill(255, 255, 255);
    rect(0,0,400,150);
    fill(0, 0, 0);
    textSize(40);
    text(an,200,50);
    textSize(30);
    text(round(3600/frrate-a/frrate)+" seconds left till restart",200,82);
    a+= 1;
    if (a===(360*10)) {
        Program.restart();
    }
};