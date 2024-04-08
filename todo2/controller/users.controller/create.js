import {pool} from "../../database/dbInit.js";

const create = `
    INSERT INTO users(username, email, password, is_admin)
    VALUES($1,$2,$3, $4);
`;

export async function createUser(req,res){
    try{
        const username =  req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const is_admin = req.body.is_admin;

        const fe = await pool.query(create, [username, email, password, is_admin]);
       
        console.log("nice you create")
        res.status(201).json({
            message:"okay, add to table user"
        });
    } catch(err){
        console.error("failed create user")

        res.status(500).json({
            message: "internal server error"
        });
    }
    
}