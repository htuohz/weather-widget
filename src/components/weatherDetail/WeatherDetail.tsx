import React from "react";

type WeatherDetailProps = {
  chanceOfRain: number;
  humidity: number;
  windSpeed: number;
  windDegree: number;
  pollenCount: number;
};

const degToCompass = (degree: number) => {
  const val = Math.floor(degree / 22.5 + 0.5);
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
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
