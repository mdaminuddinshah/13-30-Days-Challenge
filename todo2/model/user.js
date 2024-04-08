import { pool } from "../database/dbInit.js";

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW() 
    );
`;

async function createTable(){

    try{
        await pool.query(createTableQuery)
        console.log("berjaya create table")
    } catch(err){
        console.error("gagal create table")
    }
    
}

export default createTable;