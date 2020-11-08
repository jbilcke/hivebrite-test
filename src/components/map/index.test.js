import { render, screen } from "@testing-library/react";
import { Map } from "./index";

test("renders Map", () => {
  render(<Map />);
  // we just make sure we don't have a catastrophic failure
  const credits = screen.getByText(/OpenStreetMap/i);
  expect(credits).toBeInTheDocument();
});
