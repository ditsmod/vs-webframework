## Install

```bash
npm i
```

## Run benchmarks

```bash
npm run compile
npm start
ab -n 50000 localhost:3000/hello
```

Here you need manually changes port in the range from 3000 to 30005.

"Hello, World!" performance comparison for web frameworks:

- `fastify` v3.0.2
- `@ts-stack/mod` v1.0.0-beta.24
- `koa` v2.13.0
- `restify` v8.5.1
- `express` v4.17.1
- `nestjs` v7.3.2

![req-per-sec-frameworks.png](req-per-sec-frameworks.png)

## Stop webservers

```bash
npm run stop
```