import { rootModule, controller, SingletonRequestContext, Res } from '@ditsmod/core';
import { RoutingModule, route } from '@ditsmod/routing';

@controller({ scope: 'module' })
export class SingletonController {
  @route('GET', 'hello')
  tellHello(ctx: SingletonRequestContext) {
    ctx.send('Hello, World!');
  }
}

@controller()
export class PerRequestController {
  @route('GET', 'hello2')
  tellHello(res: Res) {
    res.send('Hello, World!');
  }
}

@rootModule({
  imports: [RoutingModule],
  controllers: [SingletonController, PerRequestController]
})
export class AppModule {}
