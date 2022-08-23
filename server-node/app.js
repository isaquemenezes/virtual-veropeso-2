const express = require('express');
const body_parser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

// Configurações connection db 
// const db = mysql.createPool({
//     host: "locahost",
//     user: "root",
//     password: "",
//     database: "vp-virtual"
// });

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "vp-virtual",
});

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({extended: true}));

/*
Integraçaõ API
*/

app.get('/', function (req,res){
    res.send('Server: Hello Server Node JS');
});

//API GET SELECT
app.get('/api/select', function (req, res) {
    const sql_select = "SELECT * FROM produto";
    db.query(
        sql_select, (err, result) => {
        // res.send('Server: Hello Server Node JS');
        // console.log(result);  
        res.send(result);  
    });
});

app.post('/api/insert', (req, res)=> {

    const nome_barraca = req.body.name_barraca;
    const categ = req.body.categ;
    const nome_produto = req.body.name_produto;
    const price = req.body.price;
    
    const sql_insert = 
        "INSERT INTO produto(fk_nome_barraca, categoria, nome_produto, preco) VALUES (?,?,?,?)";
    db.query(
        sql_insert, [nome_barraca, categ, nome_produto, price], (err, result) => {
        ;console.log(result);    
        
    });
});

// app.get('/', function (req, res){
//     const sql_insert = "INSERT INTO table_teste (user_name) VALUES ('juba')";  
//     db.query(sql_insert, (err, result) => {
//         res.send('Hello Server Node JS');
//     });
// });

module.exports = app;