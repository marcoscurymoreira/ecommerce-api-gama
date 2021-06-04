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
    let {id} = req.params;
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

    if (idProduto < 0 || !descricao || preco < 0 || qtdEstoque < 0 || !disponivel || !emDestaque || !departamento){
        res.sendStatus(400);
    }

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
    

    // if(produto.idProduto < 0 || !produto.descricao || !produto.disponivel || produto.preco <= 0){
    //     //res.sendStatus(400)
    //     res.status(400).json({message: 'Parâmetros incorretos. Verifique as informações inseridas e tente novamente.'})
    // }
    // else{
    //     listaProdutos.push(produto);
    //     //res.sendStatus(200)
    //     res.status(200).json({message: 'Produto incluído na base de dados.'})
    // }
})


//DESAFIO 3 ISIDRO
// app.post("/produto", (req, res) => {
//     let produto = req.body;
    
//     if (produto.codProduto < 0 || !produto.descricao || !produto.disponivel || produto.preco <= 0 ){
//         res.sendStatus(400);
//     }
//     else{
//         listaProdutos.push(produto);
//         res.sendStatus(200);
//     }
    
// })

// app.listen(3000, () => {
//     console.log("Servidor no ar na porta 3000 - vamos ver se funfa!!!");
// })



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
app.get('/departamento', (req, res) => {
    let produto = listaProdutos.departamento
    res.send(produto)
})









//DESAFIO 6 GET ID DEPARTAMENTO - INCOMPLETO



//subindo o servidor node.
app.listen(port, () => {
  console.log(`Server is running`);
});