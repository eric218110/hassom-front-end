import {
  AuthActionTypes,
  AuthState,
  CREATE_SESSION_AUTH,
  DESTROY_SESSION_AUTH,
} from "./types.auth";

const initialState: AuthState = {
  userName: "",
  userToken: "",
  active: false,
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case CREATE_SESSION_AUTH:
      action.payload.active = true;
      return {
        ...state,
        ...action.payload,
      };
    case DESTROY_SESSION_AUTH:
      return {
        userName: "",
        userToken: "",
        active: false,
      };
    default:
      return state;
  }
}
