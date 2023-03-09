import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/nav-bar.component';
import {EventsService} from './events/shared/events.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventListResolverService} from './events/event-list-resolver.service';

export const checkDirtyState = (component: CreateEventComponent) => {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
};


@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EventsService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    EventListResolverService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
