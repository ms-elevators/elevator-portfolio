import styled from "styled-components";
import theme from "../../style/theme";

export const FloorSignStyle = styled.div`
  position: relative;

  margin: auto;
  width: 7rem;
  height: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${theme.FloorSign};
  border: 0.5rem solid ${theme.FloorSignBorder};
  box-sizing: border-box;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 1440px) {
    width: 7.5vw;
    height: 4.5vw;
    font-size: 2.2vw;
  }

  p {
    margin: 0;
    position: absolute;
    right: 0;

    font-family: "Digital Numbers Regular";
    font-size: 1.5rem;

    color: ${theme.FloorSignFont};
    z-index: 1;

    @media (min-width: 1440px) {
      font-size: 2.1rem;
    }
  }
  .gray {
    color: ${theme.FloorSignGray};
    z-index: 0;
  }

  div {
    height: 15%;
  }
`;

export const NumberContainer = styled.section`
  height: 70%;
  width: 40%;

  margin: auto;
  text-align: center;
  position: relative;
`;
