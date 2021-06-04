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





//DESAFIO 6 GET ID DEPARTAMENTO - INCOMPLETO
app.get('/departamento/:id', (req, res) => {
    let id = req.params.id;
    let listaDepto = []; //declaramos uma variável que vai receber uma lista [] que começa vazia
    for (let listaBusca = 0; listaBusca < listaProdutos.length; listaBusca++) {//aqui vamos varrer a "listaProdutos"
        let itemEncontrado = listaProdutos[listaBusca]//criamos uma variável
        let achou = false//neste caso, vamos setar nosso achou como false.

        for (let novaLista = 0; novaLista < listaDepto.length; novaLista++) {//aqui vamos para outra varredura
            //criamos a variavel novaLista. Vamos varrer o listaDepto que criamos.
            if (listaDepto[novaLista].idDepto === itemEncontrado.departamento.idDepto) {
                //se o id do departamento do listaDepto na posição [novaLista]...
                //for igual ao id do departamento do itemEncontrado...
                //AAAAAAAAAAAAAAAlistaDepto[novaLista].nomeDepto = listaDepto[novaLista].nomeDepto + itemEncontrado.qtdEstoque
                //nós vamos somar a nomeDepto que já temos
                //em .nomeDepto (lá embaixo) e a qtdEstoque da lista original.
                achou = true;
                //neste caso, vamos setar nosso achou como true.
            }
        }

        if (achou === false) {//se o achou for false...
            listaDepto.push({ //o .push serve para adicionar itens em uma lista[]. No nosso caso, cada vez que ocorrer o if
                                    //o .push irá adicionar o item(objeto {}) novo na lista[] que criamos "listaDepto"

                "idDepto": itemEncontrado.departamento.idDepto,//add id do departamento
                "nomeDepto": itemEncontrado.departamento.nomeDepto,//add nome do departamento
                "descricao": itemEncontrado.descricao//add os produtos de cada categoria
            })
        }
    }
    res.json(listaDepto)
})


app.listen(port, () => {
  console.log(`Server is running`);
})