const http = require('http')
const fs = require('fs');
const e = require('express');
const filecontent = fs.readFileSync('index.html');

const server = http.createServer((req,res) => {

    res.writeHead(200 , {'content-type' : 'text/html'});
    if (req.url == '/'){
        res.end(filecontent);
    }
    else if (req.url == '/login'){
        const filecontent = fs.readFile('login.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    else if (req.url == '/register'){
        const filecontent = fs.readFile('register.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }else if (req.url == '/about')
    {
        const filecontent = fs.readFile('about.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    else {
        const filecontent = fs.readFile('index.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    
});
const port = 6000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
    console.log(`running at http://${hostname}:${port}/`);
});


 
