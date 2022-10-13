import { screen } from "@testing-library/react";
import WeatherDetail from "../../components/currentWeather/weatherDetail/WeatherDetail";
import { renderWithProviders } from "../test-utils";

describe("weather detail component renders correctly", () => {
  it("should render precipitation, wind, pollen count and humidity", () => {
    renderWithProviders(<WeatherDetail />);
    const precipitation = screen.getByText(/precipitation/i);
    expect(precipitation).toHaveTextContent("0%");
    const humidty = screen.getByText(/humidity/i);
    expect(humidty).toHaveTextContent("0%");
    const wind = screen.getByText(/wind/i);
    expect(wind).toHaveTextContent(/0kph n/i);
    const pollenCount = screen.getByText(/pollen/i);
    expect(pollenCount).toHaveTextContent("0");
  });
});
