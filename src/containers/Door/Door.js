import React, { useState } from "react";
import {
  ContentButtonContainer,
  ContentLink,
  ContentImgSection,
  ContentImgContainer,
  ContentImg,
  DoorContainer,
  DoorInnerContent,
  DoorLeft,
  DoorRight,
} from "./Door.elements";

import { content } from "./Data";

import Contact from "../../components/Contact/Contact";

export default function Door({ floor, isReady, contactFloor }) {
  const [imgIdx, setImgIdx] = useState(0);

  const previews = [];
  const imgLen = content[floor].img.length;
  if (content[floor]) {
    for (let i = 0; i < imgLen; i++) {
      previews.push(
        <ContentImg
          src={content[floor].img[i]}
          alt={`img${i}`}
          current={i === imgIdx ? 1 : 0}
        />
      );
    }
  }

  const handlePrev = () => {
    const prev = imgIdx === 0 ? imgLen - 1 : imgIdx - 1;
    setImgIdx(prev);
  };

  const handleNext = () => {
    const next = imgIdx === imgLen - 1 ? 0 : imgIdx + 1;
    setImgIdx(next);
  };

  return (
    <DoorContainer>
      {floor === contactFloor ? (
        <DoorInnerContent>
          <Contact />
        </DoorInnerContent>
      ) : (
        <DoorInnerContent>
          <ContentImgSection>
            <ContentImgContainer>{previews}</ContentImgContainer>
          </ContentImgSection>
          <ContentButtonContainer>
            <button onClick={() => handlePrev()}>prev</button>
            <button onClick={() => handleNext()}>next</button>
            <ContentLink href={content[floor].demo} target="_blank">
              Demo
            </ContentLink>
            <ContentLink href={content[floor].code} target="_blank">
              Source Code
            </ContentLink>
          </ContentButtonContainer>
        </DoorInnerContent>
      )}
      <DoorLeft status={isReady ? "open" : "close"}></DoorLeft>
      <DoorRight status={isReady ? "open" : "close"}></DoorRight>
    </DoorContainer>
  );
}
