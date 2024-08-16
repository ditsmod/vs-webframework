import { cpus } from 'node:os';

const numCPUs = cpus().length;
for (let i = 0; i < numCPUs; i++) {
  Bun.spawn(['bun', 'dist/elysia/main.mjs'], {
    stdio: ['inherit', 'inherit', 'inherit'],
    env: { ...process.env },
  });
}
