import {Component, Input} from '@angular/core';
import {ISession} from '../event';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent{
  constructor() {
  }
  @Input() sessions: ISession[];
}

