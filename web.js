// Node js server 
var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var port = process.env.PORT || 5000

app.get('/',function(request,response) { response.send('Wassup ?! :-) ');});

app.listen(port, function() { console.log('Listening on '+port);});



