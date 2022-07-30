<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>New Webpage</title>
    </head>
    <body>
        <p align = "center">
            <canvas id = "myPROCESS"></canvas>
        </p>
    </body>
    <!-- original source of next script: https://cdn.jsdelivr.net/processing.js/1.4.8/processing.min.js -->
    <script src = "../../externlibs/processing-1.4.8.min.js"></script>
    <script>
    var sketchproc = function(processinginstance) {
        with (processinginstance) {
size(400, 400, P2D);
background(255);
keyTyped = function() {
    println("PROCESSING.KEYTYPED");
    println("Typed: " + (key));
    println("INSTANCE: " + millis());
}
mouseClicked = function() {
    println("PROCESSING.MOUSECLICKED");
    println("MOUSE.LOCATION: " + mouseX + " " + mouseY);
    println("INSTANCE: " + millis());
}
mouseOut = function() {
    println("PROCESSING.MOUSEOUT");
    println("");
    println("");
}
mouseOver = function() {
    println("PROCESSING.MOUSEOVER");
    println("");
    println("");
}
    }};
    var canvas = document.getElementById("myPROCESS");
    var processinginstance = new Processing(canvas, sketchproc);
    </script>
</html>