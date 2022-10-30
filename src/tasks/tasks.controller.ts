import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { TaskfilterDto } from './dto/task-filter.dto';
import { UpdateTaskStatusDro } from './dto/update-task-dto.tdo';

@Controller('tasks')
export class TasksController {
  taskService: TasksService;

  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }
  @Get()
  getAllTasks(@Query() taskfilter: TaskfilterDto): Task[] {
    if (Object.keys(taskfilter).length) {
      return this.taskService.getFilteredTasks(taskfilter);
    } else {
      return this.taskService.getAllTasks();
    }
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }
  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): object {
    this.taskService.deleteTaskById(id);
    return {
      succses: true,
      id: `deleted item ${id}`,
    };
  }
  //update status
  @Patch('/:id/status')
  updateStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDro,
  ): Task {
    return this.taskService.updateTaskStatus(id, updateTaskStatusDto);
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }
}
