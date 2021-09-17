import styled from "styled-components";

export const NavbarSection = styled.section`
  background-color: #c1c1c1;
  width: 15%;
  height: 50vh;
  margin: 1rem;
  align-self: flex-start;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 2px #e7e7e740 inset;
  box-shadow: 1px 1px 4px 0px #00000040;
`;

export const FloorButtonsContainer = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 1.5rem;
`;

export const DoorButtonContainer = styled.div``;

export const DoorButton = styled.button`
  padding: 0.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
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
