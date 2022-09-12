const express = require('express');
const body_parser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
const urlEncodedParser = body_parser.urlencoded({extended: false});

const { engine } = require("express-handlebars");


//DB CONNECTION
const db = mysql.createConnection({ host: "localhost", user: "root", password: "", port: 3306, database: "vp-virtual", });
const sql = db;

//INSTANTEDS
app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({extended: true}));

//Link de arquivos externos
app.use("/css", express.static("css"));
app.use("/js", express.static("js"));
app.use("/images", express.static("images"));

// Definir o motor de visualização para usar, neste caso
app.engine( "hbs", engine({ layoutsDir: __dirname + "/views/layouts", extname: "hbs", }) );
app.set("view engine", "hbs");

//HOME
//app.get('/', function (req,res){ res.send('Server: Hello Server Node JS'); });
//Routes Home
app.get("/", function (req, res) {
    sql.query("select * from produto order by id asc",
              function (err, results, filelds) {
                res.render("index", { data: results });
              }
        );
  });

/******** API FEIRANTE **************/
// Cadastro de Feirante
app.post('/api/feirante', (req, res)=> {

    const nome_ = req.body.Nome;
    const contato_ = req.body.Contato;
    const barraca_ = req.body.Barraca;
    const localizacao_ = req.body.Localizacao_barraca;
    
    const sql_insert = 
        "INSERT INTO feirante(nome, contato, nome_barraca, localizacao_barraca) VALUES (?,?,?,?)";
    db.query( sql_insert, [nome_, contato_, barraca_, localizacao_,], (err, result) => { });
});

/******** API USUARIO **************/
//Cadastro de usuario
app.post('/api/usuariocadastro', (req, res)=> {

    const nome_ = req.body.Nome;
    const contato_ = req.body.Contato;
    const senha_ = req.body.Senha
    
    const sql_insert = 
        "INSERT INTO usuario(nome, contato, senha) VALUES (?,?,?)";
    db.query( sql_insert, [nome_, contato_, senha_], (err, result) => { });
});

/******** API PRODUCT **************/
app.get('/api/select', function (req, res) {
    const sql_select = "SELECT * FROM produto";
    db.query(
        sql_select, (err, result) => {
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
    db.query( sql_insert, [nome_barraca, categ, nome_produto, price], (err, result) => { });
});

//Update
/*app.get('/api/select/:id_product', function (req, res) {
    const id = req.params.id_product;
    const sql_select = "SELECT * FROM produto WHERE id=?";
    db.query(
        sql_select, id, (err, result) => {
        res.send(result);  
    });
});
app.get('/api/update/:id', urlEncodedParser, function (req, res){
    const sql_select = "SELECT * FROM produto WHERE id=?"
                            ;
    db.query(
        sql_select, [req.params.id], (err, result) => {
        res.send(result);  
    });

});*/


/******** PRODUCT SIDE BACK **************/
app.get("/inserir-produto", function (req, res) {
  res.render("inserir-produto");
});

app.post("/controllerForm", urlEncodedParser, function (req, res) {
  sql.query("INSERT INTO produto values (?,?,?,?,?)", 
              [
                req.body.id,
                req.body.fk_nome_barraca,
                req.body.category,
                req.body.name,
                req.body.preco,
              ]);
            res.render("controllerForm", {
              categoria: req.body.category,
              nome: req.body.name,
              preco: req.body.preco,
            });
});

app.get("/edit/:id", urlEncodedParser, function (req, res) {
    sql.query("select * from produto where id=?",[req.params.id],
                function (err, results, filelds) {
                  res.render("edit", {
                    id: req.params.id,
                    fk_nome_barraca: results[0].fk_nome_barraca,
                    categoria: results[0].categoria,
                    nome: results[0].nome_produto,
                    preco: results[0].preco,
                  });
                }
              );
});
  
  
app.post("/controllerEdit", urlEncodedParser, function (req, res) {
  sql.query("update produto set fk_nome_barraca=?, categoria=?, nome_produto=?, preco=? where id=?", 
              [
                 req.body.fk_nome_barraca,
                 req.body.category,
                 req.body.nome,
                 req.body.preco,
                 req.body.id,
               ]);
              res.render("controllerEdit");
});

app.get("/select/:id?", function (req, res) {
  
    if (req.params.id) 
    {
      sql.query("select * from produto where id=?",[req.params.id],
                function (err, results, filelds) {
                  res.render("select", { data: results });
                }
              );
    } else {
      sql.query("select * from produto order by id asc",
                function (err, results, filelds) {
                  res.render("select", { data: results });
                }
              );
    }
});

app.get("/del/:id", function (req, res) {
  sql.query("delete from produto where id=?", [req.params.id]);
  res.render("controllerDelete");
});


module.exports = app;