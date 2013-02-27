var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('node 0.8.21, npm 1.2.12');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});