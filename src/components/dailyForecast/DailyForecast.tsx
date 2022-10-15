import React from "react";
import { useAppSelector } from "../../store/hooks";
import WeatherItem from "./weatherItem/WeatherItem";
import styled from "styled-components";
import {
  IDailyWeather,
  selectCurrentWeather,
} from "../../store/reducers/currentWeatherSlice";
import AlertBanner from "../alertBanner/AlertBanner";

export default function DailyForecast() {
  const { dailyForecast } = useAppSelector(selectCurrentWeather);
  if (dailyForecast.length < 1) {
    return <AlertBanner message="No daily data returned" />;
  }
  return (
    <DailyWeatherContaienr>
      {dailyForecast.map((item: IDailyWeather) => (
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
