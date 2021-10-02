import styled from "styled-components";
import theme from "../../style/theme";

export const MainContainer = styled.div`
  width: 90%;
  height: 90vh;
  margin: 5vh auto 0 auto;
  text-align: center;
  position: relative;
  background: ${theme.MainContainer};
  border: 2px solid ${theme.MainContainerBorder};
  box-shadow: inset 0px 0px 99px ${theme.MainContainerShadow};
`;

export const TopSection = styled.section`
  display: flex;
  height: 15vh;
`;

export const BottomSection = styled.section`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;
