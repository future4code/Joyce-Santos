import express, { Request, Response } from 'express';
import cors from 'cors';

import {AddressInfo} from 'net'

const app = express();

app.use(express.json());
app.use(cors());

type user = {
    id:number,
    name: string,
    cpf:number,
    birthdate: number,
    balance: number
}

type extract = {
    value: number,
    date: number,
    description: string

}

let users: user[] = [
    {
        id: 1,
        name: "Miya",
        cpf: 12345678900,
        birthdate: 14051998,
        balance: 5000

    }
]

app.post("/novaconta", (req: Request, res: Response)=>{
    let errorCode = 400;

    try {
        const newAccount: user = {
            id: Date.now(),
            name: req.body.name,
            cpf: req.body.cpf,
            birthdate: req.body.birthdate,
            balance: req.body.balance
        }

        // if(newAccount.cpf === users.cpf){
        //     errorCode = 422;
        //     throw new Error("CPF já cadastrado!");

        // }

        if(!newAccount.name || !newAccount.cpf || !newAccount.birthdate){
            errorCode = 422;
            throw new Error("Verifique os campos e preencha novamente!");
            
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
  }));

  res.status(200).send(result);
});








const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
