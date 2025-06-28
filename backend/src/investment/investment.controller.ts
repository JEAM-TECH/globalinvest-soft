import { Controller, Post, Body, UseGuards, Request, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(RolesGuard)
@Controller('investment')
export class InvestmentController {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  @Post('buy')
  async buy(@Request() req, @Body() body: { assetId: string; amount: number }) {
    const auth = req.headers['authorization'];
    if (!auth) throw new BadRequestException('No token');
    const token = auth.replace('Bearer ', '');
    const payload = this.jwt.decode(token) as any;
    if (!payload?.sub) throw new BadRequestException('Invalid token');
    // Simulate buy logic
    return this.prisma.investment.create({
      data: {
        userId: payload.sub,
        assetId: body.assetId,
        amount: body.amount,
        type: 'BUY',
      },
    });
  }
}
