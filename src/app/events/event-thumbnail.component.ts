import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from './event';

@Component({
  selector: 'app-events-thumbnail',
  template: `<div  class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
      <span>Location: {{event.location.address}}</span>
      <span>&nbsp;</span>
      <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>`,
  styles: [`.thumbnail { min-height: 210px; } .pad-left { margin-left: 10px; }  .well div { color: #bbb; }`]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();

  nameEvent = '';
  handleClickMe(): void {
    this.eventClick.emit(this.event.name);
    this.nameEvent = this.event.name;
    console.log(this.event.name);
  }
}
