import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserController } from './user.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [UserController],
})
export class UserModule {}
