import React from "react";
import styled from "styled-components";

type TempratureProps = {
  temprature: number;
  isMetric: boolean;
};

export default function Temprature({ temprature, isMetric }: TempratureProps) {
  return (
    <StyledHeading>{`${Math.floor(temprature)}°${
      isMetric ? "C" : "F"
    }`}</StyledHeading>
  );
}

const StyledHeading = styled.h3`
  margin-top: 0;
  flex: 4;
  text-align: start;
`;
