
import { Injectable } from '@angular/core';
import {EventsService} from './shared/events.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IEvent} from './event';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<IEvent[]>{

  constructor(private eventService: EventsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent[]> | Promise<IEvent[]> | IEvent[] {
    return this.eventService.getEvents().pipe(
      map(events => events)
    );
  }
}
