import React from "react";

type WeatherIconProps = {
  weatherName: string;
  iconId: string;
};
export default function WeatherIcon({ weatherName, iconId }: WeatherIconProps) {
  return (
    <div>
      <img
        alt={weatherName}
        src={`http://openweathermap.org/img/w/${iconId}.png`}
      />
    </div>
  );
}
