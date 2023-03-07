import {Component, Input} from '@angular/core';
import {IEvent} from './event';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent{
  @Input() event: IEvent;
  nameEvent = '';

  handleEventClicked(data: string): void {
    console.log('received: ', data);
    this.nameEvent = data;
  }
}
