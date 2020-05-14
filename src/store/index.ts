import { createStore, combineReducers } from "redux";

import { themeReducer } from "./theme/reducer.theme";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export type ApplicationStateReducer = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
