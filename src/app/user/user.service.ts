import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class UserService {

    constructor() { }
  currentUser: IUser;
  login(userName: string, password: string): void {
    console.log(`userName: ${userName}, password: ${password}`);
    this.currentUser = {
      id: 1,
      firstName: 'Samba',
      lastName: 'Ngom',
      username: 'sngom'
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName, lastName): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
