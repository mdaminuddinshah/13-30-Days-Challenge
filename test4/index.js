import express from "express";
import { checkConnection } from "./controller/health.js";
import { editConnection } from "./controller/health.js";
import { connection } from "./database/DBinit.js";
import { createUser } from "./controller/users-controller/create.js";
import { readAllUsers, readUserById } from "./controller/users-controller/read.js";
import { updateUser } from "./controller/users-controller/update.js";
import { deleteUserById } from "./controller/users-controller/delete.js";

const app = express();
const PORT = 1005;

// to access json body
app.use(express.json());

// to access html form
app.use(express.urlencoded({extended: true}));

// DATABASE
connection();

app.get("/", checkConnection);
app.post("/", editConnection);
app.post("/users", createUser);
app.get("/users", readAllUsers);
app.get("/users/:hello", readUserById);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUserById);

app.listen(PORT, () => {
    console.log("CONNECTED")
})


