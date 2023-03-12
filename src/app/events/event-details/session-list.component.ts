import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../event';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  constructor() {
  }
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[] = [];

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  private filterSessions(filterBy: string): void {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filterBy);
    }
  }
}

