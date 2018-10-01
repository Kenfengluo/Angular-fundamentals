import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './event.service';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true;
  newEvent;
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.newEvent = {
      name: 'Ng Spectacular',
      date: '8/8/2028',
      time: '10am',
      price: 799.99,
      location: {
        address: '456 Happy St',
        city: 'Felicity',
        country: 'AngularIstan'
      },
      onlineUrl: 'http://ngSpectular.com',
      imageUrl: 'http://ngSpectular.com/logo.png'
    };
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
