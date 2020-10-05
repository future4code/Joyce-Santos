// -------------------------------------EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO 1-------------------------------------------

// 1 a) Irá imprimir o resultado da multiplicação da variável minhaFuncao * o numero 5, no caso seriam 10 e 50 respectivamente.

// 1 b) Não aconteceria nada, pois esse tipo de função nomeada, precisa do console.log para poder imprimir o resultado.


// -------------------------------------EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO 2------------------------------------------

// 2 a) O console irá imprimir os nomes dos dois primeiros do array, pois o for pede para imprimir enquanto i for menor que 2, no caso do array começando em 0, imprimiu os dois primeiros índices, parando antes de chegar no 2.

// 2 b) Seria impresso os nomes Amanda e Caio, pois também são os indices 0 e 1 do array.

// -------------------------------------EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO 3------------------------------------------


// 3 Faz uma verificação se o número é par ou ímpar, no caso se for par (o resto da % for igual a 0) ele irá incluir no array vazio como um resultado de uma multiplicação de x * x.

//----------------------------------------- EXERCICIOS DE ESCRITA DE CÓDIGO 4-----------------------------------------

// ---------------------------------------------Exercicio 4a.------------------------------------------------------------

// let sobreMim = () => {
//     console.log("Eu sou a Joyce, tenho 31 anos, moro em São Paulo e no momento sou estudante.");
// }

// sobreMim()


//--------------------------------------------- Exercicio 4b.-----------------------------------------------------------

// let sobreMim = (nome, idade, cidade, estudante) => {

//     nome = prompt("Digite seu nome")
//     idade = Number(prompt("Agora sua idade"))
//     cidade = prompt("Qual cidade você mora?")
//     estudante = prompt("Você estuda atualmente?")


//         if (estudante === "sim"){
//              estudante = "sou estudante"

//         }else{ 
//              estudante = "não sou estudante."
//           }


//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}.`)
// }
// sobreMim()

// --------------------------------------------------Exercicio 5a--------------------------------------------------------

// let somaDosNumeros = (a, b) => {
//     const soma = a + b
//     console.log(soma)

// }

// somaDosNumeros(5, 9)

// --------------------------------------------------Exercicio 5b--------------------------------------------------------

// let numero = (numeroA, numeroB) => {

//     numeroA = Number(prompt("Digite um número."))
//     numeroB = Number(prompt("Digite outro número."))

//          if (numeroA >= numeroB) {
//              console.log("O primeiro número é maior")
//          } else{
//              console.log("O segundo número é maior")

//          }

// }

// numero()

// --------------------------------------------------Exercicio 5c--------------------------------------------------------

// let mensagem = (frase) => {
//     for (let i = 0; i < 10; i++){
//         console.log(frase)
//     }

// }

// mensagem("O que estou fazendo da minha vida?")


// --------------------------------------------------Exercicio 6a--------------------------------------------------------

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let tamanhoDoArray = (array) => {
//     return array.length
// }
// console.log(tamanhoDoArray(array))

// --------------------------------------------------Exercicio 6b--------------------------------------------------------
// let paridade = (numero) => {
//     if (numero %2 === 0){
//         return true
//     }else{
//         return false
//     }
// }

// let resultado = paridade(78)
// let resultado2 = paridade(23)

// console.log(resultado)
// console.log(resultado2)


// --------------------------------------------------Exercicio 6c--------------------------------------------------------

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let quantidadeDePares = (array) => {
//     let paridadeDoArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             paridadeDoArray.push(array[i])

//         }
//     }
//     return paridadeDoArray.length
// }
//  let resultado = quantidadeDePares(array)
//  console.log(resultado)


// --------------------------------------------------Exercicio 6d--------------------------------------------------------

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let paridade = (numero) => {
    if (numero %2 === 0){
        return true
    }else{
        return false
    }
}

let verificacaoDeParidade = (array) => {
    for(const i of array){
        paridade(i)
        console.log(paridade(i))
    }
}

function quantidadeDePares (array) {
    let pares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] %2 === 0) {
            pares.push(array[i])
        }
    }
    return pares.length
}

let resultado = quantidadeDePares(array)
let resultado2 = verificacaoDeParidade(array)
console.log(resultado)
console.log(resultado2)

