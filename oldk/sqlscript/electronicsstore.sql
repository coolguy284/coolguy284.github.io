CREATE TABLE store (id INTEGER PRIMARY KEY, name TEXT, price INTEGER);

INSERT INTO store VALUES (1, "6 AA-batteries", 5.00);
INSERT INTO store VALUES (2, "20ft of 22-guage wire", 5.00);
INSERT INTO store VALUES (3, "60in HDTV", 699.49);
INSERT INTO store VALUES (4, "40in HDTV", 599.49);
INSERT INTO store VALUES (5, "10ft of 22-guage wire", 3.00);
INSERT INTO store VALUES (6, "6 AAA-batteries", 4.00);
INSERT INTO store VALUES (7, "20ft of 20-guage wire", 4.59);
INSERT INTO store VALUES (8, "10ft of 20-guage wire", 3.59);
INSERT INTO store VALUES (9, "5ft of 10-guage wire", 2.00);
INSERT INTO store VALUES (10, "5ft of 15-guage wire", 2.45);
INSERT INTO store VALUES (11, "90in Plasma TV", 5999.99);
INSERT INTO store VALUES (12, "60in Plasma TV", 2999.99);
INSERT INTO store VALUES (13, "40in Plasma TV", 2599.99);
INSERT INTO store VALUES (14, "90in HDTV", 2899.99);
INSERT INTO store VALUES (15, "200ft of 15-guage wire", 15.99);
INSERT INTO store VALUES (16, "10-pack of 2 watt Diodes", 5.00);

SELECT * FROM store;
SELECT * FROM store ORDER BY price;
SELECT AVG(price), SUM(price) FROM store;