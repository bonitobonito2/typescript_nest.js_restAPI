import { IsNotEmpty, Length, isEmail } from 'class-validator';

export default class UserCreateDto {
  @Length(6)
  password: string;

  @Length(6)
  userName: string;

  @Length(5)
  email: string = undefined;
}
