import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as storeApp from '../store/app.reducers';
import * as actionAuth from '../auth/store/auth.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  ngOnInit(): void {
    this.http.get('http://localhost:8080/resource').subscribe( res => {
      console.log(res);
    });
  }

  constructor( private http: HttpClient, private store: Store<storeApp.AppState>) {
  }

  logout() {
    this.store.dispatch(new actionAuth.Logout());
  }

}
