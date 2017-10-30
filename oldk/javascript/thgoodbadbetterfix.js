
/**
   Examples of bad, good, and better dragging methods.

   Try dragging the dots over each other to see the problems
   Also note the position of the cursor on the dragged dot
   
   Hit Restart to reset the dots

*/


var bad = {     // red
    x: 140,
    y: 200,
    draw: function() {
        fill(255, 0, 0);
        noStroke();
        ellipse(this.x, this.y, 60, 60);
    },
    drag: function() {
        if (dist(this.x, this.y, mouseX, mouseY) < 30 && mouseIsPressed) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }
};

var good = {    // blue
    x: 260,
    y: 200,
    
    selected: false,
    
    draw: function () {
        fill(0, 0, this.selected ? 200 : 255);
        noStroke();
        ellipse(this.x, this.y, 60, 60);
    },
    drag: function() {
        if (mouseIsPressed) {
            if (dist(this.x, this.y, mouseX, mouseY) < 30) {
                this.selected = true;
            }
            
            if (this.selected) {
                this.x += mouseX - pmouseX;
                this.y += mouseY - pmouseY;
            }
        } else {
            this.selected = false;
        }
    }
};


var better = {  // green
    x:200, 
    y:100,

    selected : false,
    
    draw : function(){
        fill(5, 125, 13);
        ellipse(this.x, this.y, 60, 60);
    },
    drag : function(){
        if (this.selected){
            this.x += mouseX-pmouseX;
            this.y += mouseY-pmouseY;
        }
    },
    select : function(vlu){
        if (dist(this.x, this.y, mouseX, mouseY)<30){
            this.selected = vlu;
        }
    }
};
              
              
mousePressed = function(){
    better.select(true);
};

mouseReleased = function(){
    better.select(false);
};

mouseDragged = function(){
    better.drag();
};

              

var draw = function() {
    background(221, 221, 160);

    better.draw();
    
    bad.drag();
    good.drag();
    
    bad.draw();
    good.draw();
    
};
