import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display: none}}
    li > a.active {color: #F97924;}
  `]
})
export class NavBarComponent implements OnInit {

  isAuth: boolean;
  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.isAuth = this.userService.isAuthenticated();
  }
}
