import styled from "styled-components";
import { ThemeProvider } from "styled-components";
// import theme(colors)
import theme from "../../style/theme";

export const NavContentsContainer = styled.div`
  width: 18%;
  height: 100%;
  margin: auto;
`;

export const NavbarSection = styled.section`
  background-color: ${theme.Navbar};
  width: 85%;
  height: 50vh;
  margin: 5% auto;
  align-self: flex-start;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 2px ${theme.Navbar1} inset;
  box-shadow: 1px 1px 4px 0px ${theme.Navbar2};
  @media (max-width: 1024px) {
    height: auto;
  }
`;

export const FloorButtonsContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const ContactButton = styled.button`
  padding: 0.5rem;
  margin: 1rem auto;
  cursor: pointer;
  position: relative;
  z-index: 0;
  background: ${theme.ContactButton};
  color: ${theme.White};
  border: 1px solid
    ${(props) =>
      props.destination
        ? "${theme.StyleButtonBorder1}"
        : "${theme.StyleButtonBorder2}"};
  box-sizing: border-box;
  box-shadow: 0.3px 0.3px 1px 0.5px rgba(100, 100, 100, 0.25),
    ${(props) => (props.destination ? "0px 0px 10px #99EDFF," : "")} inset 1.3px
      1.3px 2px rgba(35, 35, 35, 0.18),
    inset -1px -1px 3px 1px rgba(220, 232, 231, 0.6);
  border-radius: 100%;

  // prevent hover crash for contact button with overlay
  &::after {
    content: "";
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const DoorButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DoorButton = styled.button`
  padding: 0.3rem 0.5rem;
  display: flex;
  margin: 0 0.5rem;
  cursor: pointer;
  position: relative;
  z-index: 0;
  background: ${theme.StyleButton};
  border: 1px solid ${theme.StyleButtonBorder2};

  box-sizing: border-box;
  box-shadow: 0.3px 0.3px 1px 0.5px rgba(100, 100, 100, 0.25),
    inset 1.3px 1.3px 2px rgba(35, 35, 35, 0.18),
    inset -1.3px -1.3px 4px 2px rgba(220, 232, 231, 0.6);
  border-radius: 5px;
  @media (max-width: 1024px) {
    height: 30px;
    width: 50%;
  }

  // prevent hover crash for contact button with overlay
  &::after {
    content: "";
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
