import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { IUser } from './user.model';


@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  @Input({ required: true }) user!: IUser;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  // user = input.required<UserProps>(); Other approach

  get id(): string { return this.user.id };
  get name(): string { return this.user.name };
  get avatar(): string { return this.user.avatar };

  onSelectUser(){
    this.select.emit(this.id);
  };
};
