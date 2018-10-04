import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { pipe } from '@angular/core/src/render3/pipe';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
  constructor(private http: HttpClient) {

  }
  loginuser(userName: string, password: string) {
    const loginInfo = {
      username: userName,
      password: password
    };
    return this.http.post('api/login', loginInfo, this.options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user'];
      })).pipe(catchError(
        err => {
          return of(false);
        }
      ));
    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'Ken',
    //   lastName: 'Luo'
    // };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(values): Observable<any> {
    this.currentUser.firstName = values.firstName;
    this.currentUser.lastName = values.lastName;


    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, this.options);
  }

  checkAuthenticationStatus() {
    return this.http.get('/api/currentIdentity')
    .pipe(
      tap(
        data => {
          if (data instanceof Object) {
            this.currentUser = <IUser>data;
          }
        }
    ));
  }

  logout(): Observable<any> {
    return this.http.post('/api/logout', {}, this.options)
      .pipe(
        tap(
          () => {
            this.currentUser = null;
          }
        )
      );
  }
}
