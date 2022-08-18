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
    const sql_select = "SELECT * FROM table_teste";
    db.query(
        sql_select, (err, result) => {
        // res.send('Server: Hello Server Node JS');
        // console.log(result);  
        res.send(result);  
    });
});

app.post('/api/insert', (req, res)=> {

    const userName = req.body.username
    const Cidade = req.body.cidade

    const sql_insert = "INSERT INTO table_teste(user_name, cidade) VALUES (?,?)";
    db.query(
        sql_insert, [userName, Cidade], (err, result) => {
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