### EXERCÍCIO 1

a. Explique o que é uma chave estrangeira

 FOREIGN KEY é uma chave usada para linkar duas tabelas utilizando a chave com a PRIMARY KEY da outra tabela como referência.

b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

```sql

INSERT INTO Rating VALUES
('001', 'Adorei a comédia', 9, '001'),
('002', 'Filme bom, acho, não assisti', 10, '002'),
('003', 'Ótimo', 8, '003'),
('004', 'Sensacional', 8, '004'),
('005', 'Um dos meus filmes nacionais preferido', 10, '005'),
('006', 'Adorei esse fiome', 10, '006'),
('007', 'Uma obra prima do cinema nacional', 10, '007');

```

c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-joyce-roberta`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))


d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
```sql

ALTER TABLE Movies DROP COLUMN rating;

```

e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-joyce-roberta`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`)).
O erro indica que não é possível criar ou atualizar a linha pai por falha na restrição da chave estrangeira.

### EXERCÍCIO 2

a. Explique, com as suas palavras, essa tabela
A tabela terá duas colunas: 'movie_id' e 'actor_id'. As duas são FOREIGN KEY que fazem referência aos id das tabelas Movies e Actor respectivamente.

b. Crie, ao menos, 6 relações nessa tabela

```sql
INSERT INTO MovieCast VALUE
('001', '001'), 
('002', '002'), 
('004', '006'),
('003', '004'), 
('005', '007'), 
('007', '004');

```

c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query.
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-joyce-roberta`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)).
O erro indica que não é possível criar ou atualizar a linha filha por falha na restrição da chave estrangeira.


d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query.
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-joyce-roberta`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)).
O erro indica que não é possível criar ou atualizar a linha pai por falha na restrição da chave estrangeira.

### EXERCÍCIO 3

a. Explique, com suas palavras, a query acima. O que é o operador ON?
A query mostra todas as colunas das tabelas 'Movies' e 'Rating' e a coluna 'id' da tabela 'Movies' se refere à coluna 'movie_id' da tabela 'Rating'. O operador ON funciona como uma condição.

b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

 ```sql

SELECT Movies.title, Movies.id, Rating.rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

 ```

 ### EXERCÍCIO 4

 a. Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário.

  ```sql
  SELECT Movies.name, Movies.id, Rating.rate, Rating.comment FROM Movies 
LEFT JOIN Rating ON Movies.id = Rating.movie_id;

  ```

  b. Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator.

  ```sql
  SELECT MovieCast.movie_id, Movies.title, MovieCast.actor_id 
  FROM MovieCast JOIN Movies ON MovieCast.movie_id = Movies.id;

  ```

  c. Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda).

   ```sql
SELECT AVG(Rating.rate), Movies.id, Movies.title FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY Movies.id;

  ```

  ### EXERCÍCIO 5

  a. Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?
  A query retorna todas as colunas das tabelas 'Movies' e 'MovieCast', relacionadas entre si pelas colunas 'id' e 'movie_id', e também da tabela 'Actor' com a sua coluna 'id' relacionada ao 'actor_id' da tabela 'MovieCast'. Dois JOIN permitem trazer informações de 3 tabelas.

  b. Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query.

  ```sql
SELECT MovieCast.movie_id, Movies.title, MovieCast.actor_id, Actor.name FROM Movies
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```
  c. A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.
  Primeiro deu um erro Error Code: 1054. Unknown column 'm' in 'field list', aí vi que tinha uma vírgula no lugar de um ponto no meio da query, que tava impedindo de rodar, ao trocar a vírgula por ponto ela retornou o movie_id da MovieCast, o nome do filme, o actor_id também da MovieCast e os nomes dos atores.


  d. Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário).

 ```sql
  SELECT 
	Movies.id as movie_id, 
    Movies.title, 
    Actor.id as actor_id, 
    Actor.name, 
    Rating.rate, 
    Rating.comment 
FROM Movies
LEFT JOIN Rating on Rating.movie_id = Movies.id
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

  ### EXERCÍCIO 6

  a. Que tipo de relação é essa?
  Relação N:M

  b. Explicite a query que você usou para criar a tabela.
```sql
SELECT * FROM Oscar;

CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    name TEXT NOT NULL,
    date DATE NOT NULL
);
INSERT INTO Oscar VALUES
('001', 'Oscar de melhor filme' '2000-01-01'),
('002', 'Oscar de melhor direção', '2000-01-01'),
('003', 'Oscar de melhor trilha sonora', '2001-01-01'),
('004', 'Oscar de melhor fotografia', '2001-01-01'),
('005', 'Oscar de melhor roteiro adaptado', '2002-01-01');
('006', 'Oscar de melhor efeitos especiais', '2002-01-01')
('007', 'Oscar de melhor filme estrangeiro', '2002-01-01')
('008', 'Oscar de melhor animação', '2002-01-01');


CREATE TABLE MovieOscar (
	movie_id VARCHAR(255),
	oscar_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);
```

  c. Crie ao menos 2 óscar para cada um dos filmes.
  ```sql
  INSERT INTO MovieOscar VALUES
('001', '008'), ('001', '002'),
('002', '006'), ('002', '004'),
('003', '003'), ('003', '004'),
('004', '005'), ('004', '003'),
('005', '007'), ('005', '004'),
('006', '001'), ('006', '002'),
('007', '007'), ('007', '001');
```
  
  d. Faça uma query que retorne todos os filmes e seus respectivos óscar.
  ```sql

  SELECT Movies.title, Oscar.name FROM MovieOscar
RIGHT JOIN Movies
ON MovieOscar.movie_id = Movies.id
JOIN Oscar
ON MovieOscar.oscar_id = Oscar.id;

```