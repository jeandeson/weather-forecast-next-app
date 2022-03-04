import { createGlobalStyle } from "styled-components";
const globalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial Helvetica, sans-serif;
  font-size: 16px;
  color: #fff;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default globalStyle;
