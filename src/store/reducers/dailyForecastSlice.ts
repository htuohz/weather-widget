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
      state = action.payload;
    },
  },
});

export const { setDailyWeather } = dailyForecastSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDailyForecast = (state: RootState) => state.dailyForecast;

export default dailyForecastSlice.reducer;
