import { pool } from "../database/DBinit.js";

const user = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
    );
`;

export async function createUsersTable(){

    try{
        await pool.query(user);
        console.log("TABLE USERS CREATED")
    } catch(err){
        console.error("CANNOT CREATE TABLE USERS")
    }
    
}