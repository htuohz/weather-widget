import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface IDailyWeather {
  weatherName: string;
  iconId: string;
  maxTemprature: number;
  minTemprature: number;
  date: Date;
}

const initialState: Array<IDailyWeather> = [];

export const dailyForecastSlice = createSlice({
  name: "currentWeather",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setDailyWeather: (state, action) => {
      action.payload.pop();
      return action.payload.map((item: any) => ({
        weatherName: item.weather[0].main,
        iconId: item.weather[0].icon,
        maxTemprature: item.temp.max,
        minTemprature: item.temp.min,
        date: new Date(item.dt * 1000),
      }));
    },
  },
});

export const { setDailyWeather } = dailyForecastSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDailyForecast = (state: RootState) => state.dailyForecast;

export default dailyForecastSlice.reducer;
