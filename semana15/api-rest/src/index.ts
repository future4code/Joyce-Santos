//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

// ENDPOINT 1

app.get("/users", (req: Request, res: Response) =>{
    const result = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        type: user.type,
        age: user.age
    }))

    res
    .status(200)
    .send(result)

})

//1a. Qual método HTTP você deve utilizar para isso? RESPOSTA: GET.

//1b. Como você indicaria a entidade que está sendo manipulada? RESPOSTA: /users logo após o GET.

//----------------------------------------------------------------------------------------------------------------------------------------------

// ENDPOINT 2

app.get("/users/search", (req: Request, res: Response) => {
   
    let errorCode: number = 400;

    try {
      const type: string = req.query.type as string;
      if (!type) {
        errorCode = 422;
        throw new Error("Tipo inválido");
      } 

        const searchType = users.filter((user) => user.type === type.toUpperCase());

        const result = searchType;
        res.status(200).send(result);
 
           
    } catch (error) {
        res.status(errorCode).send(error.message);
        
    }
});

//2a. Como você passou os parâmetros de type para a requisição? Por quê? RESPOSTA: Query String, porque por padrão todo método GET se passa o parâmetro na URL.

//2b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados? RESPOSTA: Utilizando o ENUM

//----------------------------------------------------------------------------------------------------------------------------------------------

// ENDPOINT 3

app.get("/users/search", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const name: string = req.query.name as string;
    
    if (!name) {
      errorCode = 422;
      throw new Error("Usuário não encontrado");
    }

    const searchUser = users.filter((user: user) => user.name.toLowerCase() === name.toLowerCase());
    
    
    const result = searchUser;
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//3a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui? RESPOSTA: Query String

//----------------------------------------------------------------------------------------------------------------------------------------------

// ENDPOINT 4 

app.post("/users", (req: Request, res: Response)=>{
    let errorCode: number = 400;

    try {
        const newUser: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        if (!newUser.name || !newUser.email || !newUser.type || !newUser.age){
            errorCode = 422;
            throw new Error ("Algo deu errado! Verifique os campos e preencha corretamente.")
        }
          users.push(newUser);

          res.status(200).send({message: "Usuário inserido com sucesso!"})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
        
    }
});

// app.put("/users", (req: Request, res: Response) => {
//   let errorCode: number = 400;

//   try {
//     const newUser: user = {
//       id: Date.now(),
//       name: req.body.name,
//       email: req.body.email,
//       type: req.body.type,
//       age: req.body.age,
//     };

//     if (!newUser.name || !newUser.email || !newUser.type || !newUser.age) {
//       errorCode = 422;
//       throw new Error(
//         "Algo deu errado! Verifique os campos e preencha corretamente."
//       );
//     }
//     users.push(newUser);

//     res.status(200).send({ message: "Usuário inserido com sucesso!" });
//   } catch (error) {
//     res.status(errorCode).send({ message: error.message });
//   }
// });

//4a. Mude o método do endpoint para PUT. O que mudou? RESPOSTA: Não houve mudança, adicionou o usuário novamente.
//4b. Você considera o método PUT apropriado para esta transação? Por quê? RESPOSTA: Creio que seja adequado sim, no entando, manteria a utilização do POST, por sua versatilidade.

//----------------------------------------------------------------------------------------------------------------------------------------------

// ENDPOINT 5

app.put("/users/:id", (req: Request, res: Response) => {
  
    let errorCode: number = 400;

  try {
    const altUser: {id: number, name: string} = {
      id: Number(req.params.id),
      name: req.body.name,
     
    };

    if (!altUser.name ) {
      errorCode = 422;
      throw new Error(
        "Nome inválido, preencha corretamente!."
      );
    }

    if(isNaN(Number(altUser.id))){
        errorCode = 422
        throw new Error("Id inválido!");
        
    }

    const userIndex = users.findIndex(((user: user) => user.id === Number(altUser.id)));

    if (userIndex === -1){
        errorCode = 404;
        throw new Error("Usuário não encontrado"); 
    }

    users[userIndex].name = altUser.name;
    
    res.status(200).send({ message: "Usuário atualizado com sucesso!" });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

//----------------------------------------------------------------------------------------------------------------------------------------------

// ENDPOINT 6

app.patch("/user/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const realtUser: {id: number, name: string} = {
            id: Number(req.params.id),
            name: req.body.name
        }

        if(!realtUser.name){
            errorCode = 422
            throw new Error("Nome inválido, verifique e preencha novamente!");
        }

        if(isNaN(Number(realtUser.id))) {
            errorCode = 422;
            throw new Error("Id inválido");
        }

        const userIndex = users.findIndex(((user: user) => user.id === Number(realtUser.id)));

        if(userIndex === -1){
            errorCode = 404;
            throw new Error("Usiário não encontrado! Tente sua busca novamente!");

        }

        users[userIndex].name = realtUser.name;

        res.status(200).send({message: "Usuário atuaizado com sucesso!"})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
        
    }
});


//----------------------------------------------------------------------------------------------------------------------------------------------

// ENDPOINT 7

app.delete("/users/:id", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const userId = Number(req.params.id);

    if (isNaN(Number(userId))) {
      errorCode = 422;
      throw new Error("Id inválido");
    }

    const userIndex = users.findIndex((user: user) => user.id === userId);

    users.splice(userIndex, 1);

    res.status(200).send("Usuário deletado com sucesso!");
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

//----------------------------------------------------------------------------------------------------------------------------------------------

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
