import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from '../tasks/task-status';
import { Status } from './status.enum';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  userName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  status: Status;
}
