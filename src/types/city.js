import { number, shape, string } from "prop-types";

export const cityType = shape({
  city: string.isRequired,
  growth_from_2000_to_2013: string.isRequired,
  latitude: number.isRequired,
  longitude: number.isRequired,
  population: string.isRequired,
  rank: string.isRequired,
  state: string.isRequired,
});
