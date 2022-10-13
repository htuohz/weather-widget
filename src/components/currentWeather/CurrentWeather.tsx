import React from "react";
import styled from "styled-components";
import Temprature from "./temprature/Temprature";
import WeatherDetail, {
  WeatherDetailProps,
} from "./weatherDetail/WeatherDetail";
import WeatherIcon from "./weatherIcon/WeatherIcon";

export type CurrentWeatherProps = {
  currentCity: string;
  currentWeather: string;
  currentTemprature: number;
  isMetric: boolean;
};

export default function CurrentWeather({
  currentCity,
  currentWeather,
  currentTemprature,
  isMetric,
  chanceOfRain,
  windDegree,
  windSpeed,
  humidity,
  pollenCount,
}: CurrentWeatherProps & WeatherDetailProps) {
  return (
    <CurrentWeatherWrapper>
      <h2>{currentCity}</h2>
      <p>{new Date().toLocaleDateString("en-AU")}</p>
      <p>{currentWeather}</p>
      <WeatherDetailWrapper>
        <WeatherIcon weatherName={currentWeather} />
        <Temprature temprature={currentTemprature} isMetric={isMetric} />
        <WeatherDetail
          chanceOfRain={chanceOfRain}
          windDegree={windDegree}
          windSpeed={windSpeed}
          humidity={humidity}
          pollenCount={pollenCount}
        />
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
  h4 {
    margin-top: 0;
    flex: 4;
    text-align: start;
  }
`;
