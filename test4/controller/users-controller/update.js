import { pool } from "../../database/DBinit.js";

const queryUpdateUser = `
    UPDATE users SET username = $1, email = $2 WHERE id = $3;
`;

export async function updateUser(req,res){
    const username = req.body.username;
    const email = req.body.email;
    const id = req.params.id;

    // VALIDATE EMAIL AND USERNAME NOT NULL
    const empty = [];
    if(!email){
       empty.push("EMAIL")
    }

    if(!username){
        empty.push("USERNAME")
    }

    if(empty.length > 0){
        res.status(404).json({
            message: `PLEASE ADD ${empty.join(", ")}`
        })
        return;
    }

    // CHECK IF USER ID EXIST OR NOT
    
    try{
        await pool.query(queryUpdateUser, [username, email, id]);
        res.status(200).json({
        message: "UPDATE USER SUCCESS"
    })
    } catch(error){

        res.status(500).json({
            message: "CANNOT UPDATE USER"
        })
        console.error("CANNOT UPDATE USER")
    }
    
}

