import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PriceUpdaterService } from './price-updater.service';
import { PrismaModule } from './prisma.module';
import { EventsModule } from './events.module';

@Module({
  imports: [ScheduleModule.forRoot(), PrismaModule, EventsModule],
  providers: [PriceUpdaterService],
})
export class PriceUpdaterModule {}
