import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum.ts';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { GetTaksFilterDto } from 'src/dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  //   private tasks: Task[] = [];
  //   getAllTasks(): Task[] {
  //     return this.tasks;
  //   }
  //   getTasksWithFilter(filterDto: GetTaksFilterDto): Task[] {
  //     const { status, search } = filterDto;
  //     let tasks = this.getAllTasks();
  //     if (status) tasks = tasks.filter(t => t.status === status);
  //     if (search)
  //       tasks = tasks.filter(
  //         t => t.title.includes(search) || t.description.includes(search),
  //       );
  //     return tasks;
  //   }
  //   getTaskById(id: string): Task {
  //     const found = this.tasks.find(i => i.id === id);
  //     if (!found) throw new NotFoundException(`Task with id: ${id} not found!`);
  //     return found;
  //   }
  //   createTask(createTaskDto: CreateTaskDto): Task {
  //     const { title, description } = createTaskDto;
  //     const task: Task = {
  //       description,
  //       id: uuid(),
  //       status: TaskStatus.OPEN,
  //       title,
  //     };
  //     this.tasks.push(task);
  //     return task;
  //   }
  //   updateTaskStatus(id: string, status: TaskStatus): Task {
  //     const task = this.getTaskById(id);
  //     task.status = status;
  //     return task;
  //   }
  //   deleteTask(id: string): void {
  //     const found = this.getTaskById(id);
  //     this.tasks = this.tasks.filter(task => task.id !== found.id);
  //   }
}
