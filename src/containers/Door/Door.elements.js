import styled from "styled-components";
import theme from "../../style/theme";

export const FloorBackground = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  opacity: 50%;
  object-fit: cover;
`;

export const DoorContainer = styled.div`
  width: 66%;
  margin: 0;
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    margin-left: 3%;
    width: 74%;
  }
`;

export const DoorInnerContent = styled.div`
  position: relative;
  z-index: 2;
  height: 95%;
`;

export const CoverDoor = styled.div`
  width: 48%;
  height: 96%;
  margin: 1.35% 0;
  position: absolute;
  top: 0;
  z-index: 3;
  background: ${theme.CoverDoor};
  border: 1.5px solid ${theme.GrebeGray};
  box-shadow: inset 0px 24px 19px -7px rgba(101, 107, 107, 0.25),
    inset 0px 0px 40px 2px ${theme.CoverDoorShadow};
`;

export const DoorLeft = styled(CoverDoor)`
  left: ${(props) => {
    return props.status === "open" ? "-45%" : "2%";
  }};
  transition: left 2s ease-in-out;
`;

export const DoorRight = styled(CoverDoor)`
  right: ${(props) => {
    return props.status === "open" ? "-45%" : "2%";
  }};
  transition: right 2s ease-in-out;
`;
