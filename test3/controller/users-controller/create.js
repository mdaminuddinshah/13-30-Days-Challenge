import { pool } from "../../database/dbinit.js";

const queryValuesTableUsers = `
    INSERT INTO users(username, email, password, is_admin)
    VALUES($1, $2, $3, $4);
`;

export async function insertValuesToTableUsers(req, res) {
    try {
        const username = req.body.username;
        const emails = req.body.email;
        const password = req.body.password;
        const is_admin = req.body.is_admin;

        // VALIDATION ON USERNAME, EMAIL, PASSWORD
        // IF EMPTY EMAIL OR USERNAME OR PASSWORD
        const emptyFields = [];
        if (!username) {
            emptyFields.push("USERNAME");
        }
        if (!emails) {
            emptyFields.push("EMAIL");
        }
        if (!password) {
            emptyFields.push("PASSWORD");
        }
        if (emptyFields.length > 0) {
            res.status(400).json({
                message: `PLEASE CHANGE ${emptyFields.join(", ")}`
            });
            return;
        }

        // VALIDATION FOR EMAIL ADDRESS FORMAT
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validateEmail = emailFormat.test(emails)

        if(!validateEmail){
            res.status(400).json({
                message: "PLEASE USE CORRECT EMAIL ADDRESS"
            });
            return;
        }

        // If validation passes, proceed to database insertion
        await pool.query(queryValuesTableUsers, [username, emails, password, is_admin]);
        
        // Send success response after database insertion
        res.status(201).json({
            message: "VALUES ADDED TO TABLE USERS"
        });
        console.log("VALUES ADDED TO TABLE USERS");
    } 
    
    catch (err) {
        console.error("ERROR INSERTING VALUES TO TABLE USERS:", err.message);
        res.status(500).json({
            message: "INTERNAL SERVER ERROR"
        });
    }
}