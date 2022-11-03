import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Task from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskfilterDto } from './dto/task-filter.dto';
import { UpdateTaskStatusDro } from './dto/update-task-dto.tdo';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}
  async getAllTasks(): Promise<Task[]> {
    return this.tasksRepository.find();
  }
  getTaskById(id: string): Promise<Task> {
    return this.tasksRepository
      .findOneBy({ id: id })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw new NotFoundException(err);
      });
  }

  deleteTaskById(id: string): Promise<Task> {
    return this.tasksRepository
      .delete({ id: id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    // const index: number = this.tasks.findIndex((task) => task.id === id);
    // this.tasks.splice(index, 1);
    // console.log(this.tasks);
  }
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    console.log('aq var');
    const task = this.tasksRepository.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    console.log('aq var');
    await this.tasksRepository.save(task);
    return task;
  }
  // getFilteredTasks(taskFilter: TaskfilterDto): Task[] {
  //   const { status, search } = taskFilter;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.description.includes(search) || task.title.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }
  // updateTaskStatus(id: string, updateTaskStatusDro: UpdateTaskStatusDro): Task {
  //   const task = this.getTaskById(id);
  //   const { status } = updateTaskStatusDro;
  //   task.status = status;
  //   return task;
  // }
}
