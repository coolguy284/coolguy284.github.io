var Draw = {
    rect: rect,
    ellipse: ellipse,
    quad: quad,
    triangle: triangle,
    beginShape: beginShape,
    endShape: endShape,
    fill: fill,
    noFill: noFill,
    vertex: vertex,
    curve: curve,
    arc: arc,
    background: background,
    bezier: bezier,
    curvePoint: curvePoint,
    curveTangent: curveTangent,
    curveTightness: curveTightness,
    curveVertex: curveVertex,
    bezierPoint: bezierPoint,
    bezierTangent: bezierTangent,
    bezierVertex: bezierVertex,
    line: line,
    point: point,
    image: image,
    stroke: stroke,
    noStroke: noStroke,
    color: color,
    colorMode: colorMode,
    imageMode: imageMode,
    strokeWeight: strokeWeight,
    strokeJoin: strokeJoin,
    text: text,
    textFont: textFont,
    textSize: textSize,
    textWidth: textWidth,
    textAscent: textAscent,
    textDescent: textDescent,
    textLeading: textLeading,
    textAlign: textAlign,
    textHeight: function() {
        return textAscent() + textDescent();
    },
    ellipseMode: ellipseMode,
    rectMode: rectMode,
};
draw = function() {
    Draw.background(255);
    Draw.fill(255, 0, 0);
    Draw.text("boundpero", 75, 100);
    Draw.ellipse(200, 200, 100, 100);
};