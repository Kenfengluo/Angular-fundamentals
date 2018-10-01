import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  loginuser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Ken',
      lastName: 'Luo'
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(values) {
    this.currentUser.firstName = values.firstName;
    this.currentUser.lastName = values.lastName;
  }
}
