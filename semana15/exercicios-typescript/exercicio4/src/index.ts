// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

// Resposta Dentro da pasta "mãe" dos arquivos eu rodaria um comando tsc --init, com as devidas configurações, no package.json eu colocaria o comando tsc no StaticRange, para que possa fazer a transpilação a cada npm run start dado.

// b) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.

// Resposta: Ele cria uma pasta build, e estando fora da pasta src eu não consegui faazer a transpilação, por isso eu criei pastas src pra poder fazer a atividade (mesmo que não precisasse rs), dentro da pasta src ele funciona normalmente.

// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
//Resposta: Acho que rodando um tsc sozinho ele irá transpilar todos os arquivos com extensão .ts disponíveis na pasta, eu acho rs.

// d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? O que mudou em comparação com o arquivo criado pelos slides?
//Resposta: Acho o arquivo disponibilizado pelos professores na aula mais enxuto e essencial para os exercicios propostos. O arquivo disponibilizado pelo comando tsc --init vem com a versão no target "desatualizada" e algumas outras opções comentadas na quais usamos, de acordo com o que nos foi passado nos slides.

