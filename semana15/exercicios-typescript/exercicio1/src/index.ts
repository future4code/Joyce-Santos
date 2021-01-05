//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = "Miya" //Resposta: Quando colocado um númeto no valor da váriável, ela pede que o valor corresponda ao tipo declarado, ao colocar número, onde está o tipo string ela nao aceita.

//b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

// const meuNumero: number | string = "tlinta"; // Resposta: Para aceitar também string devemos colocar o sinal | de union type, para que aceite os dois tipos de declarações.

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
//`nome`, que é uma string;
//`idade`, que é um número;
//`corFavorita`, que é uma string.
//Como você faria para garantir que o objeto só tenha as propriedades descritas acima? Faça a tipagem do objeto para que ele só aceite os valores acima.

// type person = {
//     name: string,
//     age: number,
//     favoriteColor: string
// }

// const pessoa = {
//     name: "Miya",
//     age: 21,
//     favoriteColor: "Azul",
// }

//d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

//A d) foi respondida na c)

//e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um `enum` para isso.
enum color {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    CIANO = "Ciano",
    AZUL = "Azul",
    ROXO = "Roxo"
}

type person = {
    name: string,
    age: number,
    favoriteColor: string
}



const pessoa = {
    name: "Miya",
    age: 21,
    favoriteColor: color.CIANO,
}