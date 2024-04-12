import { pool } from "../../database/DBinit.js";

const queryDeleteById = `
    DELETE FROM users WHERE id = $1;
`;

export async function deleteUserById(req,res){
    try{

        // CHECK USER ID EXIST OR NOT

        const id = req.params.id;

        await pool.query( queryDeleteById, [id]);
        res.status(200).json({
            message: "DELETE USER BY ID"
        })
        console.log("DELETE USER BY ID")

    }catch(error){
        res.status(404).json({
            message: "CANNOT DELETE USER BY ID",
            error: error.message
        })
        console.error("CANNOT DELETE USER BY ID")
    }
}