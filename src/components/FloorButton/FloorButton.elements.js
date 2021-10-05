import styled from "styled-components";
import theme from "../../style/theme";

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  height: 23%;
  margin: 7% 5%;
  width: 45%;

  cursor: pointer;
  position: relative;
  z-index: 0;
  background: ${theme.StyleButton};

  border: 1px solid
    ${(props) =>
      props.destination
        ? ` ${theme.StyleButtonBorder1}`
        : `${theme.StyleButtonBorder2}`};
  box-sizing: border-box;
  box-shadow: 1px 4px 0 rgba(100, 100, 100, 0.5),
    ${(props) =>
        props.destination ? `0px 0px 10px ${theme.StyleButtonBorder1},` : ""}
      inset 1.3px 1.3px 2px rgba(35, 35, 35, 0.18),
    inset -1.3px -1.3px 4px 2px rgba(220, 232, 231, 0.6);
  border-radius: 5px;

  font-family: "Digital Numbers Regular";
  font-size: 1.1rem;

  :hover {
    transform: translateY(-1px);
    box-shadow: inset 1.3px 1.3px 2px rgba(35, 35, 35, 0.18),
      5px 9px 2px rgba(0, 0, 0, 0.2);
  }

  :active {
    position: relative;
    top: 4px;
    box-shadow: inset 1.3px 1.3px 2px rgba(35, 35, 35, 0.18),
      1px 4px 0 rgba(100, 100, 100, 0.5);
    color: rgba(192, 191, 191, 1);
  }

  /* @media (max-width: 1024px) {
    height: 12%;
    margin: 2% 5%;
    width: 70%;
    font-size: 1rem;
  } */

  @media (max-width: 800px) {
    margin: 2% 5%;
    width: 70%;
    font-size: 0.7rem;
    height: 13%;
  }

  @media (min-width: 1440px) {
    font-size: 1.2vw;
    margin: 5%;
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
