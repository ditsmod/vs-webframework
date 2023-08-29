console.time('cold-start');

import { Application } from '@ditsmod/core';

import { AppModule } from './app/app.module.mjs';

const app = await new Application().bootstrap(AppModule);
app.server.listen(3006, 'localhost', () => console.timeEnd('cold-start'));
