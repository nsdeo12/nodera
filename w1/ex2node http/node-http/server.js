/**
 * Created by nildeo on 4/23/2017.
 */
http=require('http');
var hostname='localhost';
var port=3000;

var server=http.createServer(function (req,res) {
   console.log(req.headers);
   res.writeHead(200,{'contentType':'text/html'});
   res.end('<html><body><h1>Hello MySql</h1></body></html>');
});
server.listen(port,hostname,function () {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log("server runing at http://"+hostname+":"+port);
});