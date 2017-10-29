translate(width / 2, height / 2);
scale(1, -1);
rotate(0);
var mamin = pow(2, 0.5) * 200;
for (var rehip = -mamin; rehip < mamin + 0.1; rehip +=1) {
    stroke(255, 0, 0);
    point(rehip, 1000 / rehip);
    point(1000 / rehip, rehip);
    stroke(0, 0, 0);
    point(rehip, 0);
    point(0, rehip);
}