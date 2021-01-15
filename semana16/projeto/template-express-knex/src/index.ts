import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

// endpoints aqui

// Endpoint que cria um usuário
const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
    .insert({
      id: Date.now(),
      name: name,
      nickname: nickname,
      email: email,
    })
    .into("TodoListUser");
};

app.post("/newuser", async (req: Request, res: Response) => {
  try {
    await createUser(req.body.name, req.body.nickname, req.body.email);

    if (!req.body.name || !req.body.nickname || !req.body.email) {
      throw new Error("Informação essencial não encontrada. Favor revisar.");
    }

    res.status(200).send("Usuário criado com sucesso!");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Endpoint que busca um usuário pelo Id
const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(
    `SELECT * FROM TodoListUser WHERE id= ${id} `
  );

  return result[0];
};

app.get("/user/:id", async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const searchUsers = await getUserById(req.params.id);

    if (searchUsers.length < 1) {
      errorCode = 422;
      throw new Error("Id inexistente");
    }

    res.status(200).send({ users: searchUsers });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Endpoint que altera um usuário

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
