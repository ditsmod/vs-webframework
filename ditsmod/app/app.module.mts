import { restRootModule, controller, RequestContext, Res, route } from '@ditsmod/rest';

@controller({ scope: 'ctx' })
export class SingletonController {
  @route('GET', 'hello')
  tellHello(ctx: RequestContext) {
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

@restRootModule({
  controllers: [SingletonController, PerRequestController]
})
export class AppModule {}
