console.time('cold-start');

import Fastify from 'fastify';
const fastify = Fastify({ logger: false, keepAliveTimeout: 5000 });

fastify.get('/hello', function (req, reply) {
  reply.send('Hello, World!');
});

fastify.listen({ port: 3003 }, () => {
  console.timeEnd('cold-start');
  fastify.log.info(`Fastify listening on 3003`);
});
