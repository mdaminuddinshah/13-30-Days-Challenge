import express from "express";
import Home from "./controller/Home.js";

const app = express();
const port = 1001;

// middleware: to read css file
app.use(express.static("public"));

// middleware: to read body html from server to client
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", Home);

app.listen(port)
