import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import currentWeatherReducer from "../store/reducers/currentWeatherSlice";
import citySuggestionsReducer from "../store/reducers/citySuggestionsSlice";
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  citySuggestions: citySuggestionsReducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
