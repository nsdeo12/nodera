/**
 * Created by nildeo on 4/23/2017.
 * serving static files with express
 */

var express=require('express');
var morgan=require('morgan');              //used for logging
var http=require('http');
var hostname='localhost';
var port=3000;


var app=express();

app.use(morgan('dev'));

app.use(express.static(__dirname+'/public'));
app.listen(port,hostname,function () {
   console.log(`server up at http://${hostname}:${port}`);
});





