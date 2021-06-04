const express = require('express')
const app = express()
const listaProdutos = require('./listaProdutos.json')
const port = 3000

app.use(express.json());


//DESAFIO 1 - GET NA LISTA DE PRODUTOS - OK
app.get('/produto', (req, res) => {
    let produto = listaProdutos
    res.send(produto)
})





//DESAFIO 2 - GET NO PRODUTO POR ID - OK
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





//DESAFIO 3 POST INCLUINDO NOVO PRODUTO - OK
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





//DESAFIO 5 - GET RETORNANDO OS DEPARTAMENTOS - OK
app.get('/departamento', (req, res) => {
    let listaDepto = [];
    for (let lista = 0; lista < listaProdutos.length; lista++) {
        let itemCorrenteDaLista = listaProdutos[lista]
        let achou = false

        for (let novaLista = 0; novaLista < listaDepto.length; novaLista++) {
            if (listaDepto[novaLista].idDepto === itemCorrenteDaLista.departamento.idDepto) {
                achou = true;
            }
        }

        if (achou === false) {

            listaDepto.push({
                "idDepto": itemCorrenteDaLista.departamento.idDepto,
                "nomeDepto": itemCorrenteDaLista.departamento.nomeDepto
            })
        }
    }
    res.json(listaDepto)
})





//DESAFIO 6 GET ID DEPARTAMENTO - OK
app.get('/departamento/:id', (req, res) => {

    let listaProdDepto = []
    let id = req.params.id;
    let deptoCorreto = 0;
    for (listaBusca = 0; listaBusca < listaProdutos.length; listaBusca++) {
        if (id == listaProdutos[listaBusca].departamento.idDepto) {
            deptoCorreto = 1;

            listaProdDepto.push({
                "idProduto": listaProdutos[listaBusca].idProduto,
                "descricao": listaProdutos[listaBusca].descricao,
                "preco": listaProdutos[listaBusca].preco,
                "qtdEstoque": listaProdutos[listaBusca].qtdEstoque,
                "disponivel": listaProdutos[listaBusca].disponivel,
                "emDestaque": listaProdutos[listaBusca].emDestaque,
                "departamento": listaProdutos[listaBusca].departamento
            })

        }

    }
    if (deptoCorreto != 0) {
        res.send(listaProdDepto)

    } else {
        res.sendStatus(404)
    }


})


app.listen(port, () => {
  console.log(`Server is running`);
})