import express from "express";
import { getUsers, singleUser, addUser, } from "../controllers/usersController";

const app = express();

app.get("/users", getUsers);

app.post("/users", addUser);

app.get("/users/:id", singleUser);

export default app;
