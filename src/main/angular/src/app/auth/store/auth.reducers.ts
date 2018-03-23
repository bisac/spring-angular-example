import * as AuthActions from './auth.action';

export interface AuthState {
    token: string;
    authentitaced: boolean;
    error: boolean;
}

const initialState: AuthState = {
    token: null,
    authentitaced: false,
    error: false
};

export function authReducer(state: AuthState = initialState, action: AuthActions.AuthActions): AuthState {
    switch (action.type) {
        case AuthActions.LOGOUT:
          return{
              ...state,
              authentitaced: false,
              token: null,
              error: false
          };
        case AuthActions.SET_TOKEN:
          return{
              ...state,
              token: <string>action.payload,
              authentitaced: true,
              error: false
          };
        case AuthActions.SET_ERROR:
          return{
              ...state,
              token: null,
              authentitaced: false,
              error: true
          };
    }
    return state;
}
