import styled from "styled-components";

export const DoorContainer = styled.div`
  width: 65%;
  height: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
  border: solid 2px #cccccc;
`;

export const DoorInnerContent = styled.div``;

export const CoverDoor = styled.div`
  background: #1f122c;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
`;

export const DoorLeft = styled(CoverDoor)`
  transition: left 2s ease-in-out;
`;

export const DoorRight = styled(CoverDoor)`
  transition: right 2s ease-in-out;
`;
