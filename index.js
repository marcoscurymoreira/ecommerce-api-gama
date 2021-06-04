const express = require('express')
const app = express()
const listaProdutos = require('./listaProdutos.json')
const port = 3000

app.use(express.json());


//DESAFIO 1 - GET GERAL - OK
app.get('/produto', (req, res) => {
    let produto = listaProdutos
    res.send(produto)
})






//DESAFIO 2 - GET POR ID - OK
app.get('/produto/:id', (req, res) => {
    let id = req.params.id;
    let produtocorreto = 0;
    for (listaBusca = 0; listaBusca < listaProdutos.length; listaBusca++){
        if (id == listaProdutos[listaBusca].idProduto){
            produtocorreto = 1;
            res.send(listaProdutos[listaBusca]);
            break;
        }
    }
    if (produtocorreto == 0){
        // res.sendStatus(404)
        res.status(404).json({message: 'Produto não encontrado. Verifique o ID e tente novamente.'})
    }
})





//DESAFIO 3 POST - INCOMPLETO
app.post('/produto', (req, res) => {
    let {idProduto, descricao, preco, qtdEstoque, disponivel, emDestaque, departamento, idDepto, nomeDepto} = req.body

    if (idProduto <= 0 || !descricao || preco <= 0 || qtdEstoque < 0 || !disponivel || !emDestaque || !departamento  || departamento.idDepto <= 0  || !departamento.nomeDepto || idProduto === listaProdutos.idProduto){
        res.sendStatus(400);
    }
    else{
        let novoProduto = {
            idProduto,
            descricao,
            preco,
            qtdEstoque,
            disponivel,
            emDestaque,
            departamento,
            idDepto,
            nomeDepto
        };
    
        listaProdutos.push(novoProduto)
    
        res.json(novoProduto)
    }


})





//DESAFIO 4 PUT - INCOMPLETO
app.put('/produto/:id', (req, res) => {
    let {id} = req.params;

    let produto = listaProdutos.find(prod => prod.id == id);
    if (!produto) return res.status(204).json();

    let {preco} = req.body;
    produto.preco = preco,
    res.json(produto);
})









//DESAFIO 5 GET DEPARTAMENTO - INCOMPLETO
// app.get('/departamento', (req, res) => {
//     let idDepto = 0
//     let departamento = {
//         id: 0,
//         nomeDepto: "",
//     }
    
//     for(pos=0; pos<listaProdutos[pos].departamento.idDepto; pos++){
//         if(idDepto != listaProdutos[pos].departamento.idDepto){
//              if (departamento.id != 0){
//                  console.log("Departamento: " + departamento.nomeDepto);
//                  console.log("");
//              }
//              idDepto = listaProdutos[pos].departamento.idDepto;
//              departamento.id = idDepto;
//              departamento.nomeDepto = listaProdutos[pos].departamento.nomeDepto;

//         }

//      }
//      console.log("Departamento: " + departamento.nomeDepto);
//      console.log("Id departamento: " + departamento.idDepto);
//     let produto = listaProdutos.departamento.nomeDepto
//     res.send(produto)
// })




app.get('/departamento', (req, res) => {

    let listaDepto = []
    for (let i of listaProdutos){
        listaDepto.push({id: i.departamento.idDepto, name: i.departamento.nomeDepto})

    }
    console.log(listaDepto)
    res.json(listaDepto)
})




//DESAFIO 6 GET ID DEPARTAMENTO - INCOMPLETO



//subindo o servidor node.
app.listen(port, () => {
  console.log(`Server is running`);
});