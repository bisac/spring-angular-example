import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import * as storeApp from './store/app.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as storeAuth from './auth/store/auth.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  authState: Observable<storeAuth.AuthState>;

  constructor(private http: HttpClient, private router: Router, private store: Store<storeApp.AppState>) {
  }

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

}
