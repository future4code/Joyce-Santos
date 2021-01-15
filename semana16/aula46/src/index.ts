import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

/**************************************************************/
const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

app.post('/actors/', async (req:Request, res:Response) => {
  try {
    const update = await updateSalary((req.body.id), req.body.salary);
  
    res.status(200).send("Salário atualizado!")
  } catch (error) {
    res.status(400).send(error.message)
  }
})

/**************************************************************/

const delActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

 app.delete('/actors/:id', async (req: Request, res: Response) =>{
   try {
     const deleteActor = await delActor(req.params.id)
     res.status(200).send("Ator deletado com sucesso!")
   } catch (error) {
     res.status(400).send(error.message)
   }
 })

 /**************************************************************/

 const createMovie = async (
   id: string,
   title: string,
   synopsis: string,
   release_date: Date,
   playing_limit_date: Date
 ) => {
   await connection
     .insert({
       id: id,
       title: title,
       synopsis: synopsis,
       release_date: release_date,
       playing_limit_date: playing_limit_date,
     })
     .into("Movies");
 };

 app.post("/movies", async (req: Request, res: Response)=>{
   try {
     await createMovie(
       req.body.id,
       req.body.title,
       req.body.synopsis,
       req.body.release_date,
       req.body.playing_limit_date
     )

     res.status(200).send("Filme adicionado com sucesso!")
   } catch (error) {
      res.status(400).send({
        message: error.message,
      });
     
   }
 })

  /**************************************************************/

 const allMovies = async (): Promise<any> => {
   const result = await connection.raw(`
  SELECT * FROM Movies LIMIT 15
  `);

   return result[0];
 };

 app.get("/movies/all", async (req: Request, res: Response) => {
   try {
     const movies = await allMovies();

     res.status(200).send({ movies: movies });
   } catch (error) {}
 });

 /**************************************************************/

 const searchMovies = async (query: string): Promise<any> =>{
   const result = await connection.raw(`
   SELECT * FROM Movies 
   WHERE title LIKE "%${query}%" OR synopsis LIKE "%${query}%"
   ORDER BY release_date ASC
   `);
   return result[0];
 }


 app.get("/movies/search", async (req: Request, res: Response) => {
   try {
     const movies = await searchMovies(req.query.query as string);

     res.status(200).send({
       movies: movies,
     });
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });




