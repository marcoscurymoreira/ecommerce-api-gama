const express = require("express");
const app = express();

/* definindo a lista estática */
var listaProdutos = [
    {
        codProduto: 25754,
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
        codProduto: 20212,
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
        codProduto: 21300,
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
        codProduto: 26608,
        descricao: "ADAPTADOR CONVERSOR 2VGA/RCA/S-VIDEO PRATA",
        preco: 10.4,
        qtdEstoque: 10,
        disponivel: "sim",
        emDestaque: "sim",
        departamento: {
            idDepto: 1,
            nomeDepto: "Adaptadores"
        }
    }
]
/* ------- */

app.use(express.json());

app.get("/produto", (req, res) => {
    
    res.send(listaProdutos);
    
})

app.get("/produto/:id", (req, res) => {
    let id = req.params.id;
    let achei = 0;
    for (i=0;i<listaProdutos.length;i++){
        if (id == listaProdutos[i].codProduto){
            achei = 1;
            console.log("achei!!!" + listaProdutos[i]);
            res.send(listaProdutos[i]);            
            break;
        }
    }
    if (achei == 0){
        console.log("num achei!!!");        
        res.sendStatus(404);
    }

    
})

app.post("/produto", (req, res) => {
    let produto = req.body;
    
    if (produto.codProduto < 0 || !produto.descricao || !produto.disponivel || produto.preco <= 0 ){
        res.sendStatus(400);
    }
    else{
        listaProdutos.push(produto);
        res.sendStatus(200);
    }
    
})

app.listen(3000, () => {
    console.log("Servidor no ar na porta 3000 - vamos ver se funfa!!!");
})