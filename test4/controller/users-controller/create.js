import { pool } from "../../database/DBinit.js";
import bcrypt from "bcrypt";

const InsertTable = `
    INSERT INTO users(username, password, email, is_admin)
    VALUES($1, $2, $3, $4);
`;

export async function createUser(req,res){

    try{

        

        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const is_admin = req.body.is_admin;

        // VALIDATION FOR USERNAME, PASSWORD, EMAIL IF EMPTY => BELOW
        const empty = [];
        if(!email){
            empty.push("EMAIL")
        }

        if(!username){
            empty.push("USERNAME")
        }

        if(!password){
            empty.push("PASSWORD")
        }

        if(empty.length > 0){
            res.status(404).json({
                message: `INSERT YOUR ${empty.join(", ")}`
            });
            console.log(`YOUR ${empty.join(", ")} EMPTY`);
            return;
        }
        // VALIDATION FOR USERNAME, PASSWORD, EMAIL IF EMPTY => ABOVE

        // VALIDATION FOR EMAIL FORMAT => BELOW
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const testEmail = emailFormat.test(email);

        if(!testEmail){
            res.status(500).json({
                message: "EMAIL FORMAT WRONG"
            });
            console.log("EMAIL FORMAT WRONG")
            return;
        }
        // VALIDATION FOR EMAIL FORMAT => ABOVE

        // HASH A PASSWORD WITH BCRYPT
        // BCRYPT
        const saltrounds = 13;
        const salt = bcrypt.genSaltSync(saltrounds);
        const hash = bcrypt.hashSync(password, salt);

        await pool.query(InsertTable, [username, hash, email, is_admin]);
        res.status(200).json({
            message: "SUCCESS CREATE USER"
        })
        console.log("SUCCESS CREATED USER")

    } catch(error){

        res.status(500).json({
            message: "FAILED CREATE USER",

            // for test
            eror: error,
            reason: error.message
        })

        console.error("FAILED CREATE USER", error.message)
       
    }
    
}