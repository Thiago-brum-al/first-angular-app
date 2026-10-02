import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { IUser } from '../user/user.model';
import type { INewTaskData, ITask } from './task/task.model';
import { AddTask } from './add-task/add-task';
import { TasksService } from './tasks.service';

@Component({
  imports: [Task, AddTask],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  @Input({ required: true }) user!: IUser;

  showAddTask: boolean = false;

  constructor(
    private tasksService: TasksService
  ){}

  get displayName(): string {
    const value = this.user.name || "Default value";
    return value;
  };

  get selectedUserTask(): ITask[] {
    return this.tasksService.getTasks(this.user.id);
  };

  addTask(){
    this.showAddTask = true;
  }

  closeModal(){
    this.showAddTask = false;
  };
}
