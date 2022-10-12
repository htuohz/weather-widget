import { render, screen } from "@testing-library/react";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";

describe("CurrentWeather component rendered correctly", () => {
  it("City name is rendered", () => {
    render(
      <CurrentWeather
        currentCity="Sydney"
        currentWeather=""
        currentTemprature={15}
        isMetric={true}
        chanceOfRain={0.01}
        windDegree={10}
        windSpeed={10}
        pollenCount={20}
        humidity={0.05}
      />
    );
    const city = screen.getByRole("heading", { name: /sydney/i });
    expect(city).toBeInTheDocument();
  });

  it("Current date is rendered", () => {
    render(
      <CurrentWeather
        currentCity="Sydney"
        currentWeather=""
        currentTemprature={15}
        isMetric={true}
        chanceOfRain={0.01}
        windDegree={10}
        windSpeed={10}
        pollenCount={20}
        humidity={0.05}
      />
    );
    const dateString = new Date().toLocaleDateString("en-AU");
    const dateText = screen.getByRole("heading", { name: dateString });
    expect(dateText).toBeInTheDocument();
  });

  it("Current weather is rendered", () => {
    render(
      <CurrentWeather
        currentCity="Sydney"
        currentWeather="overcast"
        currentTemprature={15}
        isMetric={true}
        chanceOfRain={0.01}
        windDegree={10}
        windSpeed={10}
        pollenCount={20}
        humidity={0.05}
      />
    );
    const weatherText = screen.getByRole("heading", { name: "overcast" });
    expect(weatherText).toBeInTheDocument();
    const weatherIcon = screen.getByRole("img", { name: "overcast" });
    expect(weatherIcon).toBeInTheDocument();
  });

  it("Current temprature is rendered", () => {
    render(
      <CurrentWeather
        currentCity="Sydney"
        currentWeather="overcast"
        currentTemprature={15}
        isMetric={true}
        chanceOfRain={0.01}
        windDegree={10}
        windSpeed={10}
        pollenCount={20}
        humidity={0.05}
      />
    );
    const temp = screen.getByRole("heading", { name: "15°C" });
    expect(temp).toBeInTheDocument();
  });
});
