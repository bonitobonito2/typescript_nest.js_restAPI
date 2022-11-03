import { IsNotEmpty, Length } from 'class-validator';

export class CreateTaskDto {
  @Length(5)
  title: string;

  @Length(7)
  description: string;
}
