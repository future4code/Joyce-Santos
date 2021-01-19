import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getAllUsersByNameOrType } from "./endpoints/getByNameOrType";
import { getUsersByLimit } from "./endpoints/getUserByLimit";
import { getUsersByFilters } from "./endpoints/getAllUsersByFilter";


dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// EXERCICIO 1

//a. Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por nome.
app.get("/users/search", getUserByName);

//b. Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de usuário. O tipo de usuário deve ser passado por path params.
app.get("/users/search/:type", getUserByType);

//EXERCÍCIO 2: Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user.
app.get("/users/all/:orderBy", getAllUsersByNameOrType);

//EXERCÍCIO 3: Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez.
app.get("/users/all/:page", getUsersByLimit);

//EXERCÍCIO 4

app.get("/users/filter", getUsersByFilters);




const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});