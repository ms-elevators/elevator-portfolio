import styled from "styled-components";

export const LeftContainer = styled.section`
  width: 15%;
  margin: 1rem;
  align-self: flex-start;
  font-family: "Pretendard-Regular";
  line-height: 1.5;
`;

export const ScreenContainer = styled.div`
  width: 100%;
  height: 45vh;
  border: solid 10px #555555;
  border-radius: 5px;
  margin: 1rem 0;
  padding: 1rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #252525;
  color: #ffffff;
  box-shadow: 1px 3px 3px #000000;
`;

export const ScreenTitle = styled.h1`
  padding: 0;
  margin: 0;
`;

export const ScreenDesc = styled.p`
  height: 40%;
  text-align: left;
`;

export const StackList = styled.div``;

export const StackIcon = styled.i`
  font-size: 1.5rem;
  margin: 0.3rem;
  padding: 0.3rem;
`;

export const SocialContainer = styled.div`
  width: 90%;
  height: 10vh;
  border: solid 2px #000000;
  margin: 2rem auto;
  padding: 0.5rem;
  align-self: flex-end;
  background-color: #e0e0e0;
  box-shadow: 1px 1px 1px #000000;
  transform: rotate(5deg);
`;

export const SocialIcon = styled.i`
  font-size: 1.5rem;
  margin: 0.3rem;
  padding: 0.3rem;
`;
