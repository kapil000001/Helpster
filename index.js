const http = require('http')
const fs = require('fs')
const filecontent = fs.readFile("index.html" , (err) => {
    if (err){
        res.end("error : 404");
    }
});

const server = http.createServer((req,res) => {
    res.writeHead(200 , {"content-type" : "text/html"})
    res.end(filecontent)
});

server.listen(3000 , '127.0.0.1' , () => {
    console.log("Listening on port 3000")
})


 
