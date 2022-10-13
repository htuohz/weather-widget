import React, { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import cityApi from "./api/city";
import {
  setCurrentCity,
  setCurrentWeather,
} from "./store/reducers/currentWeatherSlice";
import weatherApi from "./api/weather";
import styled from "styled-components";

function App() {
  const {
    currentCity,
    currentTemprature,
    currentWeather,
    windDegree,
    windSpeed,
    chanceOfRain,
    isMetric,
    pollenCount,
    humidity,
  } = useAppSelector((rootstate) => rootstate.currentWeather);
  const dispatch = useAppDispatch();
  const [currentCoords, setCurrentCoords] = useState({
    lat: -42.880554,
    lon: 147.324997,
  });
  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        setCurrentCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
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
    // getCurrentCityByCoords(currentCoords)
    //   .then((res) => dispatch(setCurrentCity(res.data[0].name)))
    //   .catch((err) => console.log(err));
    // getCurrentWeather(currentCoords, isMetric)
    //   .then((res) => {
    //     dispatch(setCurrentWeather(res.data));
    //   })
    //   .catch((err) => console.log(err));
  }, [currentCoords, dispatch, isMetric]);
  return (
    <div className="App">
      <Container>
        <CurrentWeather
          currentCity={currentCity}
          chanceOfRain={chanceOfRain}
          currentTemprature={currentTemprature}
          windDegree={windDegree}
          windSpeed={windSpeed}
          isMetric={isMetric}
          currentWeather={currentWeather}
          pollenCount={pollenCount}
          humidity={humidity}
        />
      </Container>
    </div>
  );
}

async function getCurrentCityByCoords(coords: { lat: number; lon: number }) {
  return await cityApi.get("/reverse", {
    params: {
      ...coords,
      limit: 1,
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });
}

async function getCurrentWeather(
  coords: { lat: number; lon: number },
  isMetric: boolean
) {
  return await weatherApi.get("/onecall", {
    params: {
      ...coords,
      appid: process.env.REACT_APP_WEATHER_API_KEY,
      units: isMetric ? "metric" : "imperial",
    },
  });
}

const Container = styled.div`
  margin: 10% 15% 20% 15%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default App;
