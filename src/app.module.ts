import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './User/user.module';
import { Buyer } from './User/user.entity';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('LOCALHOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: true,
        logging: false,
        entities: [User, Buyer],
        migrations: [],
        subscribers: [],
      }),
      inject: [ConfigService],
    }),
    UserModule,
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
