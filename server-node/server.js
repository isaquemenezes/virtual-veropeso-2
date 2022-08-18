const http = require('http');
const app =require('./app');

const port = process.env.PORT || 5000;
const host = '127.0.0.1';

const server = http.createServer(app);

server.listen(port, host, function (){
    console.log(`Rodando em http://${host}:${port}`);
});