import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDro {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
