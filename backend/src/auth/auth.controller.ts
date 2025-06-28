import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string; name?: string }) {
    const existing = await this.prisma.user.findUnique({ where: { email: body.email } });
    if (existing) throw new BadRequestException('Email already registered');
    const hash = await bcrypt.hash(body.password, 10);
    const user = await this.prisma.user.create({
      data: { email: body.email, password: hash, name: body.name },
    });
    return { id: user.id, email: user.email };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: body.email } });
    if (!user) throw new BadRequestException('Invalid credentials');
    const valid = await bcrypt.compare(body.password, user.password);
    if (!valid) throw new BadRequestException('Invalid credentials');
    const accessToken = this.jwt.sign({ sub: user.id, email: user.email, role: user.role });
    return { accessToken };
  }
}
