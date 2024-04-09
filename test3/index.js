import express from "express";
import { get } from "./controller/health.js";
import { post } from "./controller/health.js";
import { notFound } from "./controller/notFound.js";
import { connectDatabase } from "./database/dbinit.js";
import { insertValuesToTableUsers } from "./controller/users-controller/create.js";

const app = express();
const PORT = 1006;

// to read for html form and json from server
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// DATABASE CONNECTION
connectDatabase();

app.get("/", get);
app.post("/", post);
app.post("/users", insertValuesToTableUsers);

app.use("/", notFound)

app.listen(PORT, ()=>{
    console.log("SERVER CONNECTED")
});