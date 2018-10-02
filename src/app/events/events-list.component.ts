import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { IEvent } from '../models/event';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];
  errorMessage: string;
  constructor(private eventService: EventService) {
   }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
