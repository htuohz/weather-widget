import React from "react";
import Temprature from "./temprature/Temprature";
import WeatherIcon from "./weatherIcon/WeatherIcon";

type CurrentWeatherProps = {
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
}: CurrentWeatherProps) {
  return (
    <div>
      <h2>{currentCity}</h2>
      <h4>{new Date().toLocaleDateString("en-AU")}</h4>
      <h4>{currentWeather}</h4>
      <div>
        <WeatherIcon weatherName={currentWeather} />
        <Temprature temprature={currentTemprature} isMetric={isMetric} />
      </div>
    </div>
  );
}
