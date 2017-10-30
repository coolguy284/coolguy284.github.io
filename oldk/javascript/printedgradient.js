noStroke();
for (var mi = 0; mi < 768; mi += 1) {
    var i = mi * 2;
    if (i < 256) {
        fill(255, i, 0);
    } else if (i < 512) {
        fill(map(i, 256, 512, 256, 0), 255, 0);
    } else if (i < 768) {
        fill(0, 255, i - 512);
    } else if (i < 1024) {
        fill(0, map(i, 768, 1024, 256, 0), 255);
    } else if (i < 1280) {
        fill(i - 1024, 0, 255);
    } else if (i < 1536) {
        fill(255, 0, map(i, 1280, 1536, 256, 0));
    }
    rect(mi, 0, 1, 100);
}