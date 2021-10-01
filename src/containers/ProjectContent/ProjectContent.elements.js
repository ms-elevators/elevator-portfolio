import styled from "styled-components";
import theme from "../../style/theme";

export const FloorTitle = styled.h1`
  display: none;

  @media (max-width: 800px) {
    display: block;
    font-size: 4rem;
    padding-top: 1rem;
    margin: 0;
  }
`;

// 이미지를 감싸고 있는 불투명한 흰색 배경화면
export const ImageBackground = styled.div`
  width: 90%;
  height: 58vh;
  background: rgba(255, 255, 255, 0.47);
  margin: 5% auto 2% auto;
`;

// 이전, 다음 버튼
export const ImgChangeButton = styled.div`
  margin: auto 4%;
  font-size: 2.5rem;
  height: 2.5rem;

  cursor: pointer;
`;

export const ContentImgSection = styled.section`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin: 3% auto;
  height: 80%;

  @media (max-width: 800px) {
    height: 40%;
  }
`;

export const ContentImgContainer = styled.section`
  width: 80%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: auto;
  padding: 3%;
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
  height: 5vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
    justify-content: space-around;
    padding: 0 10%;
  }
  @media (max-width: 800px) {
    height: 5vh;
  }
`;

export const ContentLink = styled.a`
  margin: 2% 3%;
  padding: 0.5rem;
  text-decoration: none;
  background-color: ${theme.ContentLink};
  color: ${theme.LightGray};
  border-radius: 5px;
  border: ${theme.LightGray} 2px solid;
  width: 10rem;
  font-weight: 500;
  font-family: "Montserrat", "Pretendard-ExtraLight", sans-serif;
  @media (min-width: 1440px) {
    font-size: 1.2vw;
  }
  &:hover {
    transform: scale(1.1);
    background-color: ${theme.White};
    color: ${theme.Black};
    border: ${theme.Black} 1px solid;
  }
`;

export const IndicatorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

export const Indicator = styled.div`
  border-radius: 50%;
  margin: 0 5px;
  background: ${(props) =>
    props.active === "dotActive" ? "#B2DAE7" : "rgba(89, 89, 89, 0.93)"};
  width: ${(props) => (props.active === "dotActive" ? "11px" : "10px")};
  height: ${(props) => (props.active === "dotActive" ? "11px" : "10px")};
  cursor: pointer;
`;

export const StackIcon = styled.i`
  font-size: 2.5rem;
`;

export const StackList = styled.div`
  width: 60%;
  margin: 5% auto;
  display: none;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: ${(props) => {
      return `repeat(${props.length}, 1fr);`;
    }};
  }
`;

export const ScreenDesc = styled.p`
  display: none;
  margin: 0 5%;
  padding: 0 5%;
  height: 15%;
  text-align: left;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.GrebeGray};
    outline: 1px solid ${theme.LightGray};
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (max-width: 800px) {
    display: block;
  }
`;
