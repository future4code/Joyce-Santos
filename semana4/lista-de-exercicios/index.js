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

// ---------------------------------------Exercícios de Lógica de Programação 3

// let i = 0
// const quantidadeDeNumerosPares = (numeros) =>{
//     while(i < numeros ){
//     console.log(i *2)
//     i++
//     }
// }
// quantidadeDeNumerosPares(5)

// ---------------------------------------Exercícios de Lógica de Programação 4

// const tamanhoDoTriangulo = (a, b, c) =>{
//     if (a === b && b === c){
//         console.log("Este triângulo é equilátero.")
//         return
//     } else if (a === b  && b !== c || a !== b && b === c || c === a && a !== b){
//         console.log("Este triângulo é isósceles.")
//         return
//     } else ( a !== b && b !== c)
//         console.log("Este triângulo é escaleno.")
//         return
//     }
//  tamanhoDoTriangulo(10, 15, 20)

// ---------------------------------------Exercícios de Lógica de Programação 5

// const numero1 = Number(prompt("Digite um número qualquer"))
// const numero2 = Number(prompt("Digite aqui, outro número qualquer"))

// let numerosSolicitados =() => {
//     if(numero1 > numero2){
//         console.log(`${numero1} é maior`)
//     } else if (numero2 > numero1){
//         console.log(`${numero2} é maior`)
//     } else
//     console.log("Os números são iguais")
//     }

//     if(numero1 % numero2 === 0){
//         console.log("É divisível")
//     } else
//     console.log("Não é divisível")

// let resultado = numero1 - numero2
//     if(resultado > 0){
//         console.log(`A diferença entre eles é ${resultado}`)

//     }else{
//         console.log(`A diferença entre eles é ${-resultado}`)
//     }
        
// numerosSolicitados()



// -----------------------------------Exercícios de Funções 1


// let arrayDeNumeros = () =>{
//     let array = [12, 2, 25, 76, 85, 96]
//     let numero1 = Infinity;
//     let numero2 = 0;
    

//     for(let numero of array){
//         if (numero < numero1){
//             numero1 = numero;
//         }

//             array.splice(1, 1)

            
//         if(numero > numero2){
//             numero2 = numero;
//         }

            
//             array.splice(5, 1)
//     }
//     console.log(numero1)
//     console.log(numero2)
   

//     }

// arrayDeNumeros()

// -----------------------------------Exercícios de Funções 2

// let olaMundo = () =>{
//     window.alert("Hello Labenu!!!")
    
// }

// olaMundo()

// -----------------------------------Exercícios de Objetos 1
// Os array servem para guardar e acessar mais de uma infomação ao mesmo tempo. E os objetos servem para guardar elementos, até mesmo arrays, de forma mais organizada.

// -----------------------------------Exercícios de Objetos 2
// let criaRetangulo = (lado1, lado2) =>{
//     const retangulo = {
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2*(lado1 + lado2),
//     area: lado1 * lado2
//     }
//     console.log(retangulo)
// }
// criaRetangulo()

// -----------------------------------Exercícios de Objetos 3


// let filmeFavorito = () =>{
// const filme = {
//     nome: "Dirty Dancing",
//     diretor: "Emile Ardolino",
//     lancamento: 1987,
//     elenco: ["Patrick Swayze", "Jennifer Grey"]
// }
//     console.log(`"Venha assistir ao ${filme.nome}, de ${filme.lancamento}, dirigido por ${filme.diretor} e estrelado por ${filme.elenco[0]} e ${filme.elenco[1]}`)
// }
// filmeFavorito()

// -----------------------------------Exercícios de Objetos 4

// const usuario ={
//     nome: "Joyce",
//     idade: "31", 
//     email: "psychokiller@yahoo.com.br",
//     endereco: "São Paulo"
// }
// let anonimizarPessoa = () =>{
//     const novoUsuario ={
//         ...usuario,
//         nome: "ANÔNIMO"
//     }
//     console.log(novoUsuario)
// }
// anonimizarPessoa()

// --------------------------------------Exercícios de Funções de array 1

// const arrayDeNomes = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// // a

// const pessoasAdultas = arrayDeNomes.filter((pessoas) =>{
//     if(pessoas.idade >= 20){
//         return true
//     } 

// })

// // b

// const pessoasCriancas = arrayDeNomes.filter((pessoas) =>{
//     if(pessoas.idade < 20){
//         return true
//     }
// })
// console.log(arrayDeNomes)
// console.log(pessoasAdultas)
// console.log(pessoasCriancas)

// --------------------------------------Exercícios de Funções de array 2

// a.
// const array = [1, 2, 3, 4, 5, 6]

// const numerosMultiplicados = array.map((numero)  => {
//     return numero * 2
    
// })
// console.log(numerosMultiplicados)

// // b.

// const multiplos = array.map((numero)  => {
//     return String(numero * 3)
    
// })
// console.log(multiplos)

// // c.
// const array = [1, 2, 3, 4, 5, 6]
//     const paridade = array.map((numero) => {
//             if(numero %2 === 0){
//             console.log(`${numero} é par`)
//             }else{
//             numero %2 !== 0
//             console.log(`${numero} é impar`)
//             }
//         })
//     console.log(paridade)

// --------------------------------------Exercícios de Funções de array 3

// const arrayDePessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// // a.
// const pessoasAutorizadas = arrayDePessoas.filter((pessoas) =>{
//     if(pessoas.idade > 14 && pessoas.idade < 60 && pessoas.altura > 1.5){
//         return true
//     }
// })
// console.log(pessoasAutorizadas)

// // b.
// const pessoasNaoAutorizadas = arrayDePessoas.filter((pessoas) =>{
//     if(pessoas.idade < 14 || pessoas.idade > 60 || pessoas.altura < 1.5){
//         return true 
//     }
// })
// console.log(pessoasNaoAutorizadas)

// --------------------------------------Exercícios de Funções de array 4

// const arrayConsultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const criarEmails = arrayConsultas.map((consulta) => {
//     let senhor;
//     let lembrar;
//     if(consulta.genero === "masculino"){
//         senhor = "Sr."
//         lembrar = "lembrá-lo"
//     }else{
//         senhor = "Sra."
//         lembrar = "lembrá-la"
//     }

//     if (consulta.cancelada === false){
//     return(`Olá ${senhor} ${consulta.nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
//     }
//     return (`Olá, ${senhor} ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)
// })

// console.log(criarEmails)

    

  
