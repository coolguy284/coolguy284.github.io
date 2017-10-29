var book = {
    title: "The Giver",
    stars: 4
};

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

// draw one book
fill(214, 255, 219);
rect(10, 20, 90, 100);
fill(0, 0, 0);
text(book.title, 15, 29, 70, 100);
for (var i = 0; i < book.stars; i++) {
    image(getImage("cute/Star"), 13 + i * 20, 90, 20, 30);
}
