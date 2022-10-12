import React from "react";

type TempratureProps = {
  temprature: number;
  isMetric: boolean;
};

export default function Temprature({ temprature, isMetric }: TempratureProps) {
  return <h4>{`${temprature}°${isMetric ? "C" : "F"}`}</h4>;
}
