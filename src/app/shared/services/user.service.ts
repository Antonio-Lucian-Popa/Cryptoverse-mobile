import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUsername(username: string): void {
    localStorage.setItem('username', username);
  }

  getUsernameFromLocal(): string {
    return localStorage.getItem('username');
  }

  removeUsername(): void {
    localStorage.removeItem('username');
  }
}
