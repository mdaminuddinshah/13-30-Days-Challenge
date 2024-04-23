1. npm init
2. npm i express
3. create index.js file
4. create .gitignore file
5. import express in index.js
6. create controller folder
7. create health.js inside controller folders = to check server connect with client
8. create notFound.js inside controller folders = to check server handle error route into client-side
9. create database folder and file, to connect database and server nodejs
10. selepas connect to database, now create table of database
11. selepas dah connect dgn database,sekarang create table utk database.
12. create folder model utk create table sahaja. model folder utk table.
13. utk create table, perlukan pool or passport dari database. create user.js utk table user and import pool dari database.
14. pastu, buat satu variable utk query database, maksudnya variable utk create table dgn format postgresql
15. then, import variable tadi ke dlm try/catch database. 
16. selesai create table.
17. sekarang, utk create data ke dalam table. 
18. create sub-folder, dalam controller khas utk create, read, update, delete = CRUD. 
19. create create.js file
20. import pool ke dalam create.js, buat variable utk query postgresql utk create
21. buat satu logic function sama mcm create table
22. import function dari create.js ke dalam index.js dgn route app.post("create", addData);