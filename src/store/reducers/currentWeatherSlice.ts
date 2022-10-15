import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchCurrentWeatherFromApi } from "../../api/weather";
import { fetchCityNameByCoordsFromApi } from "../../api/city";

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
  dailyForecast: Array<IDailyWeather>;
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
  dailyForecast: [],
};

export interface IDailyWeather {
  weatherName: string;
  iconId: string;
  maxTemprature: number;
  minTemprature: number;
  date: Date;
}

export const fetchCurrentCity = createAsyncThunk(
  "currentWeather/fetchCurrentCity",
  async (coords: { lat: number; lon: number }) => {
    try {
      const response = await fetchCityNameByCoordsFromApi(coords);
      const data = await response.json();
      return data.name;
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchCurrentWeather = createAsyncThunk(
  "currentWeather/fetchCurrentWeather",
  async (payload: {
    coords: { lat: number; lon: number };
    isMetric: boolean;
  }) => {
    try {
      const { coords, isMetric } = payload;
      const response = await fetchCurrentWeatherFromApi(coords, isMetric);
      return response.json();
    } catch (e) {
      console.log(e);
    }
  }
);

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    setMetric: (state, action) => {
      state.isMetric = action.payload;
    },
    resetCurrentWeather: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentCity.fulfilled, (state, action) => {
      state.currentCity = action.payload;
    });
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
      console.log(action.payload);
      const { current, hourly, daily } = action.payload;
      const { temp, wind_deg, wind_speed, humidity } = current;
      const { pop } = hourly[0];
      const { main, icon } = current.weather[0];
      // const dispatch = useAppDispatch();
      daily.pop();
      return {
        ...state,
        currentWeather: main,
        currentTemprature: temp,
        chanceOfRain: pop,
        windDegree: wind_deg,
        windSpeed: wind_speed,
        humidity: humidity,
        iconId: icon,
        dailyForecast: daily.map((item: any) => ({
          weatherName: item.weather[0].main,
          iconId: item.weather[0].icon,
          maxTemprature: item.temp.max,
          minTemprature: item.temp.min,
          date: new Date(item.dt * 1000),
        })),
      };
    });
  },
});

export const { setCurrentCity, setMetric, resetCurrentWeather } =
  currentWeatherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentWeather = (state: RootState) => state.currentWeather;

export default currentWeatherSlice.reducer;
