import { TOGGLE_THEME, ThemeActionTypes, ThemeState } from "./types.theme";

const initialState: ThemeState = {
  darkMode: true,
};

export function themeReducer(
  state: ThemeState = initialState,
  action: ThemeActionTypes
): ThemeState {
  if (action.type === TOGGLE_THEME) {
    const { darkMode } = action.payload;
    action.payload.darkMode = !darkMode;

    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
}
