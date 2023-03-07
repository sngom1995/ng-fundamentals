import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/nav-bar.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
