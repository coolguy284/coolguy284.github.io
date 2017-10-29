CREATE TABLE store (id INTEGER PRIMARY KEY, name TEXT, price INTEGER);

INSERT INTO store VALUES (1, "6 AA-batteries", 5.00);
INSERT INTO store VALUES (2, "20ft of 22-guage wire", 5.00);
INSERT INTO store VALUES (3, "60in HDTV", 699.49);
INSERT INTO store VALUES (4, "40in HDTV", 599.49);
INSERT INTO store VALUES (5, "10ft of 22-guage wire", 3.00);
INSERT INTO store VALUES (6, "6 AAA-batteries", 4.00);

SELECT * FROM store;
SELECT name, MAX(price) FROM store;
