-- File generated with SQLiteStudio 

-- Table: User Info
CREATE TABLE "userInfo" (
	"userID"	TEXT,
	"password"	TEXT,
	PRIMARY KEY("userID")
);

-- Table: User profile
CREATE TABLE "UserProfile" (
	"monthlyIncome"	TEXT,
	"UserID"	TEXT UNIQUE,
	"userName"	TEXT,
	"email"	TEXT,
	"address"	TEXT,
	FOREIGN KEY("UserID") REFERENCES userInfo("userID")
);

-- Table: Display Statics 
CREATE TABLE "DisplayStats" (
	"pieChart"	NUMERIC,
	"statSummary"	INTEGER
);

-- Table: Expense
CREATE TABLE "Expense" (
	"expenseName"	TEXT,
	"amount"	TEXT,
	"date"	INTEGER
);