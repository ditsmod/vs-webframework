console.time('cold-start');

var express = require('express');

var app = express();

app.get('/hello', function(req, res){
  res.send('Hello, World!');
});

if (!module.parent) {
  app.listen(3000, () => {
    console.timeEnd('cold-start');
    console.log('Express started on port 3000');
  });
}
