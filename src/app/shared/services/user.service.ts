import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usernameChanged = new EventEmitter<string>();

  constructor() { }

  saveUsername(username: string): void {
    localStorage.setItem('username', username);
    this.usernameChanged.emit(username);
  }

  getUsernameFromLocal(): string {
    return localStorage.getItem('username');
  }

  removeUsername(): void {
    localStorage.removeItem('username');
  }
}
