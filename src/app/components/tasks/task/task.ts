import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from './task.model';
import { DatePipe } from '@angular/common';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';

@Component({
  imports: [DatePipe, Card],
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class Task {

  @Input() task!: ITask;

  constructor(
    private tasksService: TasksService
  ){}

  onComplete(){
    return this.tasksService.removeTask(this.task.id);
  };
}
