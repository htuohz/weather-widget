import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSuggestionsByNameFromApi } from "../../api/city";
import type { RootState } from "../store";

export interface ICitySuggestion {
  cityName: string;
  lat: number;
  lon: number;
  country: string;
}

const initialState: Array<ICitySuggestion> = [];

export const fetchCitySuggestions = createAsyncThunk(
  "citySuggestions/fetchCitySuggestions",
  async (name: string) => {
    try {
      const response = await fetchSuggestionsByNameFromApi(name);
      return response.json();
    } catch (e) {
      console.log(e);
    }
  }
);

export const citySuggestionsSlice = createSlice({
  name: "citySuggestions",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCitySuggestions.fulfilled, (state, action) => {
      return action.payload.map((item: any) => ({
        cityName: item.name,
        lat: item.lat,
        lon: item.lon,
        country: item.country,
      }));
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCitySuggestions = (state: RootState) =>
  state.citySuggestions;

export default citySuggestionsSlice.reducer;
