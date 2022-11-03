const http = require('http')
const fs = require('fs')
const filecontent = fs.readFileSync('index.html');

const server = http.createServer((req,res) => {
    var reference = http.get(req,url);

    res.writeHead(200 , {'content-type' : 'text/html'});
    if (reference == '/'){
        res.end(filecontent);
    }
    else if (reference == '/login'){
        const filecontent = fs.readFile('login.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    else if (reference == '/register'){
        const filecontent = fs.readFile('register.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }else if (reference == '/about')
    {
        const filecontent = fs.readFile('about.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    else res.end(filecontent);
    
})
const port = 6000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
    console.log(`running at http://${hostname}:${port}/`);
});


 
