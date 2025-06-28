import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { InvestmentModule } from './investment/investment.module';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from './prisma.module';
import { RedisProviderModule } from './redis.module';
import { EventsModule } from './events.module';
import { PriceUpdaterModule } from './price-updater.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20,
    }),
    PrismaModule,
    RedisProviderModule,
    EventsModule,
    PriceUpdaterModule,
    AuthModule,
    UserModule,
    PortfolioModule,
    InvestmentModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
