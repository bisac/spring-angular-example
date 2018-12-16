import { HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as storeApp from '../store/app.reducers';
import { take, switchMap } from 'rxjs/operators';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<storeApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select('auth').pipe(
    take(1),
    switchMap(authStore => {

      if (authStore.authentitaced) {
        const reqestClone = req.clone({ headers: new HttpHeaders()
            .append('X-Requested-With', 'XMLHttpRequest')
            .append('Authorization', 'Basic ' + authStore.token)});
            return next.handle(reqestClone);
      }
      return next.handle(req);
    }));
  }}
