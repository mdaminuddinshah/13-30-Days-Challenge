import packages from 'pg';
import createTable from '../modal/user.js';
import createTodo from '../modal/todo.js';

const { Pool } = packages;
 
export const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,  

  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export async function testConnection(){

    // QUERY IS PROMISE
    // why query is promise ?
    // because promise is variable for future value
    // what is future value ?
    // future value, when server request to database, it take a few seconds to get response from database
    // thats why promise is called future value, because the process takes time
    // so to get future value, must use asynchronous function along with await

    try{
        // promise have 3 state: pending, fullfilled, rejected
        // this situation is pending
        const dbPool = await pool.query("SELECT NOW()")
        const timeDB = dbPool.rows[0].now;
        const time = dbPool.rows[0];
        // if success / fullfilled
        console.log(timeDB)
        console.log(time)

        // create database table
        await createTable();

        // 
        await createTodo();

    } catch (err){

        // if rejected
        console.error("error not found")
        console.log(err)
    }
}

// export default testConnection;