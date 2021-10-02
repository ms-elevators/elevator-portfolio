import React from "react";
import { FloorSignStyle, NumberContainer } from "./FloorSign.elements";

export default function FloorSign({ floor }) {
  return (
    <FloorSignStyle>
      <div />
      <NumberContainer>
        <p> {floor}</p>
        <p className="gray">88</p>
      </NumberContainer>
      <div />
    </FloorSignStyle> //88은 뒤 회색 그림자
  );
}
