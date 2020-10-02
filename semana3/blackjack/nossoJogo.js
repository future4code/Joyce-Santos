
// INICIO DE JOGO
const bemVindo = 
console.log("Bem vindo ao jogo de Blackjack!")
// USUARIO
   if (confirm("Quer iniciar uma nova rodada?")) {
      const cartaUsuario1 = comprarCarta();
      const cartaUsuario2 = comprarCarta();
      const somaUs = (cartaUsuario1.valor + cartaUsuario2.valor)
      console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação:  ${somaUs}`)

// COMPUTADOR

      const cartaCPU1 = comprarCarta();
      const cartaCPU2 = comprarCarta();
      const somaCPU = (cartaCPU1.valor + cartaCPU2.valor)
      console.log(`Usuário - cartas: ${cartaCPU1.texto} ${cartaCPU2.texto} - pontuação:  ${somaCPU}`)
  
// RESULTADO

      if (somaUs === somaCPU) {
         console.log("Empate!!!")
      }

      if (somaUs > somaCPU) {
         console.log("O usuário ganhou")
      }

      if (somaUs < somaCPU) {
         console.log("O computador ganhou")

      } 
   }
// FIM DE JOGO
   else  {
   console.log("O jogo acabou")
   }
