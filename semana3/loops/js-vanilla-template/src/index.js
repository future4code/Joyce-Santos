// ----------Exercícios de interpretação de código----------
// EXERCICIO 1

// O que o código abaixo está fazendo? Qual o resultado impresso no console?

// O código está buscando os resultados de valor, fazendo a busca entre numeros menor que 5, quando vai somando, chega ao resultado da impressão que é 10.

// EXERCICIO 2

// a. O que vai ser impresso no console?

// Será impresso os númetos da lista que são maiores que 18, ou seja: 19, 21, 23, 25, 27, 30

// b. Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

// Só o for...of... não é suficiente, pois precisaria chamar o índice com uma outra variável.

// ----------Exercícios de escrita de código----------

// EXERCICIO 3

// 3- a
//  const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let i = 0; i < lista.length; i++) {
// let elemento = lista[i]
// console.log(elemento)
// }

// 3- b
// const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// for (let i = 0; i < lista.length; i++) {
//   let elemento = lista[i];
//   console.log(elemento / 10);
// }

// 3- c
// const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// const novaLista = [];

// for (let i = 0; i < lista.length; i++) {
//   if (lista[i] % 2 === 0) {
//     novaLista.push(lista[i]);
//   }
// }
// console.log(novaLista);

// 3- d

// const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let contador = 0;
// for (let numero of lista) {
//   console.log(
//     "O elemento do index" + " " + contador + " " + "é" + " " + numero
//   );
//   contador++;
// }

// 3- e

// const lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// let i = 0;
// let maiorValor = 0;
// let menorValor = Infinity;
// for (let numero of lista) {
//   if (numero > maiorValor) {
//     maiorValor = numero;
//   }
//   if (numero < menorValor) {
//     menorValor = numero;
//   }
// }
// console.log(
//   "O maior valor é:" + " " + maiorValor + " " + "e o menor é" + " " + menorValor
// );


