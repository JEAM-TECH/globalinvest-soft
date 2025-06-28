import { Module } from '@nestjs/common';
import { InvestmentController } from './investment.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [InvestmentController],
})
export class InvestmentModule {}
