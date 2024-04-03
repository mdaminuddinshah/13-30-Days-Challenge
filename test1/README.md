Jika nodejs ingin berhubung dengan database, ia perlu melakukan koneksi atau sambungan ke database
- Maka nodejs perlu request ke database
- Dan database perlu response ke nodejs
- Nodejs akan bertindak sebagai client-side
- Manakala database bertindak sebagai server

Bagaimana nodejs dan database connected ??
-  Menggunakan connection pool

Apa itu connection pool ?
- connection pool ialah authentication for establishing connection
- macam passport untuk ke luar negeri

Apa yang ada pada connection pool ?
- untuk mewujudkan connection between nodejs and database
- connection pool perlu host, port, database, password, user
- e.g. 127.0.0.1, 5432, todo_database, qwerty123, amin

Selepas nodejs request ke database
- Database akan response ke nodejs bergantung pada connection pool berjaya atau tidak

Selepas berjaya berhubung dengan database
- Baru boleh gunakan DDL dan DML
- DDL untuk define column schema
- DML untuk CRUD

