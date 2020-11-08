import React from "react";

import { Map } from "./index";

export default {
  title: "Components/Map",
  component: Map,
  argTypes: {},
};

const Template = (args) => <Map {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedCity: null,
};
