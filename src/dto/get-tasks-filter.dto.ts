import { TaskStatus } from 'src/tasks/task.model';

export class GetTaksFilterDto {
  status: TaskStatus;
  search: string;
}
