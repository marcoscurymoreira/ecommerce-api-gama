//inclusão dos pacotes
const express = require('express')

//instanciando o express
const app = express()

//definindo as portas
const port = 3000

//lista de produtos
var listaProdutos = [
    {
        idProduto: 1,
        descricao: "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2",
        preco: 5.0,
        qtdEstoque: 10,
        disponivel: "sim",
        emDestaque: "sim",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    },
    {
        idProduto: 2,
        descricao: "ADAPTADOR CONECTOR HDMI FEMEA L / FEMEA",
        preco: 2.8,
        qtdEstoque: 20,
        disponivel: "sim",
        emDestaque: "sim",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    },
    {
        idProduto: 3,
        descricao: "ADAPTADOR CONECTOR HDMI MACHO L / FEMEA",
        preco: 3.5,
        qtdEstoque: 10,
        disponivel: "sim",
        emDestaque: "nao",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    },
    {
        idProduto: 4,
        descricao: "ADAPTADOR CONVERSOR 2VGA/RCA/S-VIDEO PRATA",
        preco: 10.4,
        qtdEstoque: 10,
        disponivel: "sim",
        emDestaque: "sim",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    },
    {
        idProduto: 5,
        descricao: "ADAPTADOR CONVERSOR HDMI / RCA FULLHD 1080 BRANCO",
        preco: 14.0,
        qtdEstoque: 5,
        disponivel: "sim",
        emDestaque: "nao",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    },
    {
        idProduto: 6,
        descricao: "ADAPTADOR EXTENDER / RJ45 BEGE",
        preco: 1.0,
        qtdEstoque: 101,
        disponivel: "sim",
        emDestaque: "sim",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    },
    {
        idProduto: 7,
        descricao: "ADAPTADOR EXTENDER HDMI / RJ45 30M RX/TX 4K FHD AZUL",
        preco: 16.5,
        qtdEstoque: 10,
        disponivel: "sim",
        emDestaque: "sim",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    },
    {
        idProduto: 8,
        descricao: "ADAPTADOR EXTENDER HDMI / RJ45 60M",
        preco: 39.0,
        qtdEstoque: 120,
        disponivel: "sim",
        emDestaque: "sim",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    },
    {
        idProduto: 9,
        descricao: "ADAPTADOR GRAVADOR CADDY NB 9.5MM / HD 2.5 SATA",
        preco: 9.5,
        qtdEstoque: 21,
        disponivel: "sim",
        emDestaque: "nao",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    },
    {
        idProduto: 10,
        descricao: "ADAPTADOR HDMI FEMEA / DVI MACHO",
        preco: 4.0,
        qtdEstoque: 21,
        disponivel: "sim",
        emDestaque: "sim",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    }
]

//criando um serviço com método get, caminho path é o /produtos, temos os dados de req e res como parâmetros e vamos responder com a lista de produtos.
app.get('/produto', (req, res) => {
    let produtos = listaProdutos
    res.send(produtos)
})

//criando um serviço com método get, caminho path é o /produtos/:id. Este path significa que vai buscar um id específico quando for digitar a url. Ex.: http://localhost:3000/produto/15
//abaixo, declaramos a variável id que vai verificar o id digitando pelo usuário. O for vai fazer um looping na lista de produtos até o final. O if vai verificar se o ID digitado pertence a lista de produtos. Se sim, acrescenta 1 no "produtocorreto" e me retorna o produto. Se não, mantém o "produtocorreto" como 0 e retorna a mensagem de erro.

app.get('/produto/:id', (req, res) => {
    let id = req.params.id;
    let produtocorreto = 0;
    for (listaBusca = 0; listaBusca < listaProdutos.length; listaBusca++){
        if (id == listaProdutos[listaBusca].idProduto){
            produtocorreto = 1;
            res.status(200).send(listaProdutos[listaBusca]);
            break;
        }
    }
    if (produtocorreto == 0){
        res.sendStatus(404)
        // res.status(404).json({message: 'Produto não encontrado. Verifique o ID e tente novamente.'})
    }
})

app.post('/produto', (req, res) => {
    let produto = req.body

    if(produto.idProduto < 0 || !produto.descricao || !produto.disponivel || produto.preco <= 0){
        //res.sendStatus(400)
        res.status(400).json({message: 'Parâmetros incorretos. Verifique as informações inseridas e tente novamente.'})
    }
    else{
        listaProdutos.push(produto);
        //res.sendStatus(200)
        res.status(200).json({message: 'Produto incluído na base de dados.'})
    }
})



//subindo o servidor node.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})