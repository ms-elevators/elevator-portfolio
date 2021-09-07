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

export const ContentImg = styled.img`
  width: 80%;
  margin: 1rem auto;
  border: 1px solid #000000;
`;

export const ContentButtonContainer = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ContentLink = styled.a`
  margin: 1rem;
  padding: 0.5rem 2rem;
  text-decoration: none;
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px;
  border: #ffffff 1px solid;
  width: 10rem;

  &:hover {
    transform: scale(1.1);
    background-color: #ffffff;
    color: #000000;
    border: #000000 1px solid;
  }
`;

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
