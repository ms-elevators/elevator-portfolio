import React, { useState } from "react";
import {
  FloorBackground,
  ContentButtonContainer,
  ContentLink,
  ContentImgSection,
  ContentImgContainer,
  ContentImg,
  DoorContainer,
  DoorInnerContent,
  DoorLeft,
  DoorRight,
  Button,
  Text,
  DoorFrameTop,
  DoorFrameBottom,
  DoorFrameLeft,
  DoorFrameRight,
  ContainerDot,
} from "./Door.elements";

import { content } from "./Data";

import Contact from "../../components/Contact/Contact";

import frameRight from "./frame-right.png";
import frameLeft from "./frame-left.png";
import frameTop from "./frame-top.png";
import frameBottom from "./frame-bottom.png";

import bgi from "./office.jpg"; //Photo by <a href="https://unsplash.com/@sunday_digital?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nastuh Abootalebi</a> on <a href="https://unsplash.com/s/photos/office?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

// isReady- App.js에서 받아온 것
export default function Door({ floor, isReady, contactFloor }) {
  const [imgIdx, setImgIdx] = useState(0);

  const previews = [];
  const imgLen = content[floor].img.length; // 층 수 별로 다른 이미지 개수
  if (content[floor]) {
    for (let i = 0; i < imgLen; i++) {
      previews.push(
        <ContentImg
          src={content[floor].img[i]}
          alt={`img${i}`}
          key={`img${i}`}
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

  const Dot = imgIdx => {
    setSlideIndex(imgIdx)
  };

  return (
    <DoorContainer>
      <FloorBackground src={bgi} alt="background" />
      <DoorFrameTop src={frameTop} alt="frame-top" />
      <DoorFrameBottom src={frameBottom} alt="frame-bottom" />
      <DoorFrameLeft src={frameLeft} alt="frame-left" />
      <DoorFrameRight src={frameRight} alt="frame-right" />
      {floor === contactFloor ? (
        <DoorInnerContent>
          <Contact />
        </DoorInnerContent>
      ) : (
        <DoorInnerContent>
          <ContentImgSection>
            <Button onClick={() => handlePrev()}>＜</Button>
            <ContentImgContainer>{previews}</ContentImgContainer>
            <Button onClick={() => handleNext()}>＞</Button>
          </ContentImgSection>
          <Text>
            {imgIdx + 1} / {imgLen}
          </Text>
          <ContainerDot>
            {Array.from({length: imgLen}).map((item, imgIdx) => (
                    <div 
                    onClick={() => Dot(imgIdx + 1)}
                    className={slideIndex === imgIdx + 1 ? "dotActive" : "dot"}
                    ></div>
              ))}
          </ContainerDot>

          <ContentButtonContainer>
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