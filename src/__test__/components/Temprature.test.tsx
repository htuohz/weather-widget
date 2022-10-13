import { render, screen } from "@testing-library/react";
import Temprature from "../../components/currentWeather/temprature/Temprature";

describe("temprature renders degrees in both units", () => {
  it("renders temprature in Imperial", () => {
    render(<Temprature temprature={15} isMetric={false} />);
    const temp = screen.getByRole("heading", { name: /15/ });
    expect(temp).toBeInTheDocument();
    expect(temp).toHaveTextContent("°F");
  });

  it("renders temprature in metric", () => {
    render(<Temprature temprature={15} isMetric={true} />);
    const temp = screen.getByRole("heading", { name: /15/ });
    expect(temp).toBeInTheDocument();
    expect(temp).toHaveTextContent("°C");
  });
});
