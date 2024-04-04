function get(req,res){

    // what res.status does ?
    // res.status is to set HTTP status code for response to client
    // this status is response for client from server
    // this is server, we request and send status code to client

    // what is .json() used for
    // json() is used to send message and data from server to client-sides
    res.status(200).json({
        message: "successfully connected bro",
        data: true
    })
}

function post(req,res){
    const body = req.body;
    const obj = {
        message: "hello",
        data: body,
    };

    res.status(200).json(obj)
}

const allRequest = {
    get,
    post
}

export default allRequest;



