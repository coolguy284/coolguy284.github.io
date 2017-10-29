keyTyped = function() {
    println("PROCESSING.KEYTYPED");
    println("Typed: " + key);
    println("INSTANCE: " + millis());
};
mouseClicked = function() {
    println("PROCESSING.MOUSECLICKED");
    println("MOUSE.LOCATION: " + mouseX + " " + mouseY);
    println("INSTANCE: " + millis());
};
mouseOut = function() {
    println("PROCESSING.MOUSEOUT");
    println("");
    println("");
};
mouseOver = function() {
    println("PROCESSING.MOUSEOVER");
    println("");
    println("");
};