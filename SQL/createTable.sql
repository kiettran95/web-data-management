CREATE TABLE User(
	Username varchar(50),
	Email varchar(50) NOT NULL,
	Password char(32) NOT NULL, 
	UserType enum('ADMIN', 'OWNER', 'VISITOR') NOT NULL,
	PRIMARY KEY(Username),
	UNIQUE(Email)
);

CREATE TABLE Property(
	ID MEDIUMINT(5) ZEROFILL NOT NULL auto_increment,
	Name varchar(255) NOT NULL,
	Size float NOT NULL,
	IsCommercial boolean NOT NULL,
	IsPublic boolean NOT NULL,
	Street varchar(255) NOT NULL,
	City varchar(100) NOT NULL,
	Zip int NOT NULL,
	PropertyType enum('FARM', 'GARDEN', 'ORCHARD') NOT NULL,
	Owner varchar(50) NOT NULL,
	ApprovedBy varchar(50),
	PRIMARY KEY(ID),
	UNIQUE(Name),
	FOREIGN KEY (Owner) REFERENCES User(Username)
		ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY(ApprovedBy) REFERENCES User(Username)
		ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE Visit(
	Username varchar(50),
	PropertyID MEDIUMINT(5) ZEROFILL NOT NULL,
	VisitDate timestamp NOT NULL,
	Rating int NOT NULL CHECK (Rating >= 1 AND Raing <= 5),
	CONSTRAINT Pk_Visit PRIMARY KEY (Username, PropertyID),
	FOREIGN KEY (Username) REFERENCES User(Username) 
		ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (PropertyID) REFERENCES Property(ID) 
		ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE FarmItem(
	Name varchar(100),
	IsApproved boolean NOT NULL,
	Type enum('ANIMAL', 'FRUIT', 'FLOWER', 'VEGETABLE', 'NUT') NOT NULL,
	PRIMARY KEY(Name)
);

CREATE TABLE Has(
	PropertyID MEDIUMINT(5) ZEROFILL NOT NULL,
	ItemName varchar(100),
	CONSTRAINT Pk_Has PRIMARY KEY(PropertyID, ItemName),
	FOREIGN KEY (PropertyID) REFERENCES Property(ID) 
		ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (ItemName) REFERENCES FarmItem(Name) 
		ON DELETE CASCADE ON UPDATE CASCADE
);