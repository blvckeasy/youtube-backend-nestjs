import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import configuration from 'config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      load: [configuration]
    }), 
    TypeOrmModule.forRoot(Object(configuration().database)),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
