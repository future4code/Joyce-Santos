### EXERCÍCIO 1

a. O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
RES:  Rounds: é o custo indicado por 2 digitos que está relacionado com a segurança da senha. Quanto maior o valor, mais tempo de execução e maior segurança. O valor 12 é recomendado por padrão da lib e utilizarei este mesmo valor pelo mesmo motivo. Salt: é um bloco de string construído de maneira aleatória com 22 caracteres.

### EXERCÍCIO 2

a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
RES: Devemos primeiro começar pela construção do cadastro com a senha criptografada, pois no login será a base de comparação.

d. No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
RES: Não, por que o token é o resultado do login e é conferido no header.
