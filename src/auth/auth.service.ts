import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('ProductsService');

  constructor(private prisma: PrismaService) {
    this.logger.log('MongoDB database connected');
  }
}
