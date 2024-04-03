-- CRUD

-- CREATE
-- HOW TO INSERT DATA INSIDE TABLE'S COLUMN
INSERT INTO table_name(all column_name)
VALUES('all values for every column');

-- TRUNCATE VS DELETE
-- TRUNCATE WILL DELETE ALL AND START FROM 1: FROM DDL

-- WHILE DELETE START FROM CURRENT INDEX: FROM DML

-- UNIQUE
-- for email, nric, phone number, username


-- UPDATE
-- CARA UBAH ROW, ATAUPUN DATA DALAM TABLE
-- UPDATE certain ROW INSIDE TABLE
UPDATE urls
SET view_count = view_count + 1
WHERE id = which_id_to_update;

-- DELETE
-- DELETE CERTAIN ROW
DELETE FROM table_name
WHERE ID = INDEX_ROW;

-- READ
-- READ ALL DATA FROM TABLE
SELECT * FROM table_name;

-- READ CERTAIN COLUMN FROM TABLE
-- READ long_url and short_url 
SELECT long_url, short_url FROM table_name;

-- RENAME COLUMN
-- SELECT COLUMN_NAME AS COLUMN NAME FROM table_name;
-- this only for query or just for read-only
SELECT long_url AS "Long URL" FROM urls;

-- FILTERING
SELECT * FROM table_name WHERE view_count > 5;