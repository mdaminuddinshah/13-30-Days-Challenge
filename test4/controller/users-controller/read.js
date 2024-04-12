import { pool } from "../../database/DBinit.js";

const queryAllUsers = `SELECT * FROM users`;

const queryUsersById = `SELECT * FROM users WHERE email = $1`;

export async function readAllUsers(req,res){
    try{
        const data = await pool.query(queryAllUsers);
        const details = data.rows;
        res.status(200).json({
            message: "SUCCESS QUERY ALL USERS",
            data: details
        })
        console.log("SUCCESS QUERY ALL USERS")
    } catch(error){
        res.status(500).json({
            message: "CANNOT READ ALL USERS",
            error: error.message
        })
        console.log("CANNOT READ ALL USERS")
    }
}

export async function readUserById(req,res){

    try{

        const idss = req.params.hello;
        const data = await pool.query(queryUsersById, [idss]);
        const data2 = data.rows;

        if(data2.length === 0){
            res.status(404).json({
                message: "DATA NOT EXIST"
            })
            return console.log("DATA NOT EXIST")
        }

        res.status(200).json({
            message: "SUCCESS QUERY USER BY ID",
            // data: data,
            data2: data2
        })

      
        console.log("SUCCESS QUERY USER BY ID", data2)

    } catch(error){
        res.status(500).json({
            message: "CANNOT QUERY USER BY ID"
        })
        console.error("CANNOT QUERY USER BY ID")
    }
    
}