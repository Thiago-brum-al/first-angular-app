import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../constants/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  seletedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => this.seletedUser().avatar);

  onSelectUser(){
    const newRandomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.seletedUser.set(DUMMY_USERS[newRandomIndex]);
  };
};
