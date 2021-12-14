
DROP DATABASE contacte;
CREATE DATABASE princodb;

USE princodb;
DROP TABLE materiiprime;
DELETE FROM materii_prime WHERE idintrare = 4;
 
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

INSERT INTO materiiprime(material,username,dateofcreate)VALUES("lemn","Leo","2021-12-12 13:40:02");
INSERT INTO intrarimateriiprime(idIntrareFK,material,userName,dateOfCreate,quantity,employee) values (1,"sipci 20x30","Leonard","2021-12-12 13:40:02",20,"CristiDoru");

SELECT * FROM materii_prime;
SELECT * FROM intrari_materii_prime;


ALTER TABLE intrari_materii_prime
DROP constraint idIntrare;

ALTER TABLE intrari_materii_prime
ADD foreign key (idIntrare) references materii_prime(idIntrare);

DELETE FROM intrarimateriiprime WHERE idIntrareMateriiPrime=3;

