-- HOW TO SET UP A DATABASE AND POSTGRES WITH GUI (GRAPHIC USER INTERFACE)
-- open tableplus to connect with postgres server
-- default password is postgres
-- default port is 5432
-- name can be anything, 
-- leave database empty for moment

-- after that, connect. 
-- inside a postgress server can create many database,
-- so create database with new
-- close tableplus, and open again search for database you create and connect with same password and port

-- HOW TO CREATE NEW DATABASE WITH SQL ALONE
-- 1. open sql editor on tableplus
-- 2. type CREATE DATABASE "NAME-IT";
-- 3. and click run current
-- 4. it will create new database

-- HOW TO DELETE A DATABASE WITH SQL ALONE
-- 1. type DROP DATABASE "NAME-TO-BE-DELETE";
-- 2. then click run current


-- HOW TO CREATE TABLE IN DATABASE
-- CREATE TABLE table_name(
--      id serial PRIMARY KEY,
--      column_name data_type,
--      column_name data_type 
-- );

CREATE TABLE urls(
	id serial PRIMARY KEY,
	long_url varchar(255),
	short_url varchar(255),
	time_count integer,
	created_at timestamp
);

-- TO ADD COLUMN INTO TABLE
ALTER TABLE name_table
ADD COLUMN nama_column data_type;

-- TO DELETE COLUMN IN TABLE
ALTER TABLE table_name
DROP COLUMN column_name;

-- TO DELETE TABLE
DROP TABLE nama_table;

-- TO RENAME COLUMN
ALTER TABLE urls
RENAME COLUMN long_url TO url;

-- TO CHANGE DATA TYPE OF COLUMN
ALTER TABLE urls
ALTER COLUMN view_count TYPE decimal;