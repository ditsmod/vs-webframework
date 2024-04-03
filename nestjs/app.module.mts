import { Module, Scope, Controller, Get } from '@nestjs/common';

@Controller({ scope: Scope.DEFAULT })
export class SingletonController {
  @Get('/hello')
  getHello(): string {
    return 'Hello, World!';
  }
}

@Controller({ scope: Scope.REQUEST })
export class PerRequestController {
  @Get('/hello2')
  getHello(): string {
    return 'Hello, World!';
  }
}

@Module({
  controllers: [SingletonController, PerRequestController],
})
export class AppModule {}
