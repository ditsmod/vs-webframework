console.time('cold-start');

import express from 'express';
const app = express();
app.disable('etag');
app.disable('x-powered-by');

app.get('/hello', function (req, res) {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.timeEnd('cold-start');
  console.log('Express started on port 3000');
});
