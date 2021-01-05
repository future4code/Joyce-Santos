// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

// Resposta Dentro da pasta "mãe" dos arquivos eu rodaria um comando tsc --init, com as devidas configurações, no package.json eu colocaria o comando tsc no StaticRange, para que possa fazer a transpilação a cada npm run start dado.

type pokemon {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon2: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}