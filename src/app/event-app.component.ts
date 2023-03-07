import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: ` <div>
    <app-nav-bar></app-nav-bar>
    <app-events-list [event]="event"></app-events-list>
  </div>
  `})
export class EventAppComponent {
  title = 'ng-fundamentals';
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
