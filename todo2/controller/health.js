export function testHealth(req,res){
    res.status(200);
    res.send("hello aminuddin");
}

export function setHealth(req,res){
    const bodyJSON = req.body;
    const sendIt = res.status(200).json({
        message: "here the data",
        data: bodyJSON
    })

    res.send(bodyJSON)
    
}