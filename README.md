## Install

```bash
npm i
```

## Run benchmarks

```bash
npm run build
npm start
ab -n 50000 -c 10 localhost:3000/hello
```

Here you need manually changes port in the range from 3000 to 3006.

"Hello, World!" performance comparison for web frameworks:

- `Fastify`
- `Ditsmod`
- `Koa`
- `Restify`
- `Express`
- `Nestjs`
- `Hapi`

![req-per-sec-frameworks.png](req-per-sec-frameworks.png)

## Stop webservers

```bash
npm run stop
```