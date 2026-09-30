import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { User } from './components/user/user';
import { DUMMY_USERS } from './constants/dummy-users';
import { Tasks } from './components/tasks/tasks';
import { NgFor, NgIf } from '@angular/common';

@Component({
  imports: [Header, User, Tasks, NgFor, NgIf],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  user?: IUser;
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS;

  onSelectUser(id: string){
    this.user = this.users.find((u) => u.id === id)!;
  };
}
