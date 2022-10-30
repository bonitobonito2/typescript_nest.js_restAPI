import { TaskStatus } from '../task.model';

export class TaskfilterDto {
  status?: TaskStatus;
  search?: string;
}
