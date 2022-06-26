var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('../../Key/server.key', 'utf8');
var certificate = fs.readFileSync('sslCertification/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here

app.get('/', function(req, res, next) {
    res.json({
        data : 'buba'
    });
  });


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

let PORT1 = 8080;
let PORT2 = 3000;

httpServer.listen(PORT1,()=>{
    console.log('HTTP on port:', PORT1);
    });
httpsServer.listen(PORT2,()=>{
    console.log('HTTPS on port:', PORT2);
    });