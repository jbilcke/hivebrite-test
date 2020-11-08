import React from "react";

import { Explorer } from "./index";

export default {
  title: "Components/Explorer",
  component: Explorer,
  argTypes: {},
};

const Template = (args) => <Explorer {...args} />;

export const Default = Template.bind({});
Default.args = {
  cities: [
    {
      city: "New York",
      growth_from_2000_to_2013: "4.8%",
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: "8405837",
      rank: "1",
      state: "New York"
    },
    {
      city: "San Francisco",
      growth_from_2000_to_2013: "7.7%",
      latitude: 37.7749295,
      longitude: -122.4194155,
      population: "837442",
      rank: "14",
      state: "California"
    },
  ],
  selectedCity: null,
  onSelectCity: () => {},
};

export const Empty = Template.bind({});
Empty.args = {
  cities: [],
  selectedCity: null,
  onSelectCity: () => {},
};
