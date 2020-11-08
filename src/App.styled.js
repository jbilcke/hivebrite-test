import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Styled = {};

Styled.GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    --color-text: #444444;
    --color-text-alt: #666666;
    --color-background: #f3f5f7;
    --color-primary: #0d4899;

    --spacing-sm: 1rem;
    

    --font-family: "Nunito Sans", "Open Sans", "Helvetica Neue", Arial, Helvetica, Verdana, sans-serif;

    font-family: var(--font-family);
    color: var(--color-text);
  }

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #0090e5;
      border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #007cd1;
    }
`;

Styled.Main = styled.main`
  display: flex;
`;
