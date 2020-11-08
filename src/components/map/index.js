import { cityType } from "types/city";
import { Styled } from "./index.styled";

export const Map = ({ selectedCity }) => (
  <Styled.MapContainer>
    <Styled.TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      detectRetina
    />
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
