import {Action} from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_ERROR = 'SET_ERROR';


export class SetEror implements Action {
  type: string = SET_ERROR;
  public payload: string;
}

export class Login implements Action {
    type: string = LOGIN;
        constructor(public payload: {username: string, password: string}) {}
}

export class Logout implements Action {
    type: string = LOGOUT;
    public payload: string;
}

export class SetToken implements Action {
    type: string = SET_TOKEN;
    constructor(public payload: string) {}
}

export type AuthActions =  Logout | SetToken| Login | SetEror;
