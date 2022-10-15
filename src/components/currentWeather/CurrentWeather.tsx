import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchCurrentCity,
  fetchCurrentWeather,
  selectCurrentWeather,
} from "../../store/reducers/currentWeatherSlice";
import AlertBanner from "../alertBanner/AlertBanner";
import Temprature from "./temprature/Temprature";
import WeatherDetail from "./weatherDetail/WeatherDetail";
import WeatherIcon from "./weatherIcon/WeatherIcon";

export type CurrentWeatherProps = {
  currentCity: string;
  currentWeather: string;
  currentTemprature: number;
  isMetric: boolean;
};

export default function CurrentWeather() {
  const { isMetric, currentCity, currentWeather, currentTemprature, iconId } =
    useAppSelector(selectCurrentWeather);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const [currentCoords, setCurrentCoords] = useState({
    lat: -42.880554,
    lon: 147.324997,
  });

  //get user's current geolocation
  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        setErrorMessage(err.message);
      }
    );
  }, []);

  useEffect(() => {
    if (
      Object.keys(currentCoords).length === 0 ||
      currentCoords.lat === -42.880554
    ) {
      return;
    }
    dispatch(fetchCurrentCity(currentCoords));
  }, [currentCoords, dispatch]);

  //get current city name and weather based on the coords returned by browser
  useEffect(() => {
    dispatch(fetchCurrentWeather({ coords: { ...currentCoords }, isMetric }));
  }, [currentCoords, dispatch, isMetric]);

  if (errorMessage) {
    return <AlertBanner message={errorMessage} />;
  }
  return (
    <CurrentWeatherWrapper>
      <h2>{currentCity}</h2>
      <p>{new Date().toDateString()}</p>
      <p>{currentWeather}</p>
      <WeatherDetailWrapper>
        <WeatherIcon weatherName={currentWeather} iconId={iconId} />
        <Temprature temprature={currentTemprature} isMetric={isMetric} />
        <WeatherDetail />
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
  gap: 20px;
`;
