import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import Temprature from "./temprature/Temprature";
import WeatherDetail from "./weatherDetail/WeatherDetail";
import WeatherIcon from "./weatherIcon/WeatherIcon";

export type CurrentWeatherProps = {
  currentCity: string;
  currentWeather: string;
  currentTemprature: number;
  isMetric: boolean;
};

export default function CurrentWeather() {
  const { currentCity, currentWeather, currentTemprature, isMetric } =
    useAppSelector((rootStore) => rootStore.currentWeather);
  return (
    <CurrentWeatherWrapper>
      <h2>{currentCity}</h2>
      <p>{new Date().toLocaleDateString("en-AU")}</p>
      <p>{currentWeather}</p>
      <WeatherDetailWrapper>
        <WeatherIcon weatherName={currentWeather} />
        <Temprature temprature={currentTemprature} isMetric={isMetric} />
        <WeatherDetail />
      </WeatherDetailWrapper>
    </CurrentWeatherWrapper>
  );
}

const CurrentWeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  h2 {
    margin: 0;
  }
`;

const WeatherDetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 20px;
`;
