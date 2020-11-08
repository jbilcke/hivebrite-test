import "leaflet/dist/leaflet.css";
import {
  MapContainer as UnstyledMapContainer,
  Marker as UnstyledMarker,
  TileLayer as UnstyledTileLayer,
} from "react-leaflet";
import { Icon } from "leaflet";
import styled from "styled-components";

export const Styled = {};

Styled.MapContainer = styled(UnstyledMapContainer).attrs(() => ({
  center: [39.828175, -98.5795],
  zoom: 4,
}))`
  width: 100%;
  height: 100vh;
`;

const mapMarkerIcon = new Icon({
  iconUrl: process.env.PUBLIC_URL + "/assets/marker.svg",
  iconSize: [64, 64],
  iconAnchor: [32, 64],
});

Styled.Marker = styled(UnstyledMarker).attrs(() => ({
  icon: mapMarkerIcon,
}))``;

Styled.TileLayer = styled(UnstyledTileLayer).attrs(() => ({
  attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  detectRetina: true,
}))``;

