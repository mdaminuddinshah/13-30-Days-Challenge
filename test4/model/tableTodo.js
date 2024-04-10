import { pool } from "../database/DBinit.js";

const todoTable = `
    CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        text VARCHAR(255) NOT NULL,
        status BOOLEAN DEFAULT FALSE,
        user_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT NOW()
    );
`;

export async function createTodoTable(){
    try{
        await pool.query(todoTable);
        console.log("TODO TABLE CREATEED")
    } catch(err){
        console.error("CANNOT CREATE TODO TABLE")
    }
}