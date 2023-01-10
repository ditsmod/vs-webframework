import { rootModule, controller, route, RequestContext } from '@ditsmod/core';
import { RouterModule } from '@ditsmod/router';

@controller()
export class HelloWorldController {
  @route('GET', 'hello')
  tellHello(ctx: RequestContext) {
    ctx.res.send('Hello, World!');
  }
}

@rootModule({
  imports: [RouterModule],
  controllers: [HelloWorldController],
  listenOptions: { port: 3006 }
})
export class AppModule {}
