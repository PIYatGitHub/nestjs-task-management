import { TaskStatus } from 'src/tasks/task-status.enum.ts';
import { IsNotEmpty, IsOptional, IsIn } from 'class-validator';

export class GetTaksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.COMPLETE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
  status: TaskStatus;
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
