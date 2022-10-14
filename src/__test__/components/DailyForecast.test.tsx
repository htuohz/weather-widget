import { screen } from "@testing-library/react";
import DailyForecast from "../../components/dailyForecast/DailyForecast";
import { renderWithProviders } from "../test-utils";
it("should render daily forecaset component", () => {
  renderWithProviders(<DailyForecast />);
});

it("should render 7 items", () => {
  renderWithProviders(<DailyForecast />);
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(7);
});
