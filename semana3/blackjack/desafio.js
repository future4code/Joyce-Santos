// INICIO DO JOGO

console.log(confirm("Bem vindo ao jogo de Blackjack!"))

if (confirm("Quer iniciar uma nova rodada?")) {
   const cartaUsuario1 = comprarCarta();
   const cartaUsuario2 = comprarCarta();
   let somaUs = (cartaUsuario1.valor + cartaUsuario2.valor);
      console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação:  ${somaUs}`)
  
   if (cartaUsuario1.texto === "A" && cartaUsuario2.texto === "A" ){
      const novaCarta1 = comprarCarta();
      const novaCarta2 = comprarCarta();
      somaUs = (novaCarta1.valor + novaCarta2.valor);
    }  
   // COMPUTADOR

   const cartaCPU1 = comprarCarta();
   const cartaCPU2 = comprarCarta();
   let somaCPU = (cartaCPU1.valor + cartaCPU2.valor)
      console.log(`Computador - cartas: ${cartaCPU1.texto} ${cartaCPU2.texto} - pontuação:  ${somaCPU}`)

   if (cartaCPU1 === "A" && cartaUsuario2 === "A"){
      const novaCarta3 = comprarCarta();
      const novaCarta4 = comprarCarta();
      somaCPU = (novaCarta3.valor + novaCarta4.valor);

   }

   if (confirm(`Suas cartas são: ${cartaUsuario1.texto}, ${cartaUsuario2.texto}. A carta revelada do computador é: ${cartaCPU1.texto} Deseja comprar mais uma carta?`)) {
      let arrayNovasCartas = []
      while (somaUs < 22) {
         const vamosLa = comprarCarta()
         arrayNovasCartas.push(vamosLa.texto)
         confirm(`Suas cartas são: ${cartaUsuario1.texto}, ${cartaUsuario2.texto} e ${arrayNovasCartas} A carta revelada do computador é: ${cartaCPU1.texto} Deseja comprar mais uma carta?`)
         somaUs += vamosLa.valor
         console.log(somaUs)

      }     
            while (somaCPU < 22) {
            const vamosLa = comprarCarta()
            arrayNovasCartas.push(vamosLa.texto)
            somaCPU += vamosLa.valor
         }
            console.log(somaCPU)
   
      if (somaUs > somaCPU) {
         console.log("Parabéns, você venceu o jogo!")
      } else if (somaUs< somaCPU) {
         console.log("O computador ganhou!!!")
      } else if (somaUs === somaCPU) {
         console.log("Deu Empate! Bora pra mais uma?")
      }
      else {
         console.log("O jogo acabou :( ")
      } 
                 
            }
         }
