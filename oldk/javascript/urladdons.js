/*
new_error experience
width
height
*/
textAlign(CENTER, CENTER);
textFont(createFont("courier"));
var clauses = [
    ["new_error_experience", "new_error_experence = yes/no", "wheather the new Oh Noes is active"], 
    ["width", "width = number", "the width of the program output"],
    ["height", "height = number", "the height of the program output"]
];
var scrtext = "URL syntax:\n\n? <clause1> [& <clause2> [& <clause3>[...]]]\n(added on to end of URL)";
scrtext += "\n\n\nClauses:\n\nwidth - the width of the program output\n\nheight - the height of the program";
scrtext += " output\n\nnew_error_experience - whether the new Oh noes\nis active (He will appear below the ";
scrtext += " program output\nand will normally appear calm. If an error is on\nthe line your cursor is on, he";
scrtext += " will have a worried\nlook on his face. If you click on him in this\n state, your error will pop";
scrtext += " up on the screen and\ncan be X-ed out. If you move off that line, then\nthe error will appear";
scrtext += " on the screen normally\n(still X-out able))";
scrtext += "\n\n\nWidth:\n\nSyntax:\nwidth = <number>\n\nExample:\nhttps://www.khanacademy.org";
scrtext += "/computer-programming/\nurl-addons/6160463939895296?width=400\n\n\nHeight:\n\nSyntax:";
scrtext += "\nheight = <number>\n\nExample:\nhttps://www.khanacademy.org/computer-programming/\nurl-addons/";
scrtext += "6160463939895296?height=400\n\n\nNew Error Experience:\n\nSyntax:\nnew_error_experience = yes/no";
scrtext += "\n\nExample:\nhttps://www.khanacademy.org/computer-programming/\nurl-addons/6160463939895296";
scrtext += "?new_error_experience\n=yes\n\n\nMultiple clauses can be combined, for example:\n";
scrtext += "https://www.khanacademy.org/computer-programming/\nurl-addons/6160463939895296?width=400";
scrtext += "&height\n=400&new_error_experience=yes";
scrtext += "\n\nClauses are basically a way to modify JavaScript\nvariables.";
var scrolheite = 490;
var scrol = 0;
var scrolength = constrain((310 / scrolheite) * 310, 10, 310);
var marol = (((310 - scrolength) / 311) * scrolheite).toFixed();
var scror = 0;
var inc = 5;
draw = function() {
    scror = scrol * (scrolength / 309) + 64;
    background(255);
    strokeWeight(5);
    fill(255);
    stroke(0);
    rect(2, 40, 395, 357);
    noStroke();
    fill(0, 255, 255);
    rect(375, 43, 20, 20);
    rect(375, 375, 20, 20);
    noFill();
    stroke(0, 255, 255);
    strokeWeight(1);
    rect(375, 63, 19, 311);
    stroke(255, 0, 0);
    strokeWeight(2);
    line(377, 61, 385, 45);
    line(393, 61, 385, 45);
    line(377, 377, 385, 393);
    line(393, 377, 385, 393);
    fill(0, 0, 255);
    noStroke();
    if (mouseX > 375 && mouseY > 43 && mouseX < 395 && mouseY < 63 && mouseIsPressed) {
        scrol = constrain(scrol - inc, 0, marol);
    } else if (mouseX > 375 && mouseY > 375 && mouseX < 395 && mouseY < 395 && mouseIsPressed) {
        scrol = constrain(scrol + inc, 0, marol);
    } else if (mouseX > 375 && mouseY > 63 && mouseX < 394 && mouseY < 374 && mouseIsPressed) {
        var betmouse = map(mouseY - (scrolength / 2), 63, 374, 0, scrolheite);
        scrol = constrain(betmouse, 0, marol);
    }
    rect(376, scror, 18, scrolength);
    stroke(255, 0, 0);
    line(378, scror + (scrolength / 2), 392, scror + (scrolength / 2));
    fill(0);
    textSize(12);
    textAlign(CENTER, TOP);
    text(scrtext, 190, map(scrol, 0, scrolength, 45, -600 + 40));
    noStroke();
    fill(255);
    rect(0, 0, 400, 38);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("URL Addons for Kahn Academy", 200, 20);
};