import knex from "knex";
import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { AddressInfo } from "net";
import { postUser } from "./endpoints/postCreateUser";
import { postLogin } from "./endpoints/postLogin";
import { getUserById } from "./endpoints/getUserById";
import { deleteUser } from "./endpoints/deleteUserById";
import { getUserAll } from "./endpoints/getUserAll";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/signup", postUser);
app.post("/login", postLogin);
app.get("/user/profile", getUserById);
app.delete("/user/:id", deleteUser);
app.get("/user", getUserAll)

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
