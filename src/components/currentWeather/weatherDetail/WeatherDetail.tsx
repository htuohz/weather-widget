import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import { degToCompass } from "../../../utilities";

export type WeatherDetailProps = {
  chanceOfRain: number;
  humidity: number;
  windSpeed: number;
  windDegree: number;
  pollenCount: number;
};

export default function WeatherDetail() {
  const { isMetric, chanceOfRain, humidity, windSpeed, windDegree } =
    useAppSelector((rootStore) => rootStore.currentWeather);
  return (
    <WeatherDetailWrapper>
      <p>{`Precipitation ${Math.floor(chanceOfRain * 100)}%`}</p>
      <p>{`Humidity ${humidity}%`}</p>
      <p>{`Wind ${
        isMetric ? Math.floor(windSpeed * 3.6) : Math.floor(windSpeed)
      }${isMetric ? "kph" : "mph"} ${degToCompass(windDegree)}`}</p>
    </WeatherDetailWrapper>
  );
}

const WeatherDetailWrapper = styled.div`
  flex: 4;
  text-align: start;
  p {
    margin: 5px;
  }
`;
