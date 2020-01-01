import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum.ts';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { GetTaksFilterDto } from 'src/dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
}
