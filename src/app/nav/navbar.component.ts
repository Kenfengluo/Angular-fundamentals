import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, IEvent } from '../models/event';
import { EventService } from '../events/shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[] = [];
  events: IEvent[] = [];
  constructor(public auth: AuthService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      events => {
        this.events = events;
      }
    );
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    );
  }
}
