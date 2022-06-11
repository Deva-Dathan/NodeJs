var http=require('http')

http.createServer(server).listen(7000)

function server(req,res){
    res.write('Hello World')
    res.end()
} 