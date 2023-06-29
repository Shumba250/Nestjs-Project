import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bullmq';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Buyer } from './user.entity';
import { BuyerController } from './user.controller';
import { BuyerService } from './user.service';
import { TRANSCODE } from '../Queues';
import { UserConsumer } from './user.consumer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => ({
        connection: {
          host: ConfigService.get('REDIS_HOST'),
          port: ConfigService.get('REDIS_PORT'),
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue({
      name: TRANSCODE,
    }),
    TypeOrmModule.forFeature([Buyer]),
  ],
  controllers: [BuyerController],
  providers: [BuyerService, UserConsumer],
})
export class UserModule {}
