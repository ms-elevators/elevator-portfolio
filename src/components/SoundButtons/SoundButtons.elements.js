import styled from "styled-components";
import { ThemeProvider } from "styled-components";
// import theme(colors)
import theme from "../../style/theme";

export const SoundSettingContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SoundSettingTitle = styled.h1`
  color: ${theme.White};
`;

export const SoundSettingButtonWrapper = styled.div``;

export const SoundSettingButton = styled.input`
  margin: 1rem;
  padding: 0.5rem 1rem;
  width: 4rem;
  border-radius: 3px;
  border: 2px ${theme.SoundButtonBorder} solid;
  background-color: ${theme.DavyGray};
  color: ${theme.White};
  font-weight: 600;
`;
