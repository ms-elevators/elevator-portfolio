import styled from "styled-components";
import { ThemeProvider } from "styled-components";
// import theme(colors)
import theme from "../../style/theme";

export const SpeakerContainer = styled.div`
  position: fixed;
  width: 10%;
  top: 10%;
  left: 8%;

  i {
    font-size: 3rem;
  }
`;

export const SoundStateLabel = styled.p`
  background-color: ${theme.SoundState};
  border: solid 2px ${theme.Black};
`;
