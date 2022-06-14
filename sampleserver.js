/* Server Creating Code */

/*
var http=require('http')

http.createServer(server).listen(7000)

function server(req,res){                   
    res.write('Hello World')
    res.end()
}
*/ 

/* To Kill the server press ctrl+c */

/* Function in the above code can be written in another ways */


/*
var http=require("http")
http.createServer(function(req,res){
    res.write("Hello World")
    res.end()
}).listen(7000)
*/


/* Code For calling a html file in nodejs server */

/*

var http=require('http')
var fs=require('fs')

http.createServer(function(req,res){
    fs.readFile("samplehtml.html",function(error,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}).listen(7000)

*/


/* creating url root page */
/*
var http=require('http')
var fs=require('fs')


http.createServer(function(req,res){
    
    if(req.url==='/'){
        fs.readFile('samplehtml.html',function(error,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end
        })
    }else if(req.url==='/login'){
        res.write("Login Page")
        res.end()
    }else{
        res.write("ERROR")
        res.end()
    }


}).listen(7000,()=>console.log("Server Started"))
*/


/*Adding html page to server root*/


var http=require('http')
var fs=require('fs')


http.createServer(function(req,res){
    
    if(req.url==='/'){
        fs.readFile('samplehtml.html',function(error,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(req.url==='/signup'){
        fs.readFile('sampleform.html',function(error,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else{
        res.write("ERROR")
        res.end()
    }


}).listen(7000,()=>console.log("Server Started"))