EXERCICÍO 1 - 

a. Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.

RESPOSTA: Varchar é para string de n caracteres, no caso da tabela, serão 255 caracteres no id e no name e 6 caracteres no gênero; Date é para data no formato yyyy-mm-dd; 

b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.

RESPOSTA: SHOW DATABASES, mostra os databases existentes na workbench e o SHOW TABLES, mostra as tabelas existentes na workbench.

c. O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.

RESPOSTA: O comando DESCRIBE Actor mostra os detalhes da tabela. O tipo de método utilizado, se aceita null ou não e a chave primária.

EXERCICIO 2 -

a) Query:

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES ( "002", "Glória Pires", 1200000, "1963-10-23", "female" );```

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. O erro acusa uma duplicidade da chave primária. Ou seja, ele não permite que duas chaves primárias iguais sejam inseridas no banco de dados.

c) Error Code: 1136. Column count doesn't match value count at row 1. O erro acusa que a coluna não é compatível com o valor da linha 1, no caso está faltando os itens, data de nascimento e gênero.

d) Error Code: 1364. Field 'name' doesn't have a default value. O erro acusa que o campo 'name' não tem um valor padrão. Além disso, 'name' não aceita valores nulos devido a  sua configuração inicial.

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. O erro acusa na coluna de birth_date pois, ao estar sem as aspas, o programa entende que é um cálculo.

f) Queries:

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES ("006", "Camila Morgado", 150000, "1975-04-12","female");```

```INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES ("007", "Eduardo Moscovis", 150000, "1968-06-08", "male" );```

EXERCIÍO - 3

a) Query:

```SELECT * FROM Actor WHERE gender = "female";```

b) Query:

```SELECT salary FROM Actor WHERE name = "Tony Ramos";```

c) ```SELECT id, name from Actor WHERE gender = "invalid";``` 
RESPOSTA: Ele retorna vazio, pois não tem nenhum gênero "invalid".

d) Query:

```SELECT id, name, salary FROM Actor WHERE salary <= 500000;```

e) Error Code: 1054. Unknown column 'nome' in 'field list'. O erro informe que desconhece a coluna 'nome'. Isso acontece pois o nome da coluna na verdade é 'name' e não 'nome'.

EXERCICÍO - 4

a) Essa query pega todas as informações da tabela ator que os nomes comecem com as letras A ou J e tenham salário maior que R$300.000.

b) Query:

```SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;```

c) Query:

```SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";```

d) Query:

```SELECT * FROM Actor WHERE LOWER(name) LIKE LOWER("%A%") OR LOWER(name) LIKE LOWER("%G%") AND salary BETWEEN 35000000 AND 90000000;```

EXERCICÍO - 5

a) Text não precisa requer um limitador, pois já é esperado dele um grande conteúdo. O text também é armazenado em áreas de armazenamento de blob, enquanto o varchar tentará armazenar diretamente nas linhas.

b) Query:

```INSERT INTO Movies (id, title, synopsis, release_date, rating) VALUES ( "001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7 );```

c) Query:

```INSERT INTO Movies (id, title, synopsis, release_date, rating) VALUES ( "002", "Doce de Mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10 );```

d) Query:

```INSERT INTO Movies (id, title, synopsis, release_date, rating) VALUES ( "003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8 );```

e) Query:

```INSERT INTO Movies (id, title, synopsis, release_date, rating) VALUES ( "004", "Olga", "O filme narra a verdadeira história da militar alemã Olga Benário, que se apaixonou pelo lider comunista brasileiro Luis Carlos Prestes.", "2004-08-20", "9");```

EXERCICÍO - 6

a) Query:

```SELECT id, title, rating FROM Movies WHERE id = "004";```

b) Query:

```SELECT * FROM Movies WHERE title = "Olga";```

c) Query:

```SELECT id, title, synopsis FROM Movies WHERE rating >= 7;```

EXERCICÍO - 7

a) Query:

```SELECT * FROM Movies WHERE title LIKE "%vida%";```

b) Query:

```SELECT * FROM Movies WHERE title LIKE "%Você%" OR synopsis LIKE "%Você%";```

c) Query:

```SELECT * FROM Movies WHERE release_date < "2021-01-12";```

d) Query:

```SELECT * FROM Movies WHERE release_date < "2021-01-12" AND (title LIKE "%Dona%" OR synopsis LIKE "%Dona%") AND rating > 7;```
