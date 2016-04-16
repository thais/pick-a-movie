var express = require("express");
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));

app.set('views', './src/client/templates');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
});

console.log("Listening in port " + port);
app.listen(port);
