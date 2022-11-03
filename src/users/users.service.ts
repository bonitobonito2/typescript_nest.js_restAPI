import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserCreateDto from './dto/create-user.dto';
import { Status } from './status.enum';
import { Repository } from 'typeorm';
import User from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly tasksRepository: Repository<User>,
  ) {}

  async createUser(userCraeteDto: UserCreateDto) {
    const { email, password, userName } = userCraeteDto;
    const newUser = this.tasksRepository.create({
      userName,
      email,
      password,
      status: Status.MEMBER,
    });
    const result = await this.tasksRepository.save(newUser);
    console.log(result);
    return result;
  }
}
