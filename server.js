var express = require('express');

var app = express();

app.use(express.static(__dirname + '/CSS'));




app.get('/HTML/index.html',function(req,res) {
 res.sendFile(__dirname + '/HTML/index.html');
 });
 
 app.listen(7888, function() {
  console.log("If this does not work soon I will kill a small animal");
  });