
DROP DATABASE contacte;
CREATE DATABASE princodb;

USE princodb;
DROP TABLE palet;
DROP TABLE semiproducts1;
DROP TABLE  raw_materials_entries1;
DELETE FROM materii_prime WHERE idintrare = 3;
 
CREATE TABLE palet(
entryId INT AUTO_INCREMENT PRIMARY KEY,
uniqueId VARCHAR(8) NOT NULL,
userNameManager VARCHAR(20),
nameOfPalet VARCHAR(30),
typeofPalet VARCHAR(20),
dateOfCreate DATETIME(6)
);


CREATE TABLE raw_materials_entries1(
entryId INT AUTO_INCREMENT PRIMARY KEY,
paletEntryFK INT,
piece VARCHAR(30),
userNameManager VARCHAR(20),
dateOfCreate DATETIME(6),
quantity INT,
employee  VARCHAR(20),
lot VARCHAR(20),
foreign key (paletEntryFK) references palet(entryId)
);


CREATE TABLE semiproducts1(
entryId  INT AUTO_INCREMENT PRIMARY KEY,
paletEntryFK INT,
lastPaletUniqueFK INT,
piece VARCHAR(30),
quantity INT,
quantityOnLastPalet INT,
lot VARCHAR(20),
dateOfCreate DATETIME(6),
userNameManager VARCHAR(20),
employee  VARCHAR(20),
foreign key (paletEntryFK) references palet(entryId),
foreign key (lastPaletUniqueFK) references palet(entryId)
);

select * from palet p;
select * from raw_materials_entries1;
select * from semiproducts1;
select r.entryId,r.piece,r.quantity,r.dateOfcreate,r.userNameManager,r.from  raw_materials_entries1 r
Union ALL 
select s.entryId, s.piece, s.quantity,s.dateOfCreate,s.userNameManager from semiproducts1 s;
select sum(s.quantity) FROM semiproducts1 s where s.lastPaletUniqueFK= 2 AND s.piece= "ceva";
select sum(r.quantity) FROM raw_materials_entries1 r where r.paletEntryFK= 2 AND r.piece= "ceva";
SELECT * FROM intrari_materii_prime intrari WHERE idIntrareFK=6 AND intrari.material="sipca 20x20";
SELECT intrari FROM intrari_materii_prime intrari WHERE intrari.idIntrare = 1  ;

ALTER TABLE materii_prime
