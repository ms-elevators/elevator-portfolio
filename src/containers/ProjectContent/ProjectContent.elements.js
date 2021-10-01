import styled from "styled-components";
import theme from "../../style/theme";

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
  @media (max-width: 1024px) {
    margin-top: 3rem;
  }
`;

// 이전, 다음 버튼
export const ImgChangeButton = styled.div`
  margin: auto 4%;
  font-size: 2.5rem;
  height: 2.5rem;

  cursor: pointer;
`;

export const ContentImgContainer = styled.section`
  width: 80%;
  height: 50vh;
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
  @media (max-width: 1024px) {
    padding: 1rem;
    height: 60%;
  }
`;

export const ContentButtonContainer = styled.section`
  width: 100%;
  height: 10vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    justify-content: space-around;
    padding: 0 10%;
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
  margin-top: 2%;
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
