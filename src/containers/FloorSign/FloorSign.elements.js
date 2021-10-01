import styled from "styled-components";
import theme from "../../style/theme";

export const FloorSignStyle = styled.div`
  @font-face {
    font-family: "LAB디지털";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB디지털.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  position: relative;

  margin: auto;
  width: 7rem;
  height: 4rem;

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
    right: 2rem;
    top: 0.5rem;

    font-family: "LAB디지털"; //폰트 수정
    font-size: 2rem;

    color: ${theme.FloorSignFont};
    z-index: 1;

    @media (min-width: 1440px) {
      font-size: 2.2vw;
      right: 2.2vw;
      top: 0.7vw;
    }
  }
  .gray {
    color: ${theme.FloorSignGray};
    z-index: 0;
  }
`;
