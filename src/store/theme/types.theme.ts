export interface ThemeState {
  darkMode: boolean;
}

export const TOGGLE_THEME = "@@REDUCER/THEME/TOGGLE_THEME";

interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
  payload: ThemeState;
}

export type ThemeActionTypes = ToggleThemeAction;
