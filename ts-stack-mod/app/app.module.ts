import { RootModule } from '@ts-stack/mod';
import { Controller, Response, Route } from '@ts-stack/mod';

@Controller()
export class HelloWorldController {
  constructor(private res: Response) {}

  @Route('GET', 'hello')
  tellHello() {
    this.res.send('Hello, World!');
  }
}


@RootModule({ controllers: [HelloWorldController], listenOptions: {port: 3006} })
export class AppModule {}
