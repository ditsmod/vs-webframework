console.time('cold-start');

import { RestApplication } from '@ditsmod/rest';
import { AppModule } from './app/app.module.mjs';

const app = await RestApplication.create(AppModule, { serverOptions: { keepAliveTimeout: 0 } });
app.server.listen(3006, '0.0.0.0', () => console.timeEnd('cold-start'));
