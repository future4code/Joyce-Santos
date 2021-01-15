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

const updateUser = async (
  id: string,
  name: string,
  nickname: string
): Promise<any> => {
  const result = await connection.raw(
    `UPDATE TodoListUser SET name = "${name}", nickname = "${nickname}" WHERE id = "${id}"`
  );

  return result[0];
};

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    await updateUser(req.params.id, req.body.name, req.body.nickname);

    if (!req.body.name || !req.body.nickname) {
      errorCode = 422;
      throw new Error("Verifique se todos os dados estão preenchidos.");
    }
    res.status(200).send("Usuário alterado com sucesso!");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Endpoint que cria uma tarefa

const createTask = async (
  title: string,
  description: string,
  limit_date: string,
  creator_user_id: string
): Promise<void> => {
   const date = limit_date;
   const newDate = date.split("/").reverse().join("-");

  await connection
    .insert({
      id: Date.now(),
      title: title,
      description: description,
      limit_date: newDate,
      creator_user_id: creator_user_id,
    })
    .into("TodoListTask");
};

app.post("/task", async (req: Request, res: Response) => {
  try {
    await createTask(req.body.title, req.body.description, req.body.limit_date, req.body.creator_user_id);

    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.limit_date ||
      !req.body.creator_user_id
    ) {
      throw new Error("Informação essencial não encontrada. Favor revisar.");
    }

    res.status(200).send("Tarefa incluída com sucesso!");
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Endpoint que pega uma tarefa pelo id
const getTaskById = async(id: string): Promise<any> => {
   const result = await connection('TodoListTask')
   .select(
       'id as taskId', 
       'title', 
       'description', 
       'status', 
       'limit_date as limitDate',
       'creator_user_id as creatorUserId'
   )
   .where('id', id);

   return result[0];
}

app.get("/task/:id", async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id as string;
    const task = await getTaskById(id);

    const zero = (number: number) => {
      if (number <= 9) {
        return `0${number}`;
      } else {
        return number;
      }
    };
    const dateNewFormat = (stringDate: string): string => {
      const date = new Date(stringDate);
      const day = zero(date.getDate());
      const month = zero(date.getMonth() + 1);
      const year = date.getFullYear();
      const formatedDate = `${day}/${month}/${year}`;
      return formatedDate;
    };

    const formatDate = dateNewFormat(task.limitDate);

    if (task.length < 1) {
      errorCode = 422;
      throw new Error("Tarefa inexistente");
    }

    res.status(200).send({
        task: {
        taskId: id,
        title: task.title,
        description: task.description,
        status: task.status,
        limitDate: formatDate,
        creatorUserId: task.creatorUserId,
      },
    });
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
