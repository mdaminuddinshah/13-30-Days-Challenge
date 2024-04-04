import express from "express";

import allRequest from "./controller/health.js";
import notFound from "./controller/notFound.js";
import { testConnection } from "./database/connection.js";

const app = express();
const PORT = 1003;

// Middleware
// to extract json request data use express.json()
app.use(express.json());

// Middleware
// to extract HTML form to server using express.urlencoded({extended: true})
app.use(express.urlencoded({extended: true}));

// database
testConnection();

app.get("/", allRequest.get);
app.post("/", allRequest.post);

// why use app.use() ,app.use() is middleware, used to handle request for not exist route
// so if the above route cannot handle not state request, below middleware will handle the request and response to client
app.use(notFound)

app.listen(PORT, () => {
    console.log("successfully connected")
})