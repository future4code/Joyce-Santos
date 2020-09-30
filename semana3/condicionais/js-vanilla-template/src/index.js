// EXERCÍCIO 1

/*const respostaDoUsuario = prompt("Digite o número que você quer testar");
const numero = Number(respostaDoUsuario);

if (numero % 2 === 0) {
  console.log("Passou no teste.");
} else {
  console.log("Não passou no teste.");
}

/*Explique o que o código faz:
O código da questão irá calcular o resto da divisão realizada pelo número digitado pelo usuário e o número 2.

Qual o teste que ele realiza? 
Se os números são pares ou ímpares.

Para que tipos de números ele imprime no console "Passou no teste"? 
Irá imprimir para os números pares, cujo o resultado é igual a 0

Para que tipos de números a mensagem é "Não passou no teste"? 
Irá imprimir para os números ímpares, cujo o resultado é igual a 1*/

// EXERCÍCIO 2

/*let fruta = prompt("Escolha uma fruta");
let preco;
switch (fruta) {
  case "Laranja":
    preco = 3.5;
    break;
  case "Maçã":
    preco = 2.25;
    break;
  case "Uva":
    preco = 0.3;
    break;
  case "Pêra":
    preco = 5.5;
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5;
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);

/* a. Para que serve o código acima?
Serve para dar o preço da fruta selecionada pelo cliente.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta Maçã é R$ 2.25.

c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
O preço da fruta Pêra é R$ 5
*/

// EXERCÍCIO 3

/*const numero = Number(prompt("Digite o primeiro número."));

if (numero > 0) {
  console.log("Esse número passou no teste");
  let mensagem = "Essa mensagem é secreta!!!";
}

console.log(mensagem);

/*a. O que a primeira linha está fazendo?
Solicitando para o usuário digitar um número.

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
Esse número passou no teste.

E se fosse o número -10?
Nada acontece.


c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
O console.log(mensagem) não está dentro da if "pai"
*/

// EXERCÍCIO 4

/*const idadeUsuario = Number(prompt("Digite aqui a sua idade."))
const idadeParaDirigir = "18"
    if (idadeUsuario >= idadeParaDirigir ){
console.log("Parabéns você poderá ter habilitação!!!")
}else{
    console.log("Desculpe, você ainda não tem idade para isso.")
}*/

// EXERCÍCIO 5

/*const matutino = "M"
const vespertino = "V"
const noturno = "N"
const turno = prompt(`"Qual seu turno? Digite ${matutino}, ${vespertino} ou ${noturno}"."`) 

if (turno === matutino) {
  console.log("Bom Dia!");
} else if (turno === vespertino) {
  console.log("Boa Tarde!");
} else if (turno === noturno) {
  console.log("Boa Noite!");
}*/           

// EXERCÍCIO 6

/*const matutino = "M"
const vespertino = "V"
const noturno = "N"
const turno = prompt(`"Qual seu turno? Digite ${matutino}, ${vespertino} ou ${noturno}"."`) 

switch (turno) {
  case "M":
    console.log("Bom Dia!");
    break;

  case "V":
    console.log("Boa tarde!");
    break;

  case "N":
    console.log("Boa Noite!");
    break;
}*/

// EXERCÍCIO 7

/*const genero = prompt("Qual gênero você quer assistir hoje?")
const valor = Number(prompt("Qual o valor você quer pagar no ingresso?"))
if (genero === 'fantasia' && valor <= 15){
    console.log("Bom Filme!!!")
} else {
    console.log("Escolha outro filme :(")
}*/

// DESAFIO 1
/*const genero = prompt("Qual gênero você quer assistir hoje?")
const valor = Number(prompt("Qual o valor você quer pagar no ingresso?"))
const snack = prompt ("Qual snack que você quer comprar?")
if (genero === 'fantasia' && valor <= 15 && snack){
    console.log("Bom Filme, com " + snack + "!!!")
} else {
    console.log("Escolha outro filme :(")
}*/

// DESAFIO 2

/*let nomeCompleto = prompt("Digite aqui seu nome completo.")
let tipoDeJogo = prompt("Digite qual o tipo de jogo. IN para internacional e DO para nacional.")
let etapaDoJogo = prompt("Qual a etapa do jogo? Digite SF para semi-final; DT para decisão de terceiro lugar; e FI para final"
);
let categoria = Number(prompt("Escolha a categoria do ingresso. Digite 1, 2, 3 ou 4."))
let quantidade = Number(prompt("Digite a quantidade de ingressos que você quer comprar."))
let valorDoIngresso
let valorTotal

if (etapaDoJogo === "SF"){
    etapaDoJogo = "Semi-final"
    switch (categoria){
        case 1 :
            valorDoIngresso = 1320
            break
        case 2 : 
            valorDoIngresso = 880
            break
        case 3 :
            valorDoIngresso = 550
            break
        case 4 :
            valorDoIngresso = 220
            break        
    }

} else if (etapaDoJogo === "DT"){
    etapaDoJogo = "Decisão de 3º lugar"
    switch (categoria){
        case 1 :
            valorDoIngresso = 660
            break
        case 2 : 
            valorDoIngresso = 440
            break
        case 3 :
            valorDoIngresso = 330
            break
        case 4 :
            valorDoIngresso = 170
            break
    }
} else if (etapaDoJogo === "FI"){
    etapaDoJogo = "Final"
    switch (categoria){
        case 1 :
            valorDoIngresso = 1980
            break
        case 2 : 
            valorDoIngresso = 1320
            break
        case 3 :
            valorDoIngresso = 880
            break
        case 4 :
            valorDoIngresso = 330
            break
        
        default: console.log("Categoria inválida")
    }
}

if (tipoDeJogo === "IN"){
    valorDoIngresso = valorDoIngresso /4.1
    
}

valorTotal = valorDoIngresso * quantidade

console.log("---Dados da compra---")
console.log(`Nome do cliente: ${nomeCompleto}`)
console.log(`Tipo de jogo: ${tipoDeJogo}`)
console.log(`Etapa do jogo: ${etapaDoJogo}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de ingressos: ${quantidade}`)
console.log("---Valores--- ")
console.log(`Valor do ingresso: ${valorDoIngresso}`)
console.log(`Valor total:  ${valorTotal}`)*/



