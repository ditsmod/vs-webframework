const restify = require('restify');

var server = restify.createServer();
server.get('/hello', function (req, res, next) {
  res.setHeader('content-type', 'text/plain');
  res.send('Hello, World!');
  next();
});

server.listen(3002, function() {
  console.log('Restify started on port 3002');
});