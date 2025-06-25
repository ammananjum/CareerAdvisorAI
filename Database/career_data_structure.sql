-- Table: Users

CREATE TABLE Users (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Password VARCHAR(255),
    Interests TEXT,
    Skills TEXT,
    Location VARCHAR(100)
);

-- Table: ContactMessages

CREATE TABLE ContactMessages (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    FullName VARCHAR(100),
    Email VARCHAR(100),
    Subject VARCHAR(200),
    Message TEXT,
    SentAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
