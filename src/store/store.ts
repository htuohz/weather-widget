import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import currentWeatherReducer from "../store/reducers/currentWeatherSlice";
import dailyForecastReducer from "../store/reducers/dailyForecastSlice";
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  dailyForecast: dailyForecastReducer,
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
