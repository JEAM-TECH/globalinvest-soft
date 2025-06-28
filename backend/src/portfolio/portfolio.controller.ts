import { Controller, Get, Post, Body, Param, UseGuards, Request, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(RolesGuard)
@Controller('portfolio')
export class PortfolioController {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  @Get('me')
  async getMyPortfolio(@Request() req) {
    const auth = req.headers['authorization'];
    if (!auth) throw new BadRequestException('No token');
    const token = auth.replace('Bearer ', '');
    const payload = this.jwt.decode(token) as any;
    if (!payload?.sub) throw new BadRequestException('Invalid token');
    return this.prisma.portfolio.findMany({
      where: { userId: payload.sub },
      include: { assets: { include: { asset: true } } },
    });
  }
}
