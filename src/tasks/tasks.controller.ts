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
import { TaskStatus } from './task-status';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { TaskfilterDto } from './dto/task-filter.dto';
import Task from './task.entity';
import { UpdateTaskStatusDro } from './dto/update-task-dto.tdo';

@Controller('tasks')
export class TasksController {
  taskService: TasksService;

  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }
  @Get()
  getAllTasks(@Query() taskfilter: TaskfilterDto): Promise<Task[]> {
    const data = this.taskService.getAllTasks();
    data
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }
  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): object {
    return this.taskService.deleteTaskById(id);
  }
  // //update status
  // @Patch('/:id/status')
  // updateStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDro,
  // ): Task {
  //   return this.taskService.updateTaskStatus(id, updateTaskStatusDto);
  // }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto, 'xd');
    return this.taskService.createTask(createTaskDto);
  }
}
