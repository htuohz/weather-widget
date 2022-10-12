import React from "react";
import { render, screen } from "@testing-library/react";
import CurrentWeather from "./CurrentWeather";

describe("CurrentWeather component rendered correctly", () => {
  it("City name is rendered", () => {
    render(<CurrentWeather />);
    const city = screen.getByRole("heading");
    expect(city).toHaveTextContent(/sydney/i);
  });
});
