import React from "react";
import styled from "styled-components";
import { degToCompass } from "../../../utilities";

export type WeatherDetailProps = {
  chanceOfRain: number;
  humidity: number;
  windSpeed: number;
  windDegree: number;
  pollenCount: number;
};

export default function WeatherDetail({
  chanceOfRain,
  humidity,
  windSpeed,
  windDegree,
  pollenCount,
}: WeatherDetailProps) {
  return (
    <WeatherDetailWrapper>
      <p>{`Precipitation ${chanceOfRain * 100}%`}</p>
      <p>{`Humidity ${humidity}%`}</p>
      <p>{`Wind ${windSpeed}kph ${degToCompass(windDegree)}`}</p>
      <p>{`Pollen count ${pollenCount}`}</p>
    </WeatherDetailWrapper>
  );
}

const WeatherDetailWrapper = styled.div`
  flex: 4;
  text-align: start;
`;
