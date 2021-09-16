import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0;
  border-radius: 8px;
  border: solid #666666 2px;
  cursor: pointer;
  height: 50%;
  background-color: #333333;
  color: #ffffff;
  position: relative;
  z-index: 0;

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
