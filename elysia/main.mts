import { Elysia } from 'elysia';

new Elysia().get('/hello', () => 'Hello, World!').listen(3008);
