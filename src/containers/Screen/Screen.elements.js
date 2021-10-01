import styled from "styled-components";
import theme from "../../style/theme";

export const LeftContainer = styled.section`
  font-family: "Montserrat", "Pretendard-ExtraLight", sans-serif;
  width: 18%;
  padding: 1rem;
  align-self: flex-start;
  line-height: 1.5;

  @media (max-width: 800px) {
    display: none;
    position: absolute;
  }

  @media (max-width: 1024px) {
    height: 80%;
  }
`;

export const ScreenOutline = styled.div`
  width: 100%;
  height: 45vh;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 5%;
  align-self: flex-start;
  background-color: ${theme.ScreenOutline};
  box-shadow: 1px 3px 3px ${theme.Black};

  @media (max-width: 1024px) {
    height: 70%;
  }
`;

export const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${theme.ScreenContainer};
`;

export const ScreenTitle = styled.h1`
  padding: 0;
  margin: 0;
  border-bottom: solid 3px ${theme.DavyGray};
  font-size: 1.5rem;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.7vw;
  }
`;

export const ScreenDesc = styled.p`
  margin: 0;
  padding: 0 0.5rem;
  height: 50%;
  text-align: left;
  overflow-y: scroll;
  word-break: break-all;

  @media (min-width: 1440px) {
    font-size: 1.2vw;
  }

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
`;

export const StackList = styled.div`
  border-top: solid 3px ${theme.DavyGray};
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: ${(props) => {
    return `repeat(${props.length}, 1fr);`;
  }};
`;

export const StackIcon = styled.i`
  font-size: 1.5rem;

  @media (min-width: 1440px) {
    margin-top: 0.5vw;
    font-size: 2.2vw;
  }
`;

export const SocialContainer = styled.div`
  border: solid 2px ${theme.Black};
  margin: 2rem auto;
  padding: 0.5rem;
  align-self: flex-end;
  background-color: ${theme.SoundState};
  box-shadow: 1px 1px 1px ${theme.Black};
  transform: rotate(5deg);
`;

export const SocialIcon = styled.a`
  font-size: 1.5rem;
  margin: 0.3rem;
  padding: 0.3rem;

  &:visited {
    color: #000000;
  }

  @media screen and (min-width: 1440px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
