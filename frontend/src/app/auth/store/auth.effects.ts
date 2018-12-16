import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as AuthActions from './auth.action';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect()
  autgLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN),
    mergeMap((action: AuthActions.Login) => {
      const token = btoa(action.payload.username + ':' + action.payload.password);
      const headers = new HttpHeaders({ Authorization: 'Basic ' + token });
      return this.http.get('http://localhost:8080/user', { headers: headers }).pipe(
         map( response => {
           return {type: AuthActions.SET_TOKEN, payload: token };
          } ),
         catchError(error => of ({type: AuthActions.SET_ERROR}) )
      );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}
