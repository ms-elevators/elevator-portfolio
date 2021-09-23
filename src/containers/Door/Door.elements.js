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

// 이미지를 감싸고 있는 불투명한 흰색 배경화면
export const ImageBackground = styled.div`
  width: 90%;
  height: 58vh;
  background: rgba(255, 255, 255, 0.47);
  margin: 3% auto 0 auto;
`;

export const ContentImgSection = styled.section`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin: auto;
`;

// 이전, 다음 버튼
export const ImgChangeButton = styled.div`
  margin: auto 4%;
  font-size: 2.5rem;
  height: 2.5rem;
`;

export const ContentImgContainer = styled.section`
  width: 80%;
  height: 50vh;
  /* border: 1px solid #000000; */
  position: relative;
  overflow: hidden;
  margin: 2% auto 0 auto;
`;

export const ContentImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${(props) => props.current};
  position: absolute;
  left: 0;
  transition: opacity 1s ease-in-out;
  object-fit: cover;
`;

export const ContentButtonContainer = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ContentLink = styled.a`
  margin: 2% 3%;
  padding: 0.5rem 2rem;
  text-decoration: none;
  background-color: #09090a;
  color: #fbfbfb;
  border-radius: 5px;
  border: #fbfbfb 2px solid;
  width: 10rem;
  font-weight: 500;

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

export const IndicatorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

export const ContainerDot = styled.div`
  border-radius: 50%;
  margin: 0 5px;
  background: ${(props) =>
    props.active === "dotActive" ? "#B2DAE7" : "rgba(89, 89, 89, 0.93)"};
  width: ${(props) => (props.active === "dotActive" ? "11px" : "10px")};
  height: ${(props) => (props.active === "dotActive" ? "11px" : "10px")};
`;
