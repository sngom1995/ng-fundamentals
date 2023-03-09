import {Routes} from '@angular/router';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {EventsListComponent} from './events/events-list.component';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';
import {EventListResolverService} from './events/event-list-resolver.service';

export const routes: Routes = [
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: '**', redirectTo: 'events', pathMatch: 'full'},
];
