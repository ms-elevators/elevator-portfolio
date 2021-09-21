import React from "react";
import {FloorSignStyle} from "./FloorSign.elements";

export default function FloorSign({ floor }) {
  return (
  <FloorSignStyle> 
    <p> {floor}</p> 
    <p className="gray">88</p>
  </FloorSignStyle>//88은 뒤 회색 그림자
  )}
