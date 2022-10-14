import { render, screen } from "@testing-library/react";
import WeatherItem from "../../components/dailyForecast/weatherItem/WeatherItem";

describe("should render weather item component correctly", () => {
  it("should render today if the datetime passed is today", () => {
    render(
      <WeatherItem
        date={new Date()}
        weatherName="overcast"
        max={50}
        min={10}
        iconId={"d10"}
      />
    );
    const day = screen.getByRole("heading", { name: /today/i });
    expect(day).toBeInTheDocument();
  });

  it("should render friday if next friday is passed", () => {
    const today = new Date();

    const nextFriday = new Date(
      today.setDate(today.getDate() + ((7 - today.getDay() + 5) % 7 || 7))
    );
    render(
      <WeatherItem
        weatherName="overcast"
        date={nextFriday}
        max={50}
        min={10}
        iconId={"d10"}
      />
    );
    const friday = screen.getByRole("heading", { name: /friday/i });
    expect(friday).toBeInTheDocument();
  });

  it("should render max and min temprature", () => {
    render(
      <WeatherItem
        date={new Date()}
        weatherName="overcast"
        max={50}
        min={10}
        iconId={"d10"}
      />
    );
    const max = screen.getByText("50°");
    expect(max).toBeInTheDocument();
    const min = screen.getByText("10°");
    expect(min).toBeInTheDocument();
  });

  it("should render weather icon", () => {
    render(
      <WeatherItem
        date={new Date()}
        weatherName="overcast"
        max={50}
        min={10}
        iconId={"d10"}
      />
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
