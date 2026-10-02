import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { INewTaskData, ITask } from '../task/task.model';
import { TasksService } from '../tasks.service';
import { IUser } from '../../user/user.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-task',
  styleUrl: './add-task.css',
  templateUrl: './add-task.html',
})
export class AddTask {

  @Input() user!: IUser;

  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  closeModal(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate()
    }, this.user.id);
    this.closeModal();
  };
}
