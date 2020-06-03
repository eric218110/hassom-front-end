export interface AuthState {
  userToken?: string;
  userName?: string;
  active?: boolean;
}

export const CREATE_SESSION_AUTH = "@@REDUCER/AUTH/CREATE_SESSION_AUTH";
export const DESTROY_SESSION_AUTH = "@@REDUCER/AUTH/DESTROY_SESSION_AUTH";

interface CreateAuthAction {
  type: typeof CREATE_SESSION_AUTH;
  payload: AuthState;
}

interface DestroyAuthAction {
  type: typeof DESTROY_SESSION_AUTH;
  payload: AuthState;
}

export type AuthActionTypes = CreateAuthAction | DestroyAuthAction;
