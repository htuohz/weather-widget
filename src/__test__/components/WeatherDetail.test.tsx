import { getByRole, render, screen } from "@testing-library/react";
import WeatherDetail from "../../components/weatherDetail/WeatherDetail";

describe("weather detail component renders correctly", () => {
  it("should render precipitation, wind, pollen count and humidity", () => {
    render(
      <WeatherDetail
        chanceOfRain={0.01}
        windDegree={10}
        windSpeed={10}
        pollenCount={20}
        humidity={0.05}
      />
    );
    const precipitation = screen.getByText(/precipitation/i);
    expect(precipitation).toHaveTextContent("1%");
    const humidty = screen.getByText(/humidity/i);
    expect(humidty).toHaveTextContent("5%");
    const wind = screen.getByText(/wind/i);
    expect(wind).toHaveTextContent(/10kph n/i);
  });
});
