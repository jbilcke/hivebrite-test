import { useState } from "react";
import { useQuery } from "react-query";
import { Explorer } from "./components/explorer";
import { Map } from "./components/map";
import { Styled } from "./App.styled";

export const App = () => {
  const [selectedCity, selectCity] = useState();

  const { data: cities } = useQuery("cities", async () => {
    const response = await fetch("/cities.json");
    const content = await response.json();
    return content || [];
  });
  return (
    <>
      <Styled.GlobalStyle />
      <Styled.Main>
        <Explorer
          cities={cities}
          selectedCity={selectedCity}
          onSelectCity={selectCity}
        />
        <Map selectedCity={selectedCity} />
      </Styled.Main>
    </>
  );
};
