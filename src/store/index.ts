import { createStore, combineReducers } from "redux";

import { themeReducer } from "./theme/reducer.theme";
import { authReducer } from "./auth/reducer.auth";

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export type ApplicationStateReducer = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
