import React from "react";
import { useAppSelector } from "../../store/hooks";
import {
  IDailyWeather,
  selectDailyForecast,
} from "../../store/reducers/dailyForecastSlice";
import WeatherItem from "./weatherItem/WeatherItem";
import styled from "styled-components";

export default function DailyForecast() {
  const weatherArray = useAppSelector(selectDailyForecast);
  if (weatherArray.length < 1) {
    return <></>;
  }
  return (
    <DailyWeatherContaienr>
      {weatherArray.map((item: IDailyWeather) => (
        <WeatherItem
          date={item.date}
          max={item.maxTemprature}
          min={item.minTemprature}
          iconId={item.iconId}
          weatherName={item.weatherName}
        />
      ))}
    </DailyWeatherContaienr>
  );
}

const DailyWeatherContaienr = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
