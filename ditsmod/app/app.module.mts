import { rootModule, controller, route, Res } from '@ditsmod/core';
import { RouterModule } from '@ditsmod/router';

@controller()
export class HelloWorldController {
  @route('GET', 'hello')
  tellHello(res: Res) {
    res.send('Hello, World!');
  }
}

@rootModule({
  imports: [RouterModule],
  controllers: [HelloWorldController]
})
export class AppModule {}
