import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {ISession} from '../events/event';
import {EventsService} from '../events';

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
  searchTerm = '';
  foundSessions: ISession[];
  constructor(public userService: UserService, private eveneService: EventsService) {
  }

  ngOnInit(): void {
    this.isAuth = this.userService.isAuthenticated();
  }

  searchSession(searchTerm: string): void {
    this.eveneService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      }
    );
  }
}
