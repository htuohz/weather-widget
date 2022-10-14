import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "./test-utils";

xtest("renders app", () => {
  renderWithProviders(<App />);
  const currentDate = new Date().toLocaleDateString("en-AU");
  const currentDateComponent = screen.getByRole("heading", {
    name: currentDate,
  });
  expect(currentDateComponent).toBeInTheDocument();
  const switches = screen.getAllByRole("radio");
  expect(switches.length).toBe(2);
});
