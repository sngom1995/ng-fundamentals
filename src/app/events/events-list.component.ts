import {Component, Input, OnInit} from '@angular/core';
import {IEvent} from './event';
import {EventsService} from './shared/events.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit{
  constructor(private eventService: EventsService, private toastr: ToastrService, private route: ActivatedRoute) {
  }
  @Input() events: IEvent[];
  nameEvent = '';

  handleEventClicked(data: string): void {
    console.log('received: ', data);
    this.nameEvent = data;
  }
  ngOnInit(): void{
    this.events = this.route.snapshot.data.events;
  }
  onClickThumbnail(event: IEvent): void {
    console.log('received: ', event);
    this.toastr.success(event.name);
  }
}
