// ------------------------------------Exercícios de interpretação de código 1 

// O código faz uma conversão de valores, através de uma função, com um parâmetro chamado valor em dolar, a função irá captar um valor através do prompt na const cotação, que dará um retorno de o cálculo do valor em dólar que está sendo informação e a cotação que será informada pelo usuário. Na const meuDinheiro é chamada a função indicando qual é o valor do seu parâmetro e então realiza o calculo chamado no return. O resultado apresentado no console, será o da conta valorEmDolar (100) * cotacao (5,60) = R$ 560.

// ------------------------------------Exercícios de interpretação de código 2

// O código mostra o resultado dos investimentos informado no laço tipoDeInvestimento. O switch case serve para multiplicar o valor informado pelo usuário pelo valor de cada investimento. No caso de nenhuma informação ser inserida, ou alguma informação for divergente, irá apresentar um alerta, informando que o tipo de investimento está incorreto. Tem um retorno do valor final já calculado. Na const novoMontante, referente as ações, o valor informado no console será de 150 * 1.1, totalizando 165. Na const segundoMontante, referente ao tesouro direto, será exibido o alert, pois Tesouro Direto não é um tipo de investimento válido.

// // ------------------------------------Exercícios de interpretação de código 3

// Temos três arrays, um com 14 números já definidos e os outros dois arrays estão vazios. Tem a chamada de um laço do tipo for, e um if para verificar dentro do array numeros quais são os números que possuem o resto de divisão igual a 0 (numeros pares), e inclui-los através do push dentro do array1, e no else, ficarão os números opostos ao if, onde o resto de divisão é diferente de 0,(números ímpares) irão ser incluídos através do push no array2, por fim será impresso no console, a frase junto da soma do tamanho do array "A quantidade total de numeros é 14", após isso,  irá aparecer somente a quantidade de itens no array1 "6" e após a quantidade de numeros do array2 que é 8.

// // ------------------------------------Exercícios de interpretação de código 4

// Temos um array com alguns números aleatórios e temos duas lets com variáveis, a variavel numero 1 recebe um valor igual a infinity e a variavel numero2 recebe um valor igual a 0. Logo abaixo, um laço com um for of que irá percorrer todo o array numeros e fará a busca de acordo com os if, no primeiro irá fazer uma busca de um número menor que infinito, e irá ir substituindo o valor de numero 1 de acordo com a busca realizada. Já no segundo if, ele irá percorrer o array numeros em busca de algum numero que seja maior que 0, e irá fazer a busca dentro do array e ir substiruindo os números até encontrar o ultimo numero do array maior que 0. No console irá aparecer o menor número (-10) e o maior número (1590) do array respectivamente.

// ---------------------------------------Exercícios de Lógica de Programação 1

// Podemos percorrer/iterar uma lista com: While, for, e for of.

// Ex1.
// let numeros = [15, 18, 21, 34, 85, 74]
// let numerosDoArray = () =>{
//  for (let i = 0; i<3; i++){
//   console.log(i)
//  }
// }
// numerosDoArray()

// Ex2.
// let nomesPersonagens = () =>{ 
// let texto = " "
// const arrayDePersonagens = ["Peach,", "Mario,", "Daisy,", "Luigi"]
// for(let string of arrayDePersonagens){
//     texto = texto + " " + string

// }
//     console.log("Estes são os personagens do universo Super Mário:" + texto)
// }
// nomesPersonagens()

// // Ex3.
// let soma = 0
// let numero
// let somaDosNumeros = () => { 
// while(numero !== 0){
//     numero = Number(prompt("Digite um número!"))
//     soma = soma + numero
// }
//     console.log(soma)
// }
// somaDosNumeros()

// ---------------------------------------Exercícios de Lógica de Programação 2
// const booleano1 = true
// const booleano2 = false
// const booleano3 = true
// const booleano4 = false

// a) booleano1 && booleano2 && !booleano4
//  False

// // b) (booleano1 && booleano2) || !booleano3 
// False

// c)  (booleano2 || booleano3) && (booleano4 || booleano1)
// True

// d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
// True

// e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
// True