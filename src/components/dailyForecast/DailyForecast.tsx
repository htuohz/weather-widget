import React from "react";
import { useAppSelector } from "../../store/hooks";
import {
  IDailyWeather,
  selectDailyForecast,
} from "../../store/reducers/dailyForecastSlice";
import WeatherItem from "./weatherItem/WeatherItem";

export default function DailyForecast() {
  const weatherArray = useAppSelector(selectDailyForecast);
  if (weatherArray.length < 1) {
    throw Error("No daily weather returned");
  }
  return (
    <div>
      {weatherArray.map((item: IDailyWeather) => (
        <WeatherItem
          date={item.date}
          max={item.maxTemprature}
          min={item.minTemprature}
          iconId={item.iconId}
          weatherName={item.weatherName}
        />
      ))}
    </div>
  );
}
