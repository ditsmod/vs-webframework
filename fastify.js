const fastify = require('fastify')({ logger: false });

fastify.get('/hello', function (req, reply) { reply.send('Hello, World!') })

fastify.listen(3003, () => {
  fastify.log.info(`Fastify listening on 3003`)
});
