import { cityType } from "types/city";
import { Styled } from "./index.styled";

export const Map = ({ selectedCity }) => (
  <Styled.MapContainer>
    <Styled.TileLayer />
    {selectedCity && (
      <Styled.Marker
        position={{
          lat: selectedCity.latitude,
          lng: selectedCity.longitude,
        }}
      ></Styled.Marker>
    )}
  </Styled.MapContainer>
);

Map.propTypes = {
  selectedCity: cityType,
};

Map.defaultProps = {
  selectedCity: null,
};
