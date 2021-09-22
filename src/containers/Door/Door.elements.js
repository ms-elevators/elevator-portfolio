import styled from "styled-components";

export const FloorBackground = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  opacity: 50%;
`;

export const DoorFrame = styled.img`
  position: absolute;
  z-index: 5;
`;

export const DoorFrameTop = styled(DoorFrame)`
  height: 2%;
  width: 100%;
  top: 0;
  left: 0;
`;

export const DoorFrameBottom = styled(DoorFrame)`
  height: 2%;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const DoorFrameLeft = styled(DoorFrame)`
  height: 100%;
  width: 2%;
  top: 0;
  left: 0;
`;

export const DoorFrameRight = styled(DoorFrame)`
  height: 100%;
  width: 2%;
  top: 0;
  right: 0;
`;

export const DoorContainer = styled.div`
  width: 65%;
  height: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
`;

export const DoorInnerContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const ContentImgSection = styled.section`
  display: flex;
  overflow: hidden;
  width: 90%;
  margin-top: 7%;
  margin-left: 5%;
`;

export const Button = styled.button`
  margin-top: 25%;
  font-size: 1.2rem;
  padding: 10px;
  width: 3.5rem;
  height: 2.5rem;
  background-color: #323232;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
`;

export const ContentImgContainer = styled.section`
  width: 100%;
  height: 50vh;
  border: 1px solid #000000;
  position: relative;
  overflow: hidden;
`;

export const ContentImg = styled.img`
  width: 80%;
  height: 380px;
  margin: 1rem auto;

  opacity: ${(props) => props.current};
  position: absolute;
  left: 10%;
  transition: opacity 1s ease-in-out;
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
  width: 48%;
  height: 96%;
  margin: 1.2% 0;
  position: absolute;
  top: 0;
  z-index: 3;
  background: #9e9e9e;
  border: 1.5px solid #494949;
  box-shadow: inset 0px 24px 19px -7px rgba(101, 107, 107, 0.25),
    inset 0px 0px 40px 2px #737373;
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

export const Text = styled.div`
  font-size: 10px;
  color: white;
`;


export const ContainerDot = styled(dot)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: #f1f1f1;
`;

export const ContainerDot = styled(dotActive)`
  background: rgb(32, 32, 32);
`;
