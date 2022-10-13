import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { CurrentWeatherProps } from "../../components/currentWeather/CurrentWeather";
import { WeatherDetailProps } from "../../components/currentWeather/weatherDetail/WeatherDetail";

const initialState: CurrentWeatherProps & WeatherDetailProps = {
  currentCity: "Hobart",
  currentWeather: "Overcast",
  currentTemprature: 0,
  isMetric: true,
  chanceOfRain: 0,
  windDegree: 0,
  windSpeed: 0,
  humidity: 0,
  pollenCount: 0,
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
      const {
        weather: { description },
        temp,
        wind_deg,
        wind_speed,
        humidity,
      } = action.payload.current;
      const { pop } = action.payload.hourly[0];
      return {
        ...state,
        currentWeather: description,
        currentTemprature: temp,
        chanceOfRain: pop,
        windDegree: wind_deg,
        windSpeed: wind_speed,
        humidity: humidity,
        pollenCount: 0,
      };
    },
    setMetric: (state, action) => {
      state.isMetric = action.payload;
    },
  },
});

export const { setCurrentCity, setCurrentWeather, setMetric } =
  currentWeatherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentWeather = (state: RootState) => state.currentWeather;

export default currentWeatherSlice.reducer;
