import React from "react";
import { indexToDay } from "../../../utilities";
import WeatherIcon from "../../currentWeather/weatherIcon/WeatherIcon";

type WeatherItemProps = {
  date: Date;
  max: number;
  min: number;
  iconId: string;
  weatherName: string;
};

export default function WeatherItem({
  date,
  max,
  min,
  iconId,
  weatherName,
}: WeatherItemProps) {
  return (
    <div>
      <h4>
        {date.toDateString() === new Date().toDateString()
          ? "Today"
          : indexToDay(date.getDay())}
      </h4>
      <WeatherIcon weatherName={weatherName} iconId={iconId} />
      <div>
        <span>{`${max}°`}</span>
        <span>{`${min}°`}</span>
      </div>
    </div>
  );
}
