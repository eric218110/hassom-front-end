import { TOGGLE_THEME, ThemeActionTypes, ThemeState } from "./types.theme";

const initialState: ThemeState = {
  darkMode: false,
};

export function themeReducer(
  state: ThemeState = initialState,
  action: ThemeActionTypes
): ThemeState {
  if (action.type === TOGGLE_THEME) {
    console.log(action)
    const { darkMode } = action.payload;
    action.payload.darkMode = !darkMode;

    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
}
