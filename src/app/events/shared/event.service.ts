import { Injectable, EventEmitter } from '@angular/core';
import { catchError, tap, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IEvent, ISession } from '../../models/event';
import { constructor } from 'q';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class EventService {
    constructor(private http: HttpClient) {}

    getEvents(): Observable<IEvent[]> {
      return this.http.get<IEvent[]>('/api/events').pipe(
        catchError(this.handleError)
      );
    }

    getEvent(id: number): Observable<IEvent> {
      return this.getEvents().pipe(
        map((events: IEvent[]) => events.find(e => e.id === id))
      );
    }

    saveEvent(event: IEvent): Observable<IEvent> {
      const options = { headers: new HttpHeaders( {'Content-Type': 'application/json'})};
      return this.http.post<IEvent>('/api/events', event, options).pipe(
        catchError(this.handleError)
      );
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
      return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm).pipe(
        catchError(this.handleError)
      );
    }
    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
      } else {
          // The backend returned an unsuccessful reponse code.
          // the response body may contain clues as to what went wrong;
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
  }
}
