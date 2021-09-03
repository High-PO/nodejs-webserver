var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

function send404Massage(response){
    response.writeHead(404, {"Content-Type" : "text/plain"});
    response.write("404 ERROR Plz Check 'index.html' File ");
    response.end();
}

function onRequest(request, response){
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
        app.use(express.static(path.join(__dirname,'frontend')));
    } else {
        send404Massage(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Server Created!");