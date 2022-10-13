import { screen } from "@testing-library/react";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import { renderWithProviders } from "../test-utils";

describe("CurrentWeather component rendered correctly", () => {
  it("City name is rendered", () => {
    renderWithProviders(<CurrentWeather />);
    const city = screen.getByRole("heading", { name: /sydney/i });
    expect(city).toBeInTheDocument();
  });

  it("Current date is rendered", () => {
    renderWithProviders(<CurrentWeather />);
    const dateString = new Date().toLocaleDateString("en-AU");
    const dateText = screen.getByText(dateString);
    expect(dateText).toBeInTheDocument();
  });

  it("Current weather is rendered", () => {
    renderWithProviders(<CurrentWeather />);
    const weatherText = screen.getByText(/overcast/i);
    expect(weatherText).toBeInTheDocument();
    const weatherIcon = screen.getByRole("img", { name: "overcast" });
    expect(weatherIcon).toBeInTheDocument();
  });

  it("Current temprature is rendered", () => {
    renderWithProviders(<CurrentWeather />);
    const temp = screen.getByRole("heading", { name: "0°C" });
    expect(temp).toBeInTheDocument();
  });
});
