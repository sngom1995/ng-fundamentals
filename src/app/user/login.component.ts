import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from './user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
    templateUrl: './login.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    `]
})
export class LoginComponent{
  userName: any;
  password: any;
  mouseoverlogin: boolean;
  constructor(private userService: UserService, private router: Router) {
  }
  login(loginForm): void {
    console.log(loginForm);
    this.userService.login(loginForm.userName, loginForm.password);
  }
  cancel(): void {
    this.userName = '';
    this.password = '';
    this.router.navigate(['events']);
  }
  save(): void {
    this.router.navigate(['events']);
  }
}
