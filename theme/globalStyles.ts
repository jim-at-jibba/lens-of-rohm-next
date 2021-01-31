import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: black;
    transition: color 500ms;

    &:hover {
      color: lightgrey
    }
  }
`

export default GlobalStyle
