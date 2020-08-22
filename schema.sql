-- Drop DB below for local testing --
-- ====================================== --
-- Drops the stella_dbif it exists currently --
DROP DATABASE IF EXISTS stella_vybz_db;
-- Creates the stella_db database --
CREATE DATABASE stella_vybz_db;
-- Use stella_db if created already --
USE stella_vybz_db;



-- insert data into the JAWSDB for production ---
-- ================================================= --
USE  p62s4d5df82e4h9i  --- this is the JAWSBD
INSERT Into Users (email, firstname, lastname, password)
VALUES ("test1@aol.com", "test1FN", "test1LN", "test123!")