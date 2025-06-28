import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [TransactionController],
})
export class AdminModule {}
