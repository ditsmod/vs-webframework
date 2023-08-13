console.time('cold-start');

const Koa = require('koa');
const router = require('@koa/router')();
const app = module.exports = new Koa();

router.get('/hello', async function(ctx) {
  ctx.body = 'Hello, World!';
});

app.use(router.routes());

if (!module.parent) {
  app.listen(3001, () => {
    console.timeEnd('cold-start');
    console.log('Koa started on port 3001');
  });
}