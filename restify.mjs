console.time('cold-start');

import restify from 'restify';

const server = restify.createServer({ name: '' });
server.get('/hello', function (req, res, next) {
  res.setHeader('content-type', 'text/plain');
  res.send('Hello, World!');
  next();
});

server.listen(3002, function () {
  console.timeEnd('cold-start');
  console.log('Restify started on port 3002');
});
