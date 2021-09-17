import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0;
  cursor: pointer;
  height: 50%;
  position: relative;
  z-index: 0;
  background: #eff4f4;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  box-shadow: 0.3px 0.3px 1px 0.5px rgba(100, 100, 100, 0.25),
    inset 1.3px 1.3px 2px rgba(35, 35, 35, 0.18),
    inset -1.3px -1.3px 4px 2px rgba(220, 232, 231, 0.6);
  border-radius: 5px;

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
