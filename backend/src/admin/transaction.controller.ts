import { Controller, Post, Body, UseGuards, Request, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(RolesGuard)
@Controller('transaction')
export class TransactionController {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  @Post('deposit')
  async deposit(@Request() req, @Body() body: { amount: number }) {
    const auth = req.headers['authorization'];
    if (!auth) throw new BadRequestException('No token');
    const token = auth.replace('Bearer ', '');
    const payload = this.jwt.decode(token) as any;
    if (!payload?.sub) throw new BadRequestException('Invalid token');
    // Simulate deposit logic
    return this.prisma.transaction.create({
      data: {
        userId: payload.sub,
        amount: body.amount,
        type: 'DEPOSIT',
        status: 'COMPLETED',
      },
    });
  }
}
