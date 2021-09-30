import styled from "styled-components";

export const LeftContainer = styled.section`
  width: 18%;
  padding: 1rem;
  align-self: flex-start;
  font-family: "Pretendard-Regular";
  line-height: 1.5;
`;

export const ScreenOutline = styled.div`
  width: 100%;
  height: 45vh;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 5%;
  align-self: flex-start;
  background-color: #121212;
  box-shadow: 1px 3px 3px #000000;
  @media (max-width:1080px){
    height:25vh;
    
  }
`;

export const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f0f8ff;
`;

export const ScreenTitle = styled.h1`
  padding: 0;
  margin: 0;
  border-bottom: solid 3px #555555;
  font-size: 2.5rem;

  @media screen and (max-width: 1400px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ScreenDesc = styled.p`
  margin: 0;
  padding: 0 0.5rem;
  height: 50%;
  text-align: left;
  overflow-y: scroll;
  word-break: break-all;


  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const StackList = styled.div`
  border-top: solid 3px #555555;
  padding: 0.5rem 0;
  display: grid;
  grid-template-columns: ${(props) => {
    return `repeat(${props.length}, 1fr);`;
  }};
`;

export const StackIcon = styled.i`
  font-size: 1.5rem;
`;

export const SocialContainer = styled.div`
  border: solid 2px #000000;
  margin: 2rem auto;
  padding: 0.5rem;
  align-self: flex-end;
  background-color: #e0e0e0;
  box-shadow: 1px 1px 1px #000000;
  transform: rotate(5deg);
`;

export const SocialIcon = styled.i`
  font-size: 2.5rem;
  margin: 0.3rem;
  padding: 0.3rem;

  @media screen and (max-width: 1400px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;
