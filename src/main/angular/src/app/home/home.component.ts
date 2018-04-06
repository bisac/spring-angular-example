import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as storeApp from '../store/app.reducers';
import * as actionAuth from '../auth/store/auth.action';
import { Router } from '@angular/router';

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

  constructor( private http: HttpClient, private store: Store<storeApp.AppState>, private router: Router) {
  }

  logout() {
    this.store.dispatch(new actionAuth.Logout());
    this.router.navigate(['/login'] );
  }

}
