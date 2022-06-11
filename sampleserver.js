var http=require('http')

http.createServer(server).listen(7000)

function server(req,res){
    res.write('Hello World')
    res.end()
} 

/* Function in the above code can be written in another ways */

/* 

var http=require("http")
http.createServer(function(req,res){
    res.write("Hello World")
    res.end()
}).listen(7000)

*/