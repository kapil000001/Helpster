const mongoose = require('mongoose');

const http = require('http')
const fs = require('fs');
const e = require('express');

const filecontent = fs.readFileSync(`../Frontend/index.html`);
const DB = 'mongodb+srv://Shivanshu_Singh:OPKL@123@cluster0.uxvu0x9.mongodb.net/Helpster?retryWrites=true&w=majority';


mongoose.connect(DB).then(() => {
    console.log("connection success");
}).catch((err) => {
    console.log("connection failed")
});

const server = http.createServer((req,res) => {

    res.writeHead(200 , {'content-type' : 'text/html'});
    if (req.url == '/'){
        res.end(filecontent);
    }
    else if (req.url == '/login'){
        const filecontent = fs.readFile(`../Frontend/index.html`,(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    else if (req.url == '/register'){

        const filecontent = fs.readFile(`../Frontend/index.html`,(err,data) => {

            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    else {

        const filecontent = fs.readFile(`../Frontend/index.html`,(err,data) => {

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


 
// ../${__filename} + /Frontend/Login.html