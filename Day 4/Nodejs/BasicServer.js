var http = require("http");
var fs = require("fs");

const server = http.createServer((req,res)=>{
    fs.readFile("Index.html",(err,data)=>{
        if(data){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        }else {
            res.writeHead(500, {"Content-Type": "text/html"});
            res.end("Something went wrong!")
        }
    })

});

server.listen(3000, "127.0.0.1", ()=> {
    console.log("Listening on 127.0.0.1:3000");
})