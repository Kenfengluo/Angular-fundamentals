import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template:
  `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `
})
export class AppComponent {
  title = 'angular-fundamentals';
}
