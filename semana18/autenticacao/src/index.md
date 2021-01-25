### EXERCÍCIO 1

a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
RES: Creio que facilita na ciração dos ids, pois pode ser usado qualquer caractere. E talvez por isso seja melhor do que usar números.

b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.

```typescript
    import { v4 } from "uuid";

    export function generateId(): string {
        return v4();
    }
```

### EXERCÍCIO 2

a. Explique o código acima com as suas palavras.
RES: Foi criado uma const que irá receber os dados da tabela e substituirá o nome da tabela nas querys.

b. Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
```sql
CREATE TABLE user(
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

```

c. Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.

```typescript
const userTableName = "user";

const createUser = async (
  id: string,
  email: string,
  password: string
): Promise<any> => {
  await connection.raw(`
    INSERT INTO ${userTableName} (id, email, password)
    VALUES ("${id}", "${email}", "${password}")
    
    `);
};

```

### EXERCÍCIO 3

a. O que a linha as string faz? Por que precisamos usar ela ali?
RES: O "as string" informa que ali deverá ser inserido uma string

b. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
```typescript
import * as jwt from 'jsonwebtoken'

const expiresIn = "1min";

export function generateToken(input: AuthenticationData): string{
    const token = jwt.sign(
        {
            id: input.id,
        }, 
            process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )
    return token;
}
type AuthenticationData = {
    id: string

}

```

### EXERCÍCIO 4
a. Crie o endpoint que realize isso, com as funções que você implementou anteriormente.
b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@".
c. Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais.
```typescript
// No index.ts
app.post("/signup", postUser);

// No postCreateUser.ts
export async function postUser(req: Request, res: Response) {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("E-mail inválido");
    }
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha inválida");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const id = generateId();

    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
```

### EXERCÍCIO 5

a. Crie uma função que retorne as informações de um usuário a partir do email

```typescript
export const getUserByEmail = async (
    email: string
): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM ${userTableName}
    WHERE (${email})
    `)
    return result[0]
}
```