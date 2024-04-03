import { rootModule, controller, route, Res, RequestContext } from '@ditsmod/core';
import { RoutingModule } from '@ditsmod/routing';

@controller({ isSingleton: true })
export class SingletonController {
  @route('GET', 'hello')
  tellHello(ctx: RequestContext) {
    ctx.nodeRes.setHeader('Content-Type', 'text/plain; charset=utf-8')
    ctx.nodeRes.end('Hello, World!');
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
