import {Routes} from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { CustomErrorComponent } from './errors/custom-error.component';
import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
import { CreateSessionComponent } from './events/event-details/create-session-component';
export const appRoutes: Routes = [
  {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactiveCreateEvent']
  },
  {
    path: 'events', component: EventsListComponent
  },
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  {
    path: 'events/session/new', component: CreateSessionComponent
  },
  {
    path: '404', component: CustomErrorComponent
  },
  {
    path: '', redirectTo: 'events', pathMatch: 'full'
  },
  {
    path: 'user', loadChildren: './user/user.module#UserModule'
  },
  {
    path: '**', redirectTo: 'events', pathMatch: 'full'
  }
];
