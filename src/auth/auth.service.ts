import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  signUp() {
    console.log('up')
    return 'I am signed up!'
  }

  signIn() {
    console.log('in')
    return 'I am signed in!'
  }
}
