import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

export default GlobalStyle;
