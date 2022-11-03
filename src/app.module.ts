import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import Task from './tasks/task.entity';
import User from './users/users.entity';
import { TasksModule } from './tasks/tasks.module';
// console.log(Task);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'taskMng',
      autoLoadEntities: true,
      synchronize: true,
      entities: [User, Task],
    }),
    UsersModule,
    TasksModule,
  ],
})
export class AppModule {}
