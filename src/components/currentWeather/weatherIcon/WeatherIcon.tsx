import React from "react";

type WeatherIconProps = {
  weatherName: string;
};
export default function WeatherIcon({ weatherName }: WeatherIconProps) {
  return <img alt={weatherName} />;
}
