import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../../models/event';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.Component.html'
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  filteredSessionList: ISession[] = [];
  constructor() {

  }

  ngOnChanges() {
    if (this.sessions) {
      this.filterList(this.filterBy);
      this.sortBy === 'name' ? this.filteredSessionList.sort(sortByNameAsc) :
        this.filteredSessionList.sort(sortByVotesDesc);
    }
  }
  filterList(filterBy) {
    if (filterBy === 'all') {
      this.filteredSessionList = this.sessions.slice(0);
    } else {
      this.filteredSessionList = this.sessions.filter(session => session.level.toLocaleLowerCase() === filterBy);
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) { return 1; } else if (s1.name === s2.name) { return 2; } else { return -1; }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
