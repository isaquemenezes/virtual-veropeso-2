const express = require('express');
const body_parser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

//DB CONNECTION
const db = mysql.createConnection({ host: "localhost", user: "root", password: "", port: 3306, database: "vp-virtual", });

//INSTANTEDS
app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({extended: true}));

//HOME
app.get('/', function (req,res){ res.send('Server: Hello Server Node JS'); });


/******** API FEIRANTE **************/
// Cadastro de Feirante
app.post('/api/feirante', (req, res)=> {

    const nome_ = req.body.Nome;
    const contato_ = req.body.Contato;
    const barraca_ = req.body.Barraca;
    const localizacao_ = req.body.Localizacao_barraca;
    
    
    const sql_insert = 
        "INSERT INTO feirante(nome, contato, nome_barraca, localizacao_barraca) VALUES (?,?,?,?)";
    db.query(
        sql_insert, [nome_, contato_, barraca_, localizacao_,], (err, result) => {
            
      
    });
});

/******** API USUARIO **************/
//Cadastro de usuario
app.post('/api/usuariocadastro', (req, res)=> {

    const nome_ = req.body.Nome;
    const contato_ = req.body.Contato;
    const barraca_ = req.body.Barraca;
    const localizacao_ = req.body.Localizacao_barraca;
    const senha_ = req.body.Senha
    
    
    const sql_insert = 
        "INSERT INTO usuario(nome, contato, senha, nome_barraca, localizacao_barraca) VALUES (?,?,?,?,?)";
    db.query(
        sql_insert, [nome_, contato_, senha_, barraca_, localizacao_,], (err, result) => {
            
      
    });
});

/******** API PRODUCT **************/
//INSERT 
app.post('/api/insert', (req, res)=> {

    const nome_barraca = req.body.name_barraca;
    const categ = req.body.categ;
    const nome_produto = req.body.name_produto;
    const price = req.body.price;
    
    const sql_insert = 
        "INSERT INTO produto(fk_nome_barraca, categoria, nome_produto, preco) VALUES (?,?,?,?)";
    db.query(
        sql_insert, [nome_barraca, categ, nome_produto, price], (err, result) => {
          
        
    });
});

//SELCT
app.get('/api/select', function (req, res) {
    const sql_select = "SELECT * FROM produto";
    db.query(
        sql_select, (err, result) => {
        res.send(result);  
    });
});


module.exports = app;