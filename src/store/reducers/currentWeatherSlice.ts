import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface ICurrentWeatherState {
  currentCity: string;
  currentWeather: string;
  currentTemprature: number;
  isMetric: boolean;
  chanceOfRain: number;
  windDegree: number;
  windSpeed: number;
  humidity: number;
  pollenCount: number;
  iconId: string;
}

const initialState: ICurrentWeatherState = {
  currentCity: "",
  currentWeather: "",
  currentTemprature: 0,
  isMetric: true,
  chanceOfRain: 0,
  windDegree: 0,
  windSpeed: 0,
  humidity: 0,
  pollenCount: 0,
  iconId: "",
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    setCurrentWeather: (state, action) => {
      const { temp, wind_deg, wind_speed, humidity } = action.payload.current;
      const { pop } = action.payload.hourly[0];
      const { main, icon } = action.payload.current.weather[0];
      return {
        ...state,
        currentWeather: main,
        currentTemprature: temp,
        chanceOfRain: pop,
        windDegree: wind_deg,
        windSpeed: wind_speed,
        humidity: humidity,
        pollenCount: 0,
        iconId: icon,
      };
    },
    setMetric: (state, action) => {
      state.isMetric = action.payload;
    },
    resetCurrentWeather: (state) => {
      state = initialState;
    },
  },
});

export const {
  setCurrentCity,
  setCurrentWeather,
  setMetric,
  resetCurrentWeather,
} = currentWeatherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentWeather = (state: RootState) => state.currentWeather;

export default currentWeatherSlice.reducer;
