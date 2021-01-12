EXERCÍCIO - 1

a. ALTER TABLE Actor DROP COLUMN salary; 
Irá apagar a coluna "salary" da tabela.

b. ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Altera a coluna gender para sex e com limite de 6 caracteres.

c. ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Altera a coluna gender para gender com limite de 255 caracteres.

d. Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres:
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

EXERCÍCIO - 2

a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
```UPDATE Actor ```
```SET name = "Moacyr Franco", ```
```birth_date = "1936-10-05" ```
```WHERE id = "003";```

b. Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PÃES. Então, escreva outra query para voltar ao nome anterior.

```UPDATE Actor```
```SET name = "JULIANA PÃES"```
```WHERE name = "Juliana Paes";```

```UPDATE Actor```
```SET name = "Juliana Paes"```
```WHERE name = "JULIANA PÃES";```

c. Escreva uma query que atualize todas as informações do ator com o id 005.

```UPDATE Actor```
```SET ```
```name = "Moacyr Franco",```
```birth_date = "2020-02-10",```
``` gender = "male"```
```WHERE id = "005";```

d. Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 

O MySQL deu sucesso na alteração, porém nenhum dado foi alterado.

EXERCÍCIO - 3

a. Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`
```DELETE FROM Actor WHERE name = "Fernanda Montenegro";```

b. Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00.
```DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;```

EXERCÍCIO - 4

a. Escreva uma query que pegue o maior salário de todos os atores e atrizes.
```SELECT MAX(salary) from Actor;```

b. Escreva uma query que pegue o menor salário das atrizes.
```SELECT MIN(salary) from Actor WHERE gender = "female";```

c. Escreva uma query que pegue a quantidade de atrizes.
```SELECT COUNT(*) FROM Actor WHERE gender = "female";```

d. Escreva uma query que pegue a soma de todos os salários.
```SELECT SUM(salary) FROM Actor;```

EXERCÍCIO - 5

a. Releia a última query. Teste-a. Explique o resultado com as suas palavras.
```SELECT COUNT(*), gender```
```FROM Actor```
```GROUP BY gender```

A query faz uma contagem do numero total de atores por gênero e os separa em grupos de acordo com o seu gênero.

b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética.
```SELECT id, name FROM Actor```
```ORDER BY name DESC;```

c. Faça uma query que retorne todos os atores ordenados pelo salário.
```SELECT * FROM Actor```
```ORDER BY salary;```

d. Faça uma query que retorne os atores com os três maiores salarios.
```SELECT * FROM Actor```
```ORDER BY salary DESC```
```LIMIT 3;```


e. Faça uma query que retorne a média de salário por gênero.
```SELECT AVG(salary), gender FROM Actor```
```GROUP BY gender;```

EXERCÍCIO - 6

a. Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema.
```ALTER TABLE Movies ADD playing_limit_date DATE;```

b. Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.
```ALTER TABLE Movies CHANGE rating rating FLOAT;```

c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído.
```UPDATE Movies SET playing_limit_date = "2020-12-31" WHERE id = "001";```

```UPDATE Movies SET playing_limit_date = "2021-02-12" WHERE id = "004";```

c. Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído.

```UPDATE Movies```
```SET playing_limit_date = "2017-12-18"```
```WHERE id = "002";```

```UPDATE Movies```
```SET playing_limit_date = "2021-05-12"```
```WHERE id = "003";```

d. Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
```DELETE FROM Movies WHERE id = "001"```
Não dá erro, no entanto, nada acontece. Como a linha não existe, o MySQL roda, mas não altera nada.

EXERCÍCIO - 7

b. Qual a média das avaliações dos filmes?  
```SELECT COUNT(*) FROM Movies WHERE rating > 7.5;```
RESPOSTA: 3.

b. Qual a média das avaliações dos filmes?
```SELECT AVG(rating) FROM Movies;```
RESPOSTA: 9


c. Qual a quantidade de filmes em cartaz?
```SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();```
RESPOSTA: 2

d. Qual a quantidade de filmes que ainda irão lançar?
```SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();```
RESPOSTA: 0


e. Qual a maior nota dos filmes?
```SELECT MAX(rating) FROM Movies;```
RESPOSTA: 10


f. Qual a menor nota dos filmes?
```SELECT MIN(rating) FROM Movies;```
RESPOSTA: 8

EXERCÍCIO - 8

a. Retorne todos os filmes em ordem alfabética.
```SELECT * FROM Movies ORDER BY title;```

b. Retorne os 5 primerios filmes em ordem descrente alfabética.
```SELECT * FROM Movies ORDER BY title LIMIT 5;```

c. Retorne os 3 filmes mais recentes em cartaz.
```SELECT * FROM Movies ```
```WHERE release_date < CURDATE() ```
```ORDER BY release_date DESC ```
```LIMIT 3;```

d. Retorne os 3 filmes melhor avalidos.
```SELECT * FROM Movies``` 
```ORDER BY rating DESC``` 
```LIMIT 3;```