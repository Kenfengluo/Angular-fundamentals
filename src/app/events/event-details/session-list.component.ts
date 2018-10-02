import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../../models/event';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.Component.html'
})
export class SessionListComponent implements OnInit {

  @Input() sessions: ISession[];
  constructor() {

  }

  ngOnInit() {

  }

}
