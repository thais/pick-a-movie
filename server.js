var express = require("express");
var app = express();
var port = 3000;

app.get('/', function(req, res) {
  console.log("Received request: /");
  res.send('Hello World');
});

console.log("Listening in port " + port);
app.listen(port);
