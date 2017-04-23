var http=require('http');
var fs=require('fs');
var path=require('path');

var hostname='localhost';
var port=3000;


var server=http.createServer(function (req,res) {
    console.log("request for url="+req.url+"method="+req.method);
    if(req.method=='GET') {
        var fileurl;
        if (req.url == '/') fileurl = 'index.html';
        else fileurl = req.url;

        var filepath = path.resolve('./public/' + fileurl);
        var fileExt = path.extname(filepath);
        if (fileExt == '.html') {
            fs.exists(filepath,function exists() {
                if (!exists) {

                    res.writeHead(404, {'contentType': 'text/html'});
                    res.end('<html><body><h1>404 error;' + fileurl + 'not not found</h1></body></html>');
                    return;
                }
                res.writeHead(200, {'contentType': 'text/html'});
                fs.createReadStream(filepath).pipe(res);
            });
        }
        else {
            res.writeHead(404, {'contentType': 'text/html'});
            res.end('<html><body><h1>404 error;' + fileurl + 'not a html file</h1></body></html>');
            return;

        }
    }
    else{
        res.writeHead(404,{'contentType':'text/html'});
        res.end('<html><body><h1>404 error;'+req.method+ 'not supported</h1></body></html>');
        return;
    }


});
server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});