// why import pool from database, brcause pool is passport or database host or id for creating table
import {pool} from "../../database/connection.js";

// values $1, $2, $3, $4 is placeholder for array in query
const query = `
    INSERT INTO users (username, email, password, is_admin)
    VALUES($1, $2, $3, $4);
`;

async function addToColumn(req,res){

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const is_admin = req.body.is_admin;

    try{

        // this await pool.query(query, [username, email, password, is_admin]);
        // username, email, password, is_admin is array 
        // this array will fill in the $1 accordingly 
        // this is for prevent SQL injection attack
        const fe = await pool.query(query, [username, email, password, is_admin]);
        console.log(fe);
        res.status(201).json({
            message: "succussfully add to table or created"
        })
    } catch(error){
        console.log('INI ERROR DIA BAWAH',error, 'INI ERROR DIA ATAS');

        res.status(500).json({
            message: "internal server error"
        });
    }
}

export default addToColumn;
    

