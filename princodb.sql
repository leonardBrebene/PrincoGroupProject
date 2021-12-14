
DROP DATABASE contacte;
CREATE DATABASE princodb;

USE princodb;
DROP TABLE intrari_materii_prime;
DELETE FROM materii_prime WHERE idintrare = 4;
 
CREATE TABLE materii_prime(
idIntrare INT AUTO_INCREMENT PRIMARY KEY,
material VARCHAR(50),
userName VARCHAR(50),
dateOfCreate DATETIME(6)
);

CREATE TABLE INTRARIMATERIIPRIME(
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

SELECT * FROM materiiprime;
SELECT * FROM intrarimateriiprime;


ALTER TABLE intrari_materii_prime
DROP constraint idIntrare;

ALTER TABLE intrari_materii_prime
ADD foreign key (idIntrare) references materii_prime(idIntrare);

DELETE FROM intrarimateriiprime WHERE idIntrareMateriiPrime=2;

select
        materiipri0_.idIntrare as idintrar1_1_,
        materiipri0_.dateOfCreate as dateofcr2_1_,
        materiipri0_.material as material3_1_,
        materiipri0_.userName as username4_1_
    from
        materiiprime materiipri0_;
 
    select
        intrarimat0_.idIntrareFK as idintrar7_0_0_,
        intrarimat0_.idIntrareMateriiPrime as idintrar1_0_0_,
        intrarimat0_.idIntrareMateriiPrime as idintrar1_0_1_,
        intrarimat0_.dateOfCreate as dateofcr2_0_1_,
        intrarimat0_.employee as employee3_0_1_,
        intrarimat0_.material as material4_0_1_,
        intrarimat0_.idIntrareFK as idintrar7_0_1_,
        intrarimat0_.quantity as quantity5_0_1_,
        intrarimat0_.userName as username6_0_1_
    from
        intrarimateriiprime intrarimat0_
    where
        intrarimat0_.idIntrareFK=?
