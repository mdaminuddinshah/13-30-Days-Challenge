import { pool } from "../database/connection.js";

const query = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
    );
`;

async function createTable(){
    try {
        await pool.query(query);
        console.log('successfully create table')
    } catch(err){
        console.error('failed')
    }  
};

export default createTable;
