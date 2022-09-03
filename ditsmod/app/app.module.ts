import { RootModule, Controller, Res, Route } from '@ditsmod/core';
import { RouterModule } from '@ditsmod/router';

@Controller()
export class HelloWorldController {
  constructor(private res: Res) {}

  @Route('GET', 'hello')
  tellHello() {
    this.res.send('Hello, World!');
  }
}

@RootModule({
  imports: [RouterModule],
  controllers: [HelloWorldController],
  listenOptions: { port: 3006 }
})
export class AppModule {}
