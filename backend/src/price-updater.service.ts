import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from './prisma.service';
import { EventsGateway } from './events.gateway';

@Injectable()
export class PriceUpdaterService {
  private readonly logger = new Logger(PriceUpdaterService.name);
  constructor(private prisma: PrismaService, private events: EventsGateway) {}

  @Cron(CronExpression.EVERY_15_MINUTES)
  async fetchAndUpdatePrices() {
    this.logger.log('Fetching price updates...');
    // Simulate price update for all assets
    const assets = await this.prisma.asset.findMany();
    for (const asset of assets) {
      const newPrice = asset.price * (0.95 + Math.random() * 0.1); // Simulate
      await this.prisma.asset.update({ where: { id: asset.id }, data: { price: newPrice } });
      await this.prisma.priceHistory.create({ data: { assetId: asset.id, price: newPrice } });
      this.events.sendPriceUpdate({ symbol: asset.symbol, price: newPrice });
    }
  }
}
