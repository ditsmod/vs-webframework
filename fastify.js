console.time('cold-start');

const fastify = require('fastify')({ logger: false });

fastify.get('/hello', function (req, reply) {
  reply.send('Hello, World!');
})

fastify.listen({ port: 3003 }, () => {
  console.timeEnd('cold-start');
  fastify.log.info(`Fastify listening on 3003`)
});
