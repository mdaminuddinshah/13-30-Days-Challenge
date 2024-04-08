import pg from 'pg';
import createTable from '../model/user.js';
import { createTodoTable } from '../model/todo.js';

const { Pool } = pg;
export const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,

  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export async function testConnection(req,res){

    try{
        const query = await pool.query("SELECT NOW()");
        const nowq = query.rows[0];
        console.log(nowq, "here")

        // create table
        await createTable();
        await createTodoTable();
        
        
    } catch(err){
        console.error(err)
    }
    
}

