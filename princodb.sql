
DROP DATABASE contacte;
CREATE DATABASE princodb;

USE princodb;
DROP TABLE lot;
DROP TABLE semiproduct_entries1;
DROP TABLE  raw_materials_entries1;
DELETE FROM materii_prime WHERE idintrare = 3;
DELETE FROM lot WHERE entryId = 1;
 
CREATE TABLE palet(
entryId INT AUTO_INCREMENT PRIMARY KEY,
uniqueId VARCHAR(8) NOT NULL,
userNameManager VARCHAR(20),
nameOfPalet VARCHAR(30),
typeofPalet VARCHAR(20),
dateOfCreate DATETIME(0)
);

CREATE TABLE lot(
entryId  INT AUTO_INCREMENT PRIMARY KEY,
userNameManager VARCHAR(20),
dateOfCreate DATETIME(0),
nameOfLot VARCHAR(30)
);


CREATE TABLE raw_materials_entries1(
entryId INT AUTO_INCREMENT PRIMARY KEY,
paletEntryFK INT,
piece VARCHAR(30),
userNameManager VARCHAR(20),
dateOfCreate DATETIME(0),
quantity INT,
employee  VARCHAR(20),
lotFK INT,
foreign key (paletEntryFK) references palet(entryId),
foreign key (lotFK) references lot(entryId)
);


CREATE TABLE semiproduct_entries1(
entryId  INT AUTO_INCREMENT PRIMARY KEY,
paletEntryFK INT,
lastPaletUniqueFK INT,
oldPiece VARCHAR(30),
newPiece VARCHAR(30),
quantity INT,
quantityOnLastPalet INT,
lotFK INT,
dateOfCreate DATETIME(0),
userNameManager VARCHAR(20),
employee  VARCHAR(20),
foreign key (paletEntryFK) references palet(entryId),
foreign key (lastPaletUniqueFK) references palet(entryId),
foreign key (lotFK) references lot(entryId)
);

CREATE TABLE test(
entryId  INT AUTO_INCREMENT PRIMARY KEY,
lotId INT,
piece VARCHAR(20),
foreign key (lotId) references lot(entryId)
);

 table lot;
select * from palet p where p.uniqueId ="2MP1" ;
select * from palet p;
select * from lot;
select * from raw_materials_entries1;
select * from semiproduct_entries1;
select * from raw_materials_entries1 r where r.paletEntryFK= 2;
select s.entryId, s.paletEntryFK, s.piece, s.quantity as quantityOnLastPalet ,s.dateOfCreate,s.userNameManager,s.employee,s.lot from semiproduct_entries1 s where s.lastPaletUniqueFk= 2;
select * from semiproduct_entries1 s where s.paletEntryFK = 4;
select s.entryId,s.paletEntryFK,p.uniqueId as lastPaletUniqueName,s.oldPiece,s.newPiece,s.quantity,s.quantityOnLastPalet,l.nameOfLot as lotFK,s.dateOfCreate,s.userNameManager,s.employee from semiproduct_entries1 s inner join lot l on l.entryId=s.lotFK inner join palet p on s.lastPaletUniqueFK=p.entryId where s.paletEntryFK = 4 ;
 
select sum(s.quantityOnLastPalet) FROM semiproduct_entries1 s where s.lastPaletUniqueFK= 1 AND s.oldPiece= "scandura 20x200";
select t.entryId, t.piece,l.nameOfLot from test t inner join  lot l on t.lotId=l.entryId ;
insert into lot (userNameManager,dateOfCreate,nameOfLot) values("Diana","2021-12-25 11:04:46","lotul5");
insert into test(lotId, piece) values( 2,"sipca5x3");
select sum(s.quantityOnLastPalet) FROM semiproduct_entries1 s where s.lastPaletUniqueFK=3 and s.piece="sipca2x3";
select r.entryId,r.piece,r.quantity,r.dateOfcreate,r.userNameManager,r.employee,r.lot from  raw_materials_entries1 r where r.paletEntryFK=2 Union ALL select s.entryId, s.piece, s.quantity*-1,s.dateOfCreate,s.userNameManager,s.employee,s.lot from semiproduct_entries1 s where s.lastPaletUniqueFk=2;
select sum(s.quantity) FROM semiproduct_entries1 s where s.lastPaletUniqueFK= 2 AND s.piece= "ceva";
select sum(r.quantity) FROM raw_materials_entries1 r where r.paletEntryFK= 2 AND r.piece= "ceva";
SELECT * FROM intrari_materii_prime intrari WHERE idIntrareFK=6 AND intrari.material="sipca 20x20";
SELECT intrari FROM intrari_materii_prime intrari WHERE intrari.idIntrare = 1  ;

 select
        s.entryId,
        s.paletEntryFK,
        s.piece,
        s.quantityOnLastPalet ,
        s.dateOfCreate,
        s.userNameManager,
        s.employee,
        s.lot
    from
        semiproduct_entries1 s
    where
        s.lastPaletUniqueFk= 2;
        
	 select
        *
    from
        test t
    inner join
        lot l
            on t.lotId=l.entryId;
            
	select
        t.entryId,
        t.piece,
        l.nameOfLot
    from
        test t
    inner join
        lot l
            on t.lotId=l.entryId
