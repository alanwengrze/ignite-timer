import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    font-size: 62.5%;
  }
  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.green500};
  }

  body{
    background-color: ${props => props.theme.colors.gray900};
    color: ${props => props.theme.colors.gray300};
    --webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`