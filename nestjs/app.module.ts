import { Module, Scope } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';

// @Controller({ scope: Scope.REQUEST })
@Controller({ scope: Scope.DEFAULT })
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
