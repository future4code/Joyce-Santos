import express, {Express} from 'express'
import cors from 'cors'
import knex from "knex"
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { signup } from './endpoints/signup';
import { login } from './endpoints/postLoginUser';
import { getProfileByToken } from './endpoints/getProfile';
import { postRecipe } from './endpoints/postCreateRecipe';
import { getRecipe } from './endpoints/getRecipe';
import { getOtherUserProfile } from './endpoints/getOtherUseProfile';

const app: Express = express();

app.use(express.json());
app.use(cors());
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

app.post("/signup", signup)
app.post("/login", login)
app.get("/user/profile", getProfileByToken)
app.post("/recipes", postRecipe)
app.get("/recipes/:id", getRecipe)
app.get("/user/:id", getOtherUserProfile)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});