import express, { Request, Response } from 'express';
import cors from 'cors';

import {AddressInfo} from 'net'

const app = express();

app.use(express.json());
app.use(cors());

function getAge(birthdate: string) {
  const today = new Date();
  const birthday = new Date(birthdate);
  
  let year = today.getFullYear() - birthday.getFullYear();
  const month = today.getMonth() - birthday.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
    year--;
  }
  
  return year;
}


function isOverAge(birthdate: string) {
    const age = getAge(birthdate);
    console.log(age);
    return age >= 18 ? true : false;
}

type user = {
    id: number,
    name: string,
    cpf:string,
    birthdate: string,
    balance: number,
    transactions: transactions[]
}

type transactions = {
    value: number,
    date: string,
    description: string

}


let users: user[] = [
  {
    id: 1,
    name: "Miya",
    cpf: "123.456.789-00",
    birthdate: "14-05-1998",
    balance: 0,
    transactions: [{
      value: 100,
      date: "08-01-2021",
      description: "Compra de flechas novas.",
    }],
  },
];

app.post("/novaconta", (req: Request, res: Response)=>{
    let errorCode = 400;

    try {
        const newAccount: user = {
          id: Date.now(),
          name: req.body.name,
          cpf: req.body.cpf,
          birthdate: req.body.birthdate,
          balance: 0,
          transactions: req.body.transactions,
        };

        // if(newAccount.cpf === users.cpf){
        //     errorCode = 422;
        //     throw new Error("CPF já cadastrado!");

        // }

        if(!newAccount.name || !newAccount.cpf || !newAccount.birthdate){
            errorCode = 422;
            throw new Error("Verifique os campos e preencha novamente!");
            
        }

        if(!isOverAge(req.body.birthdate)){
            errorCode = 401;
            throw new Error("Precisa ter mais de 18 para se cadastrar.");
            
        }

        users.push(newAccount);

        res.status(200).send({message: "Conta criada com sucesso!" })
        
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
        
    }
})

app.get("/usuarios", (req: Request, res: Response) => {
  const result = users.map((user) => ({
    id: user.id,
    name: user.name,
    cpf: user.cpf,
    birthdate: user.birthdate,
    balance: user.balance,
    transactions: user.transactions,
  }));

  res.status(200).send(result);
});

app.put("/depositos/:id", (req: Request, res: Response) =>{
    let errorCode = 400;

    try {
        const addBalance: {id: number, name: string, cpf: string, balance: number} = {
            id: Number(req.params.id),
            name: req.body.name,
            cpf: req.body.cpf,
            balance: req.body.balance
        }

        if(!addBalance.name || !addBalance.cpf ){
            errorCode = 422;
        }

        if(isNaN(Number(addBalance.id))){
        errorCode = 422
        throw new Error("Id inválido!");
        }

        const userIndex = users.findIndex(((user: user) => user.id === Number(addBalance.id)));

    if (userIndex === -1){
        errorCode = 404;
        throw new Error("Usuário não encontrado"); 
    }

    users[userIndex].balance = addBalance.balance + users[userIndex].balance;

    res.status(200).send({ message: "Dinheiro adicionado com sucesso!" });

        
    } catch (error) {
        
    }

} )








const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
