import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import UserCreateDto from './dto/create-user.dto';
import User from './users.entity';

@Controller('users')
export class UsersController {
  userService: UsersService;
  constructor(userService: UsersService) {
    this.userService = userService;
  }

  @Post()
  craeteUser(@Body() userCraetedto: UserCreateDto) {
    // console.log(userCraetedto);
    return this.userService.createUser(userCraetedto);
  }
}
