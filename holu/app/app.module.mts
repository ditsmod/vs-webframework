import { restRootModule, controller, route } from '@holu/rest';

@controller({ scope: 'route' })
export class SingletonController {
  @route('GET', 'hello')
  tellHello() {
    return 'Hello, World!';
  }
}

@controller()
export class PerRequestController {
  @route('GET', 'hello2')
  tellHello() {
    return 'Hello, World!';
  }
}

@restRootModule({
  controllers: [SingletonController, PerRequestController]
})
export class AppModule {}
