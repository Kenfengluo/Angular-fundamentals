import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true;
  newEvent;
  errorMessage: string;
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
      onlineUrl: 'http://ngSpectacular.com',
      imageUrl: 'http://ngSpectacular.com/logo.png'
    };
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(
      () => {
        this.isDirty = false;
        this.router.navigate(['/events']);
       },
      error => this.errorMessage = error
    );

  }
  cancel() {
    this.router.navigate(['/events']);
  }
}
