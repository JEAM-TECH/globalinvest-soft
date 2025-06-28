import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { PortfolioController } from './portfolio.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
