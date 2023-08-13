import { Module, Scope } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

// @Controller()
@Controller({ scope: Scope.DEFAULT, durable: false })
export class AppController {
  @Get('/hello')
  getHello(): string {
    return 'Hello, World!';
  }
}

@Module({
  controllers: [AppController],
})
export class AppModule {}
