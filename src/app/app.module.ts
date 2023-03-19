import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {Error404Component} from './errors/404.component';

import {
  CreateEventComponent,
  EventsService,
  EventListResolverService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent, SessionListComponent, CreateSessionComponent
} from './events/index';
import {EventAppComponent} from './event-app.component';
import {NavBarComponent} from './nav/nav-bar.component';
import {UserService} from './user/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DurationPipe } from './events/shared/duration.pipe';
import {TOASTR_TOKEN, JQ_TOKEN, Toastr, CollapsibleWellComponent} from './common';
import { SimpleModalComponent } from './common/simple-modal.component';

export const checkDirtyState = (component: CreateEventComponent) => {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
};

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];


@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    EventsService,
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
    {provide: JQ_TOKEN, useValue: jQuery},
    EventListResolverService,
    UserService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
