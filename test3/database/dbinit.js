import packages from "pg";
import { createTable } from "../model/user.js";
import { createTodoTable } from "../model/todo.js";
const { Pool } = packages;

// passport untuk database postgres connection
export const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,

    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});

export async function connectDatabase(){

    try{
        await pool.query("SELECT NOW()");
        console.log("DB CONNECTED")

        // CREATE TABLE users
        await createTable();

        // CREATE TABLE todos
        await createTodoTable();
        
    } catch(err){
        console.error("DB CONNECT FAILED")
    }
    
}