import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(RolesGuard)
@Controller('user')
export class UserController {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  @Get('me')
  async getMe(@Request() req) {
    const auth = req.headers['authorization'];
    if (!auth) return null;
    const token = auth.replace('Bearer ', '');
    const payload = this.jwt.decode(token) as any;
    if (!payload?.sub) return null;
    return this.prisma.user.findUnique({
      where: { id: payload.sub },
      select: { id: true, email: true, name: true, role: true, kycStatus: true },
    });
  }

  @Roles('ADMIN')
  @Get('all')
  async getAllUsers() {
    return this.prisma.user.findMany({
      select: { id: true, email: true, name: true, role: true, kycStatus: true },
    });
  }
}
