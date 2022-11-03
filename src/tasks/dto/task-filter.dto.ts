import { TaskStatus } from '../task-status';

export class TaskfilterDto {
  status?: TaskStatus;
  search?: string;
}
