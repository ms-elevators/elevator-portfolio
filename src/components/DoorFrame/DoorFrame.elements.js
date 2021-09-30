import styled from "styled-components";
import { ThemeProvider } from "styled-components";
// import theme(colors)
import theme from "../../style/theme";

export const DoorFrame = styled.img`
  position: absolute;
  z-index: 5;
`;

export const DoorFrameTop = styled(DoorFrame)`
  height: 2%;
  width: 100%;
  top: 0;
  left: 0;
`;

export const DoorFrameBottom = styled(DoorFrame)`
  height: 2%;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const DoorFrameLeft = styled(DoorFrame)`
  height: 100%;
  width: 2%;
  top: 0;
  left: 0;
`;

export const DoorFrameRight = styled(DoorFrame)`
  height: 100%;
  width: 2%;
  top: 0;
  right: 0;
`;
