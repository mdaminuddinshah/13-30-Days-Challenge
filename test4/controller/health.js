export function checkConnection(req,res){
    res.status(200);
    res.send("CONNECTED")
};

export function editConnection(req,res){
    const body = req.body;
    res.status(200).json({
        message: "CONNECTED",
        data: body
    });
};