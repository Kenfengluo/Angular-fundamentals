import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../../models/event';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;
  errorMessage: string;
  filterBy = 'all';
  sortBy = 'name';
  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.eventService.getEvent(+params['id']).subscribe(
        event => {
          this.event = event;
          this.addMode = false;
        },
        error => this.errorMessage = error
      );
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false;
  }
  cancelCreateSession() {
    this.addMode = false;
  }
}
