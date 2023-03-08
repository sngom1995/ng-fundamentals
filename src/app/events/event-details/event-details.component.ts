import {Component, OnInit} from '@angular/core';
import {IEvent} from '../event';
import {EventsService} from '../shared/events.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [` .container { padding-left: 20px; padding-right: 20px} .event-image { height: 120px }`]
})
export class EventDetailsComponent implements OnInit{
  constructor(private eventService: EventsService, private route: ActivatedRoute) {
  }
  event: IEvent;
  ngOnInit(): void{
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }
}
