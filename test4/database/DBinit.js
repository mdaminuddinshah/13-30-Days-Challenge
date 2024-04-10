import pg from "pg";
import { createUsersTable } from "../model/tableUser.js";
import { createTodoTable } from "../model/tableTodo.js";

const { Pool } = pg;

export const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,

    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export async function connection(){

    try{
        await pool.query("");
        console.log("DATABASE CONNECTED")

        // CREATE TABLE USERS
        await createUsersTable();

        // CREATE TABLE TODO
        await createTodoTable();
        
    } catch(err){
        console.error("DATABASE CONNECTION FAILED")
    }
}