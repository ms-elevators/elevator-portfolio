import styled from "styled-components";

export const MainContainer = styled.div`
  width: 90%;
  height: 90vh;
  margin: 5vh auto 0 auto;
  text-align: center;
  position: relative;
  background: #969696;
  border: 2px solid #494949dd;
  box-shadow: inset 0px 0px 99px #6a6a6a;
`;

export const TopSection = styled.section`
  display: flex;
`;

export const BottomSection = styled.section`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;
