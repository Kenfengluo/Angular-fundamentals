import { Injectable } from '@angular/core';
import { ISession } from '../../models/event';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { observable, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  constructor(private http: HttpClient) {

  }
  deleteVoter(eventId: number, session: ISession, userName: string) {
    session.voters = session.voters.filter( voter => voter !== userName);

    //  http call
    const url = `api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.delete(url).pipe(catchError(this.handleError('addVoter'))).
    subscribe();
  }

  addVoter(eventId: number, session: ISession, userName: string) {
    session.voters.push(userName);
    // http call
    const options = { headers: new HttpHeaders( { 'Content-Type': 'application/json'})};
    const url = `api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
    this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter'))).
    subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some( voter => voter === voterName);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
