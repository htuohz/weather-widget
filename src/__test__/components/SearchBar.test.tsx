import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../../components/searchBar/SearchBar";
import { renderWithProviders } from "../test-utils";

describe("should render a searchbar component", () => {
  it("should allow user to enter a city name", () => {
    renderWithProviders(<SearchBar />);
    const input = screen.getByRole("searchbox");
    expect(input).toBeInTheDocument();
    userEvent.type(input, "london");
    const suggestionsList = screen.getAllByRole("button");
    expect(suggestionsList).toHaveLength(5);
    expect(suggestionsList[0]).toHaveTextContent(/london/i);
  });
});
