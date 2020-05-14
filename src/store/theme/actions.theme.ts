import { TOGGLE_THEME, ThemeState, ThemeActionTypes } from "./types.theme";

export function toggleTheme(theme: ThemeState): ThemeActionTypes {
  return {
    type: TOGGLE_THEME,
    payload: theme,
  };
}
