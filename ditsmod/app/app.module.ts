import { RootModule, Router, Controller, Res, Route } from '@ditsmod/core';
import { DefaultRouter } from '@ditsmod/router';

@Controller()
export class HelloWorldController {
  constructor(private res: Res) {}

  @Route('GET', 'hello')
  tellHello() {
    this.res.send('Hello, World!');
  }
}

@RootModule({
  controllers: [HelloWorldController],
  listenOptions: { port: 3006 },
  providersPerApp: [{ provide: Router, useClass: DefaultRouter }],
})
export class AppModule {}
