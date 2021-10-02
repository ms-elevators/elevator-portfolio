import React, { useState, useEffect } from "react";
import {
  FloorBackground,
  DoorContainer,
  DoorInnerContent,
  DoorLeft,
  DoorRight,
} from "./Door.elements";

import ProjectContent from "../ProjectContent/ProjectContent";

import { DoorFrame } from "../../components/DoorFrame/DoorFrame";
import Contact from "../../components/Contact/Contact";

import bgi from "./office.jpg";

export default function Door({ floor, isReady, contactFloor }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const [rotate, setRotate] = useState(0);

  // 층이 바뀌면 imgIdx를 초기화, 처음 그림이 표시
  useEffect(() => {
    setSlideIdx(0);
    setImgIdx(0);
    setRotate(0);
  }, [floor]);

  return (
    <DoorContainer>
      <FloorBackground src={bgi} alt="background" />
      <DoorFrame />
      {floor === contactFloor ? (
        <DoorInnerContent>
          <Contact />
        </DoorInnerContent>
      ) : (
        <DoorInnerContent>
          <ProjectContent
            imgIdx={imgIdx}
            setImgIdx={setImgIdx}
            slideIdx={slideIdx}
            setSlideIdx={setSlideIdx}
            floor={floor}
            rotate={rotate}
            setRotate={setRotate}
          />
        </DoorInnerContent>
      )}
      <DoorLeft status={isReady ? "open" : "close"}></DoorLeft>
      <DoorRight status={isReady ? "open" : "close"}></DoorRight>
    </DoorContainer>
  );
}
