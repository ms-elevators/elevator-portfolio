import styled from "styled-components";

export const FloorSignStyle = styled.div`
  @font-face {
    font-family: "LAB디지털";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB디지털.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  position: relative;
  right: 0;
  margin: auto;
  width: 55%;
  height: 15%;

  background: #2c2c2c;
  border: 7px solid #bebebe;
  box-sizing: border-box;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  p {
    margin: 0px;
    position: absolute;
    right: 30%;
    top: 15%;

    font-family: "LAB디지털"; //폰트 수정
    font-size: 33px;
    line-height: 43px;

    color: #cf3434;
    z-index: 1;
  }
  .gray {
    color: #343434;
    z-index: 0;
  }
`;
