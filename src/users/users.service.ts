import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class UsersService {
  constructor (private configService: ConfigService) {}

  async findOne(id: Number) {
    
  }
}