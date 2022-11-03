const http = require('http');


const server = http.createServer((req,res) => {
    console.log(req,url);
    if (req.url == "/"){
        res.end("Hello there");
    }
    else if (req.url == "/about"){
        console.log("hello about us sides");
    }
    else if (req.url == "/Helpster"){
        res.end("HEllo !! Welcome to our site");
    }
    else {
        res.writeHead(404);
        res.end("erroe 404: page not found");
    }
    res.end("server started");
});

server.listen(3000 , () => {
    console.log("happy");
});


 
