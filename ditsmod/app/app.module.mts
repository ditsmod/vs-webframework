import { rootModule, controller, route, Res, Router } from '@ditsmod/core';
import { RouterModule } from '@ditsmod/router';

@controller()
export class HelloWorldController {
  @route('GET', 'hello2')
  tellHello(res: Res) {
    res.send('Hello, World!');
  }
}

@rootModule({
  imports: [RouterModule],
  controllers: [HelloWorldController]
})
export class AppModule {
  constructor(router: Router) {
    router.on('GET', '/hello', async (nodeReq, nodeRes, aPathParams, queryString) => {
      nodeRes.end('Hello, World!');
    });
  }
}
