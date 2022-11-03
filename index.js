const http = require("http");


const server = http.createServer((req,res) => {
    res.end("index.html");
})

server.listen(3000 , "127.0.0.1");
console.log("success");
