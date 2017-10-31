/**
 * The forest-fire model is a two-dimensional cellular automaton, 
 * where a cell is either empty, has a tree, or is on fire. 
 * In this model there are 4 rules
    @1. A burning cell turns into an empty cell
    @2. A tree will burn if at least one neighbor is burning
    @3. A tree ignites with probability f even if no neighbor is burning
    @4. An empty space fills with a tree with probability p
 * For more information about this program, visit the link below
 * https://en.wikipedia.org/wiki/Forest-fire_model
 **/
var forest = {
    //how many trees are on the x axis
    X: 45,
    //how many trees are on the y axis
    Y: 45,
    //the percentage of the canvas filled with trees at the beginning
    propTree: 0.5,
    //probability of a tree filling an empty space
    propTree2: 0.01,
    //probability that a tree will start burning
    propBurn: 0.0001,
    //chooses which color to be used
    t: [],
    //colors of the trees: white, green, red
    c: [color(255), color(0,255,0), color(255,0,0)]
};
for(var i = 0; i < forest.Y; i++) {
    forest.t[i] = [];
    for(var j = 0; j < forest.Y; j++) {
        forest.t[i][j] = Math.random() < forest.propTree ? 1 : 0;
    }
}
var afterLoad = function(forest) {
    for(var i = 0; i < forest.X; i++) {
        for(var j = 0; j < forest.Y; j++) {
            fill(forest.c[forest.t[i][j]]);
            rect(10*j,10*i, 10*j+9, 10*i+9);
        }
    }
};
var doStep = function(forest) {
    var to = [];
    for(var i = 0; i < forest.Y; i++) {
        to[i] = forest.t[i].slice(0);
    }
 
    //indices outside the array are undefined; which converts to 0=empty on forced typecast
    for(var i = 0; i < forest.Y; i++) {
        for(var j = 0; j < forest.Y; j++) {
            if(0 === to[i][j]) {
                forest.t[i][j] = Math.random() < forest.propTree2 ? 1 : 0;
            } else if(1 === to[i][j]) {
                if(
                    ((i>0) && (2 === to[i-1][j])) ||
                    ((i<forest.Y-1) && (2 === to[i+1][j])) ||
                    ((j>0) && (2 === to[i][j-1])) ||
                    ((j<forest.X-1) && (2 === to[i][j+1]))
                    ) {
                    forest.t[i][j] = 2;
                } else {
                    forest.t[i][j] = Math.random() < forest.propBurn ? 2 : 1;
                }
            } else if(2 === to[i][j]) {
                //If it burns, it gets empty ...
                forest.t[i][j] = 0;
            }
        }
    }
};
draw = function() {
    afterLoad(forest);
    doStep(forest);
};
 