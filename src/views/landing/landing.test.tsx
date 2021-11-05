import { render } from "@testing-library/react";
import Home from "./index";

describe("Landing Page", () => {
  it("should display the title", () => {
    const { getByText } = render(<Home />);

    const expectedTitle = "Front-End Starter Pack";
    expect(getByText(expectedTitle)).toBeInTheDocument();
  });
});
