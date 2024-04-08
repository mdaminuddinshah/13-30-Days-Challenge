import { pool } from "../database/dbinit.js";

const queryCreateTableUser =   `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
    );
`;

export async function createTable(){
    try{
        await pool.query(queryCreateTableUser);
        console.log("TABLE CREATED")
    } catch(err){
        console.error("CANNOT CREATE TABLE USERS");
    }
    
}