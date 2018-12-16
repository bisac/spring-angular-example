import * as fromAuth from '../auth/store/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    auth: fromAuth.AuthState;
}

export const reducer: ActionReducerMap<AppState> = {
    auth:  fromAuth.authReducer
};
