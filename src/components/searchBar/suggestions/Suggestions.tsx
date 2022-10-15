import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ICitySuggestion } from "../../../store/reducers/citySuggestionsSlice";
import {
  fetchCurrentWeather,
  selectCurrentWeather,
  setCurrentCity,
} from "../../../store/reducers/currentWeatherSlice";
import styled from "styled-components";

type SuggestionsProps = {
  suggestions: Array<ICitySuggestion>;
  setSuggestionsVisible: (status: boolean) => void;
};

export default function Suggestions({
  suggestions,
  setSuggestionsVisible,
}: SuggestionsProps) {
  const dispatch = useAppDispatch();
  const { isMetric } = useAppSelector(selectCurrentWeather);
  const handleClick = (suggestion: ICitySuggestion) => {
    const { lat, lon } = suggestion;
    dispatch(setCurrentCity(suggestion.cityName));
    dispatch(fetchCurrentWeather({ coords: { lat, lon }, isMetric }));
    setSuggestionsVisible(false);
  };
  return (
    <StyledWrapper>
      <StyledList>
        {suggestions.map((suggestion, index) => (
          <li key={index} role="button" onClick={() => handleClick(suggestion)}>
            {suggestion.cityName}, {suggestion.country}
          </li>
        ))}
      </StyledList>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: block;
  position: absolute;
  top: 40px;
  left: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  max-height: 250px;
  overflow: auto;
  z-index: 1001;
`;

const StyledList = styled.ul`
  text-align: start;
  list-style-type: none;
  transition: all 0.2s ease-in-out;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  li {
    cursor: pointer;
  }
`;
