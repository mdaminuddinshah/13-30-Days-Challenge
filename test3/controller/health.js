export function get(req,res){
    res.status(200);
    res.send("hello amin")
    console.log("HEALTHY")
}

export function post(req,res){
    const data = req.body
    res.status(200).json({
        DATA: data
    })
}
