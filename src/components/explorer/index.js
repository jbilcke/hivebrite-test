import { useState } from "react";
import { arrayOf, func } from "prop-types";
import { cityType } from "types/city";
import { Styled } from "./index.styled";

export const Explorer = ({ cities: allCities, selectedCity, onSelectCity }) => {
  const [search, setSearch] = useState("");
  const searchItem = search.trim().toLowerCase();
  const cities = allCities.filter((city) =>
    city.city.toLowerCase().includes(searchItem)
  );
  return (
    <Styled.Explorer>
      <Styled.SearchField>
        <Styled.SearchIcon />
        <Styled.Input
          placeholder="Search.."
          value={search}
          onChange={({ currentTarget: { value } }) => setSearch(value)}
        />
      </Styled.SearchField>
      <Styled.Counter>
        {cities.length} {cities.length > 1 ? "cities" : "city"} found
      </Styled.Counter>
      <Styled.CityList>
        {cities.map((city) => (
          <Styled.CityItem key={city.rank} onClick={() => onSelectCity(city)}>
            <Styled.CityTitle>
              <Styled.CityName isSelected={city.rank === selectedCity?.rank}>
                {city.city}
              </Styled.CityName>
              <Styled.CityState>, {city.state}</Styled.CityState>
            </Styled.CityTitle>
            <Styled.CityDetails>
              <Styled.CityPopulation>
                <Styled.PersonIcon />
                <span>{Number(city.population).toLocaleString("en-US")}</span>
              </Styled.CityPopulation>
            </Styled.CityDetails>
          </Styled.CityItem>
        ))}
      </Styled.CityList>
      <Styled.Footer>Frontend Test</Styled.Footer>
    </Styled.Explorer>
  );
};

Explorer.propTypes = {
  cities: arrayOf(cityType),
  selectedCity: cityType,
  onSelectCity: func,
};

Explorer.defaultProps = {
  cities: [],
  selectedCity: null,
  onSelectCity: () => {},
};
