import express from "express";
import { testHealth } from "./controller/health.js";
import { setHealth } from "./controller/health.js";
import { notFound } from "./controller/notFound.js";
import { testConnection } from  "./database/dbInit.js";
import { createUser } from "./controller/users.controller/create.js";

const app = express();
const PORT = 1006;

// to read json from body or client side
app.use(express.json());

// to parse html form into json
app.use(express.urlencoded({extended: true}));

// database connection
// create table
testConnection();

app.get("/", testHealth);
app.post("/", setHealth);

// create user for table users
app.post("/users", createUser);

// USE app.use if cannot find above routes 
app.use(notFound);

app.listen(PORT)

