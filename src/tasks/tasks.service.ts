import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { GetTaksFilterDto } from 'src/dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilter(filterDto: GetTaksFilterDto): Task[] {
    console.log('Here?????');
    console.log(filterDto);
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();
    if (status) tasks = tasks.filter(t => t.status === status);
    if (search)
      tasks = tasks.filter(
        t => t.title.includes(search) || t.description.includes(search),
      );
    return tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(i => i.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      description,
      id: uuid(),
      status: TaskStatus.OPEN,
      title,
    };
    this.tasks.push(task);
    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
