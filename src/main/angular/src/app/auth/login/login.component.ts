import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as storeApp from '../../store/app.reducers';
import * as actionAuth from '../store/auth.action';
import * as storeAuth from './../store/auth.reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};
  authState: Observable<storeAuth.AuthState>;

  constructor(private http: HttpClient, private router: Router,
      private store: Store<storeApp.AppState> ) {
  }

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  login() {
    this.store.dispatch(new actionAuth.Login(this.credentials));
  }

}
