// why import pool from database, brcause pool is passport or database host or id for creating table
import {pool} from "../../database/connection.js";

// values $1, $2, $3, $4 is placeholder for array in query
const query = `
    INSERT INTO users (username, email, password, is_admin)
    VALUES($1, $2, $3, $4);
`;

async function addToColumn(req,res){

    try{

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const is_admin = req.body.is_admin;

         // validate req.body
         const missingFields = [];
         if (!username) {
             missingFields.push("username");
         }
         if (!email) {
             missingFields.push("email");
         }
         if (!password) {
             missingFields.push("password");
         }
 
         if (missingFields.length > 0) {
             return res.status(400).json({
                 message: `Please provide ${missingFields.join(", ")}`
             });
         }

        // verify email with regex 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validateEmail = emailRegex.test(email);

        if(!validateEmail){
            res.status(400).json({
                message: "invalid email address"
            })
        };


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
    

