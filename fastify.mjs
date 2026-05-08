console.time('cold-start');

import Fastify from 'fastify';
const fastify = Fastify({ logger: false, keepAliveTimeout: 0 });

fastify.get('/hello', function (req, reply) {
  reply.send('Hello, World!');
});

const port = 3000;
fastify.listen({ port }, () => {
  console.timeEnd('cold-start');
  fastify.log.info(`Fastify listening on port`);
});
