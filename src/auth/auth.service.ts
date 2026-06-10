import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginUserDto, RegisterUserDto } from './dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('ProductsService');

  constructor(private prisma: PrismaService) {
    this.logger.log('MongoDB database connected');
  }

  async registerUser(registerUserDto: RegisterUserDto) {
    const { email, name, password } = registerUserDto;
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (user) {
        throw new RpcException({
          status: 400,
          message: 'User already exists',
        });
      }

      const newUser = await this.prisma.user.create({
        data: {
          email: email,
          password: bcrypt.hashSync(password, 10), // TODO: encriptar / hash
          name: name,
        },
      });

      const { password: __, ...rest } = newUser;

      return {
        user: rest,
        token: 'ABC',
      };
    } catch (error) {
      throw new RpcException({
        status: 400,
        message: error.message,
      });
    }
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new RpcException({
          status: 400,
          message: 'Wrong user or password',
        });
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        throw new RpcException({
          status: 400,
          message: 'Wrong user or password',
        });
      }

      const { password: __, ...rest } = user;

      return {
        user: rest,
        token: 'ABC',
      };
    } catch (error) {
      throw new RpcException({
        status: 400,
        message: error.message,
      });
    }
  }
}
