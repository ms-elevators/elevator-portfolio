import React, { useState } from "react";
import styled from "styled-components";
// import { useSpring, animated } from "react-spring";

const FloorSignStyle = styled.div`
  @font-face {
    font-family: "LAB디지털";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB디지털.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "LAB디지털";
  border: solid 2px #cccccc;
  position: relative;
  right: 3%;
  top: 40%;
  height: 50%;
  width: 12%;
  font-size: 1.5em;
  text-align: center;
  padding: 1%;
`;
export default function FloorSign({ floor }) {
  // const props = useSpring({ number: floor, from: { number: 0 } });

  return <FloorSignStyle>{floor}</FloorSignStyle>;
}
