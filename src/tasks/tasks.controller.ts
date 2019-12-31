import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum.ts';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { GetTaksFilterDto } from 'src/dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //   @Get()
  //   getTasks(@Query(ValidationPipe) filterDto: GetTaksFilterDto): Task[] {
  //     if (Object.keys(filterDto).length)
  //       return this.tasksService.getTasksWithFilter(filterDto);
  //     return this.tasksService.getAllTasks();
  //   }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    console.log('Do we hit it? ', id);
    return this.tasksService.getTaskById(id);
  }

  //   @Post()
  //   @UsePipes(ValidationPipe)
  //   createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //     return this.tasksService.createTask(createTaskDto);
  //   }

  //   @Patch('/:id/status')
  //   updateTaskStatus(
  //     @Param('id') id: string,
  //     @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  //   ): Task {
  //     return this.tasksService.updateTaskStatus(id, status);
  //   }
  //   @Delete('/:id')
  //   deleteTask(@Param('id') id: string): void {
  //     this.tasksService.deleteTask(id);
  //   }
}
