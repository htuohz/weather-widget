import { render, screen } from "@testing-library/react";
import AlertBanner from "../../components/alertBanner/AlertBanner";

it("should render a alert banner with a given message", () => {
  render(<AlertBanner message="Network error" />);
  const error = screen.getByText(/network error/i);
  expect(error).toBeInTheDocument();
});
