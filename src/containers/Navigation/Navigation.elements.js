import styled from "styled-components";

export const NavContentsContainer = styled.div`
  width: 18%;
  height: 100%;
  margin: auto;
`;

export const NavbarSection = styled.section`
  background-color: #c1c1c1;
  width: 85%;
  height: 50vh;
  margin: 5% auto;
  align-self: flex-start;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 2px #e7e7e740 inset;
  box-shadow: 1px 1px 4px 0px #00000040;
`;

export const FloorButtonsContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContactButton = styled.button`
  padding: 0.5rem;
  margin: 1rem auto;
  cursor: pointer;
  position: relative;
  z-index: 0;
  background: #ff3333;
  color: #ffffff;
  border: 1px solid ${(props) => (props.destination ? "#99edff" : "#e6e6e6")};
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

export const DoorButtonContainer = styled.div``;

export const DoorButton = styled.button`
  padding: 0.3rem 0.5rem;
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
