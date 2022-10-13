import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UnitSwitcher from "../../components/unitSwitcher/UnitSwitcher";
import { renderWithProviders } from "../test-utils";

test("should render a switch", () => {
  renderWithProviders(<UnitSwitcher />);
  const metric = screen.getByRole("radio", { name: /metric/i });
  expect(metric).toBeChecked();
  const imperial = screen.getByRole("radio", { name: /imperial/i });
  userEvent.click(imperial);
  expect(metric).not.toBeChecked();
});
