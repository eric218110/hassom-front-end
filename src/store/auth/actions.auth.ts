import {
  AuthActionTypes,
  DESTROY_SESSION_AUTH,
  CREATE_SESSION_AUTH,
  AuthState,
} from "./types.auth";

export function createSessionAuth(auth: AuthState): AuthActionTypes {
  return {
    type: CREATE_SESSION_AUTH,
    payload: auth,
  };
}

export function destroySessionAuth(auth: AuthState): AuthActionTypes {
  return {
    type: DESTROY_SESSION_AUTH,
    payload: auth,
  };
}
