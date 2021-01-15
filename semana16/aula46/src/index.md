### EXERCÍCIO 1

a. Explique como é a resposta que temos quando usamos o raw. 
RESPOSTA: O raw devolve metadados além dos que foram requisitados.

b. Faça uma função que busque um ator pelo nome;

```typescript
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE name = "${name}"
  `);
  return result[0];
};

app.get('/actors/search', async (req:Request, res:Response) => {
  try {

    const name = req.query.name as string;
    const myActor = await searchActor(name)
  

    res.status(200).send({actor: myActor})
  } catch (error) {
    res.status(400).send(error.message)
  }
})

```
c. Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

```typescript
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
  // o valor no resultado!
  const count = result[0][0].count;
  return count;
};

app.get('/actors', async (req:Request, res:Response) => {
  try {

    const gender = req.query.gender as string;
    const genders = await countActors(gender)
  

    res.status(200).send({gender: genders})
  } catch (error) {
    res.status(400).send(error.message)
  }
})

 ```

 ### EXERCÍCIO 2

 a. Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão.

 ```typescript

 const updateSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

 ```

 b. Uma função que receba um id e delete um ator da tabela
 ```typescript
 const delActor = async (id: string): Promise<void> => {
     await connection("Actor")
     .delete()
     .where("id", id)
 }
 ```

 c. Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

  ```typescript
  const salaryGender = async (gender: string): Promise<any> =>{
      await connection ("Actor");
      .avg("Salary as average");
      .where({gender});
      return result[0].average;
  }

 ```
### EXERCÍCIO 3

a. Crie um endpoint com as especificações acima

```typescript

app.get('/actors/:id', async (req:Request, res:Response) => {
  try {

    const id = req.params.id as string;
    const actor = await getActorById(id)
  

    res.status(200).send(actor)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

 ```

 b. Crie um endpoint agora com as seguintes especificações: Deve ser um GET (/actor), Receber o gênero como um query param (/actor?gender=), Devolver a quantidade de atores/atrizes desse gênero.

 ```typescript

app.get('/actors', async (req:Request, res:Response) => {
  try {

    const gender = req.query.gender as string;
    const genders = await countActors(gender)
  

    res.status(200).send({gender: genders})
  } catch (error) {
    res.status(400).send(error.message)
  }
})

 ```

 ### EXERCÍCIO 4

 a. Crie um endpoint para cada uma das especificações abaixo: Deve ser um POST (/actor), Receber o salário e o id pelo body, Simplesmente atualizar o salário do ator com id em questão.

 ```typescript
 app.post('/actors', async (req:Request, res:Response) => {
  try {
    const update = await updateSalary((req.body.id), req.body.salary);
  
    res.status(200).send("Salário atualizado!")
  } catch (error) {
    res.status(400).send(error.message)
  }
})

 ```

 b. Crie um endpoint para cada uma das especificações abaixo: Deve ser um DELETE (/actor/:id), Receber id do ator como path param, Simplesmente deletar o ator da tabela.

 ```typescript
 app.delete('/actors/:id', async (req: Request, res: Response) =>{
   try {
     const deleteActor = await delActor(req.params.id)
     res.status(200).send("Ator deletado com sucesso!")
   } catch (error) {
     res.status(400).send(error.message)
   }
 })
  ```

### EXERCÍCIO 5

```typescript
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
   ```

   ### EXERCÍCIO 6

```typescript
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
 ```

### EXERCÍCIO 7

```typescript
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
 ```




