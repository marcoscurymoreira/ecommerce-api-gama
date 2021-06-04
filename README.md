# O que fizemos?
Trata-se de uma RESP API para um e-commerce. Utilizando os métodos e arquitetura REST, desenvolvemos um projeto para apresentar todo o estoque do e-commerce, buscar um produto específico, incluir novos produtos e alterar dados de produtos existentes.

# O que utilizamos?
* NodeJS v14.17.0
* Express 4.17.1

# E aí, como eu uso?
* Link para clonar o projeto: [GitHub](https://github.com/marcoscurymoreira/ecommerce-api-gama.git)
  
* Algumas linhas de teste para utilizarmos:
  * Utilizando o método GET para retornar toda a lista de produtos: http://localhost:3000/produto
  
    * Detalhes adicionais: deverá retornar toda a lista de produtos e CODE 200.
  
  * Utilizando o método GET para retornar um item da lista de produtos: http://localhost:3000/produto/{id}
  
    * Detalhes adicionais: as IDs válidas são do 1 ao 10, qualquer outra ID deverá retornar Code 404. Caso o ID esteja correto, deverá retornar o produto referente e CODE 200.
  
  * Utilizando o método POST para incluir um novo produto na base de dados: http://localhost:3000/produto
  
    * Detalhes adicionais: todos os dados deverão ser preenchidos para a correta inclusão do novo produto na base de dados, caso contrário, deverá retornar Code 400. Caso esteja tudo correto, deverá retornar o objeto inserido e CODE 200.
  
  * Utilizando o método PUT para alterar um dado na nossa lista de produtos: http://localhost:3000/produto/{id}
  
    * Detalhes adicionais: caso o ID informado seja inexistente em nossa base de dados, deverá retornar CODE 404. Se for passado algum objeto incompleto ou zerado, deverá retornar CODE 400. Caso dê tudo certo, deverá retornar o próprio objeto e CODE 200.
  
  * Utilizando o método GET para retornar toda a lista de departamentos: http://localhost:3000/departamento 
  
    * Detalhes adicionais: deverá retornar toda a lista de departamentos e CODE 200.
  
  * Utilizando o método GET para retornar toda a lista de produtos de um determinado departamento: http://localhost:3000/departamento/{id} 
  
    * Detalhes adicionais: caso o ID do departamento informado seja inexistente em nossa base de dados, deverá retornar CODE 404. Caso dê tudo certo, deverá retornar a lista de produtos daquele departamento e CODE 200.

# O que mais preciso saber?
* Este é um projeto realizado durante o Gama XP37. Todos os dados utilizados são fictícios.

# Quem somos?
* Anderley Quinteiro
* [Marcos Moreira](https://github.com/marcoscurymoreira)
* Victor Reginato