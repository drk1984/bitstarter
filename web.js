// Node js server 
var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var port = process.env.PORT || 5000

var indextext = fs.readFileSync('index.html').toString().split('\n');
app.get('/',function(request,response) { response.send(indextext[0]+'\n'+'***'+indextext[1]+'***');});

app.listen(port, function() { console.log('Listening on '+port);});



