import { screen } from "@testing-library/react";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
// import getCurrentWeather from "../../store/reducers/currentWeatherSlice";
import { renderWithProviders } from "../test-utils";
// import axios from "axios";

it("should render currentcity component", () => {
  renderWithProviders(<CurrentWeather />);
  const dateString = new Date().toDateString();
  const dateText = screen.getByText(dateString);
  expect(dateText).toBeInTheDocument();
});
