>>># O que fizemos?
Trata-se de uma RESP API para um e-commerce. Utilizando os métodos e arquitetura REST, desenvolvemos um projeto para apresentar todo o estoque do e-commerce, buscar um produto específico, incluir novos produtos e alterar dados de produtos existentes.

>>>># O que utilizamos?
* [NodeJS v14.17.0](https://nodejs.org/en/ "Dispenso apresentações.")
* [Express 4.17.1](https://expressjs.com/pt-br/ "Não liga pra ele, ele se acha demais!")

>>>># E aí, como eu uso?
* Link para o projeto: [GitHub](https://github.com/marcoscurymoreira/ecommerce-api-gama.git/ "Você vai precisar me clonar, mas não sou a ovelha Dolly")
* 
  * Para clonar o projeto, execute **_git clone https://github.com/marcoscurymoreira/ecommerce-api-gama.git_**
  
* Instalar o Express com **_npm i express_**
  
* Subir o servidor com **_npm start_**.
  
* Vamos precisar de uma plataforma para os testes da nossa API. Existem algumas opções no mercado, mas nós utilizamos o [Postman](https://www.postman.com/ "Eu não sou o homem poste. ¬¬"). Você pode baixá-lo [aqui](https://www.postman.com/downloads/ "Clique sem medo, não sou um vírus") ou escolher outro de sua preferência.

>>>># Vamos fazer alguns testes?

Ok, clonamos o projeto, instalamos o que era necessário e nosso servidor está rodando. Agora é só abrir o [Postman](https://www.postman.com/ "Olha eu aqui de novo"), ou sua plataforma de testes preferida, e colocar a mão na massa.

* Utilizando o método GET para retornar toda a lista de produtos: http://localhost:3000/produto
  
    * <ins>Detalhes adicionais:</ins> deverá retornar toda a lista de produtos e CODE 200.
   
 * Utilizando o método GET para retornar um item da lista de produtos: http://localhost:3000/produto/{id}
  
    * <ins>Detalhes adicionais:</ins> as IDs válidas são do 1 ao 10, qualquer outra ID deverá retornar Code 404. Caso o ID esteja correto, deverá retornar o produto referente e CODE 200.
  
* Utilizando o método POST para incluir um novo produto na base de dados: http://localhost:3000/produto
  
    * <ins>Detalhes adicionais:</ins> todos os dados deverão ser preenchidos para a correta inclusão do novo produto na base de dados, caso contrário, deverá retornar Code 400. Caso esteja tudo correto, deverá retornar o objeto inserido e CODE 200.
  
* Utilizando o método PUT para alterar um dado na nossa lista de produtos: http://localhost:3000/produto/{id}
  
    * <ins>Detalhes adicionais:</ins> caso o ID informado seja inexistente em nossa base de dados, deverá retornar CODE 404. Se for passado algum objeto incompleto ou zerado, deverá retornar CODE 400. Caso dê tudo certo, deverá retornar o próprio objeto e CODE 200.
  
* Utilizando o método GET para retornar toda a lista de departamentos: http://localhost:3000/departamento 
  
    * <ins>Detalhes adicionais:</ins> deverá retornar toda a lista de departamentos e CODE 200.
  
* Utilizando o método GET para retornar toda a lista de produtos de um determinado departamento: http://localhost:3000/departamento/{id} 
  
    * <ins>Detalhes adicionais:</ins> caso o ID do departamento informado seja inexistente em nossa base de dados, deverá retornar CODE 404. Caso dê tudo certo, deverá retornar a lista de produtos daquele departamento e CODE 200.

>>># O que mais preciso saber?
* Este é um projeto realizado durante o Gama XP37. Todos os dados utilizados são fictícios.

>>># Quem somos?
* <a href="https://github.com/anderleyson" target="_blank">Anderley Quinteiro</a>
* <a href="https://github.com/marcoscurymoreira" target="_blank">Marcos Moreira</a>
* Victor Reginato