var express = require('express');
var app = express();
var path    = require("path");
//var index= require('public/camara');
app.use(express.static('public'));

app.get('/camara', function(req,res){
  res.sendfile(__dirname + '/public/camara.html');
 }); 
 app.get('/', function(req,res){
  res.sendfile(__dirname + '/public/index.html');
 }); 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});