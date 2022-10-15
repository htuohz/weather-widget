import React from "react";
import "./App.css";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import styled from "styled-components";
import UnitSwitcher from "./components/unitSwitcher/UnitSwitcher";
import DailyForecast from "./components/dailyForecast/DailyForecast";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Container>
        <div>
          <SearchBar />
          <UnitSwitcher />
        </div>
        <CurrentWeather />
        <DailyForecast />
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: 5% 15% 20% 15%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #f5f5f5;
`;

export default App;
