import { pool } from "../database/dbInit.js";

const createTodoQuery = `
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
        await pool.query(createTodoQuery)
        console.log("just create todo table")
    } catch(err){
        console.error("fail create table")
    }
    
}