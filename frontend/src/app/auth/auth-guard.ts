import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as storeApp from '../store/app.reducers';
import * as storeAuth from './store/auth.reducers';
import { take, map } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<storeApp .AppState>, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.store.select('auth').pipe(
            take(1),
            map( (authState: storeAuth.AuthState) => {

                if (!authState.authentitaced) {
                  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                }
                return authState.authentitaced;
            }
        )
        );
    }
}
