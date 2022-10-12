import React from "react";
import { degToCompass } from "../../utilities";

type WeatherDetailProps = {
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
    <div>
      <p>{`Precipitation ${chanceOfRain * 100}%`}</p>
      <p>{`Humidity ${humidity * 100}%`}</p>
      <p>{`Wind ${windSpeed}kph ${degToCompass(windDegree)}`}</p>
      <p>{`Pollen count ${pollenCount}`}</p>
    </div>
  );
}
