import React, { useState, useEffect } from "react";
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
  ImgChangeButton,
  IndicatorContainer,
  ContainerDot,
  ImageBackground,
} from "./Door.elements";

import { content } from "./Data";
import { DoorFrame } from "../../components/DoorFrame/DoorFrame";
import Contact from "../../components/Contact/Contact";

import bgi from "./office.jpg"; //Photo by <a href="https://unsplash.com/@sunday_digital?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nastuh Abootalebi</a> on <a href="https://unsplash.com/s/photos/office?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

// isReady- App.js에서 받아온 것
export default function Door({ floor, isReady, contactFloor }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);

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
    setSlideIdx(prev);
  };

  const handleNext = () => {
    const next = imgIdx === imgLen - 1 ? 0 : imgIdx + 1;
    setImgIdx(next);
    setSlideIdx(next);
  };

  const Dot = (imgIdx) => {
    setImgIdx(imgIdx); // Dot 눌렀을 때 이미지 변환 여부를 결정 -> 해당 코드 없으면 Dot은 눌려도 이미지는 바뀌지 않음.
    setSlideIdx(imgIdx); // Dot 눌림 여부를 결정
  };

  // 층이 바뀌면 imgIdx를 초기화, 처음 그림이 표시
  useEffect(() => {
    setSlideIdx(0);
    setImgIdx(0);
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
          <ImageBackground>
            <ContentImgSection>
              {/* 이전 버튼 */}
              <ImgChangeButton onClick={() => handlePrev()}>
                <i className="fas fa-chevron-left"></i>
              </ImgChangeButton>
              <ContentImgContainer>{previews}</ContentImgContainer>
              {/* 다음 버튼 */}
              <ImgChangeButton onClick={() => handleNext()}>
                <i className="fas fa-chevron-right"></i>
              </ImgChangeButton>
            </ContentImgSection>

            <IndicatorContainer>
              {Array.from({ length: imgLen }).map((item, imgIdx) => (
                <ContainerDot
                  onClick={() => Dot(imgIdx)}
                  active={slideIdx === imgIdx ? "dotActive" : "dotInactive"}
                ></ContainerDot>
              ))}
            </IndicatorContainer>
          </ImageBackground>

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
