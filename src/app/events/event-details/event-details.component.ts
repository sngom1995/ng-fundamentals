import {Component, OnInit} from '@angular/core';
import {IEvent, ISession} from '../event';
import {EventsService} from '../shared/events.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styles: [` .container { padding-left: 20px; padding-right: 20px} .event-image { height: 120px } a {cursor: pointer} `]
})
export class EventDetailsComponent implements OnInit{
  constructor(private eventService: EventsService, private route: ActivatedRoute) {
  }
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';
  ngOnInit(): void{
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }
}
