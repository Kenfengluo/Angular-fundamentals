import {Routes} from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/event-details/create-event.component';
import { CustomErrorComponent } from './errors/custom-error.component';
import { CreateSessionComponent } from './events/event-details/create-session-component';
import { EventResolveService } from './events/event-resolve.service';
export const appRoutes: Routes = [
  {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactiveCreateEvent']
  },
  {
    path: 'events', component: EventsListComponent
  },
  {
    path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolveService }
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
