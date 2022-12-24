import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { ExapleMiddleware } from './middlewares/exaple/exaple.middleware';
import { UsersService } from './serices/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule{
configure(consumer:MiddlewareConsumer){
  consumer.apply(ExapleMiddleware).forRoutes("users")}
}
