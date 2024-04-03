import express from "express";

const app = express();
const PORT = 1003;

app.get("/", (req,res) => {

    // what res.status does ?
    // res.status is to set HTTP status code for response to client
    // this status is response for client from server
    // this is server, we request and send status code to client

    // what is .json() used for
    // json() is used to send message and data from server to client-sides
    res.status(200).json({
        message: "hello there!",
        data: true
    })
})


// why use app.use()
// app.use() is middleware, used to handle request for not exist route
// so if the above route cannot handle not state request, below middleware will handle the request and response to client
app.use((req,res) => {
    res.status(404).json({
        message: "not exist lah bro"
    })
})

app.listen(PORT, () => {
    console.log("successfully connected")
})