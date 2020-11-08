import React from "react";
import { Styled } from "../src/App.styled";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <div style={{ margin: "3em" }}>
      <Styled.GlobalStyle />
      <Story />
    </div>
  ),
];
