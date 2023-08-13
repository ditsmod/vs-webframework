console.time('cold-start');

import { Application } from '@ditsmod/core';

import { AppModule } from './app/app.module';

new Application().bootstrap(AppModule).then(() => {
  console.timeEnd('cold-start');
}).catch((err) => {
  console.log(err);
});
