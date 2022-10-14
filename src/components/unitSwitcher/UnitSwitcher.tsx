import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setMetric } from "../../store/reducers/currentWeatherSlice";

export default function UnitSwitcher() {
  const { isMetric } = useAppSelector((rootstate) => rootstate.currentWeather);
  const dispatch = useAppDispatch();
  return (
    <SwitchContainer>
      <input
        type="radio"
        id="metric"
        name="switch-one"
        value="yes"
        checked={isMetric}
        aria-checked={isMetric}
        aria-labelledby="metric-label"
        onChange={(event) => dispatch(setMetric(event.target.checked))}
      />
      <label htmlFor="metric" id="metric-label">
        Metric: °C, kph
      </label>
      <input
        type="radio"
        id="imperial"
        name="switch-one"
        value="no"
        aria-checked={!isMetric}
        aria-labelledby="imperial-label"
        onChange={(event) => dispatch(setMetric(!event.target.checked))}
      />
      <label htmlFor="imperial" id="imperial-label">
        Imperial: °F, mph
      </label>
    </SwitchContainer>
  );
}

const SwitchContainer = styled.div`
  display: flex;
  margin-bottom: 36px;
  overflow: hidden;
  input {
    position: absolute;
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }
  label {
    background-color: #e4e4e4;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1;
    text-align: center;
    padding: 8px 16px;
    margin-right: -1px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3),
      0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
  }
  input:checked + label {
    background-color: #a5dc86;
    box-shadow: none;
  }
`;
