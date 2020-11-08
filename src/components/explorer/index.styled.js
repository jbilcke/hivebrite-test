import styled, { css } from "styled-components";
import {
  SearchIcon as UnstyledSearchIcon,
  PersonIcon as UnstyledPersonIcon,
} from "components/icons";
export const Styled = {};

Styled.Explorer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  background-color: var(--color-background);
  overflow: hidden;

  padding: var(--spacing-sm) var(--spacing-sm) 0 var(--spacing-sm);
`;

Styled.SearchField = styled.div`
  background-color: transparent;
  border-radius: 1.8rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
`;
Styled.SearchIcon = styled(UnstyledSearchIcon).attrs(() => ({
  height: 24,
  width: 24,
}))`
  pointer-events: none;
  fill: var(--color-text-alt);
`;

Styled.Input = styled.input`
  flex: 1;
  background: transparent;
  border: var(--color-primary);
  color: var(--color-text);
  font-family: var(--font-family);
  font-size: 1.4rem;
  &::placeholder {
    font-family: var(--font-family);
    color: var(-color-text-alt);
    font-size: 1.4rem;
  }
`;

Styled.Counter = styled.div`
  display: flex;
  padding: var(--spacing-sm);
  justify-content: center;
`;

Styled.CityList = styled.ul`
  height: calc(100vh - 12rem);
  overflow-x: hidden;
  overflow-y: scroll;
  padding: var(--spacing-sm) var(--spacing-sm) var(--spacing-sm) 0.4rem;
`;

Styled.CityItem = styled.li.attrs(() => ({
  role: "button",
}))`
  font-size: 1.1rem;
  padding-bottom: var(--spacing-sm);
  &:hover {
    cursor: pointer;
    color: var(--color-primary);
  }
`;

Styled.CityTitle = styled.div`
  margin-bottom: 0.2rem;
`;

Styled.CityName = styled.span`
  ${({ isSelected }) =>
    isSelected
      ? css`
          font-weight: bold;
          color: var(--color-primary);
        `
      : ""}
`;

Styled.CityState = styled.span`
  color: var(--color-text-alt);
  font-style: italic;
`;

Styled.CityDetails = styled.div`
  font-size: 0.9rem;
  color: var(--color-text-alt);
  display: flex;
`;

Styled.PersonIcon = styled(UnstyledPersonIcon).attrs(() => ({}))`
  fill: var(--color-text-alt);
  width: 1rem;

  margin-right: 0.2rem;
`;

Styled.CityPopulation = styled.div`
  color: var(--color-text-alt);
  display: flex;
  align-items: center;
`;

Styled.Footer = styled.div`
  display: flex;
  padding: var(--spacing-sm);
  justify-content: center;
  align-content: center;
  font-size: 0.8rem;
  color: var(--color-text-alt);
`;
