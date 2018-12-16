import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import * as storeApp from '../../store/app.reducers';
import * as actionAuth from '../store/auth.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


  credentials = {username: '', password: ''};
  authSub: Subscription;
  error: boolean;

  constructor(private router: Router,
      private store: Store<storeApp.AppState>, private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.authSub = this.store.select('auth').subscribe( data => {
      this.error = data.error;
      if (data.authentitaced) {
        this.router.navigate([returnUrl]);
      }
    });
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

  login() {
    this.store.dispatch(new actionAuth.Login(this.credentials));
  }

}
