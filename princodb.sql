
DROP DATABASE contacte;
CREATE DATABASE princodb;

USE princodb;
DROP TABLE intrari_materii_prime;
DROP TABLE intrari_semifabricate1;
DELETE FROM materii_prime WHERE idintrare = 3;
 
CREATE TABLE materii_prime(
idIntrare INT AUTO_INCREMENT PRIMARY KEY,
material VARCHAR(50),
userName VARCHAR(50),
dateOfCreate DATETIME(6)
);

CREATE TABLE intrari_materii_prime(
idIntrareMateriiPrime INT AUTO_INCREMENT PRIMARY KEY,
idIntrareFK INT,
material VARCHAR(50),
userName VARCHAR(20),
dateOfCreate DATETIME(6),
quantity double,
employee  VARCHAR(20),
foreign key (idIntrareFK) references materii_prime(idIntrare)
);

CREATE TABLE semifabricate1(
idIntrare INT AUTO_INCREMENT PRIMARY KEY,
material VARCHAR(50),
userName VARCHAR(50),
dateOfCreate DATETIME(6)
);


CREATE TABLE intrari_semifabricate1(
idIntrareSemifabricate INT AUTO_INCREMENT PRIMARY KEY,
idIntrarePaletFK INT,
idIntrarePaletMateriiPrimeFK INT,
material VARCHAR(30),
userName VARCHAR(20),
dateOfCreate DATETIME(6),
quantity double,
employee  VARCHAR(20),
foreign key (idIntrarePaletFK) references semifabricate1(idIntrare),
foreign key (idIntrarePaletMateriiPrimeFK) references materii_prime(idIntrare)
);


INSERT INTO intrari_materii_prime(idIntrare,material,userName,dateOfCreate,quantity,employee) values (5,"sipci 20x30","Leonard","021-12-12 13:40:02",20,"CristiDoru");

select SUM(i.quantity) FROM intrari_semifabricate1 i where i.idIntrarePaletMateriiPrimeFK= 2 AND i.material= "panel2x3";
SELECT SUM(intrari.quantity) FROM intrari_materii_prime intrari WHERE idIntrareFK=6 AND intrari.material="sipca 20x20";
SELECT * FROM intrari_materii_prime intrari WHERE idIntrareFK=6 AND intrari.material="sipca 20x20";
SELECT intrari FROM intrari_materii_prime intrari WHERE intrari.idIntrare = 1  ;

ALTER TABLE materii_prime
