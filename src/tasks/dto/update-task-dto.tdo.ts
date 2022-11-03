import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status';

export class UpdateTaskStatusDro {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
