import { pool } from "../database/dbinit.js";

const queryCreateTodoTable = `
    CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        text VARCHAR(255) NOT NULL,
        status BOOLEAN DEFAULT FALSE,
        user_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT NOW()
    );
` ;

export async function createTodoTable(){
    try{
        await pool.query(queryCreateTodoTable);
        console.log("TODO TABLE CREATED");
    } catch(err){
        console.error("CANNOT CREATE TABLE TODOS");
    }
}