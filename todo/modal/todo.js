import {pool} from "../database/connection.js";

const query = `
    CREATE TABLE IF NOT EXISTS todos(
        id SERIAL PRIMARY KEY,
        text VARCHAR(255) NOT NULL,
        status BOOLEAN DEFAULT FALSE,
        user_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT NOW()
    );
`;

async function createTodo(){
    try{
        await pool.query(query);
        console.log('successfully create todo')
    } catch(err){
        console.err('failed to create todo')
    }
};

export default createTodo;