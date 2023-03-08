import { Component } from '@angular/core';
import {IEvent} from './events/event';

class EventService {
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: ` <div>
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  </div>
  `})
export class EventAppComponent  {
  title = 'ng-fundamentals';
  events: IEvent[] = [];
}
