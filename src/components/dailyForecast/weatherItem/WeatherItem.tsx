import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../store/hooks";
import { selectCurrentWeather } from "../../../store/reducers/currentWeatherSlice";
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
  const { isMetric } = useAppSelector(selectCurrentWeather);
  return (
    <div>
      <h4>
        {date.toDateString() === new Date().toDateString()
          ? "Today"
          : indexToDay(date.getDay())}
      </h4>
      <WeatherIcon weatherName={weatherName} iconId={iconId} />
      <div>
        <span>{`${Math.floor(max)}°${isMetric ? "C" : "F"} `}</span>
        <span>{`${Math.floor(min)}°${isMetric ? "C" : "F"}`}</span>
      </div>
    </div>
  );
}
