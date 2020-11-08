import { render, screen } from "@testing-library/react";
import { Explorer } from "./index";

test("renders Explorer", () => {
  render(
    <Explorer
      cities={[
        {
          city: "San Francisco",
          growth_from_2000_to_2013: "7.7%",
          latitude: 37.7749295,
          longitude: -122.4194155,
          population: "837442",
          rank: "14",
          state: "California",
        },
      ]}
    />
  );
  const city = screen.getByText(/San Francisco/i);
  expect(city).toBeInTheDocument();
});
