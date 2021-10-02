import React from "react";
import {
  FloorTitle,
  ImageBackground,
  ImgChangeButton,
  IndicatorContainer,
  Indicator,
  ContentButtonContainer,
  ContentLink,
  ContentImgSection,
  ContentImgContainer,
  ContentImg,
  StackList,
  StackIcon,
  ScreenDesc,
} from "./ProjectContent.elements";

import { content } from "../Data";

const ProjectContent = ({
  floor,
  imgIdx,
  slideIdx,
  setImgIdx,
  setSlideIdx,
}) => {
  const imgLen = content[floor].img.length; // 층 수 별로 다른 이미지 개수

  // dynamically create imgs
  const previews = [];
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

  // image change
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

  // Indicator change
  const changeIndicator = (imgIdx) => {
    setImgIdx(imgIdx); // Dot 눌렀을 때 이미지 변환 여부를 결정 -> 해당 코드 없으면 Dot은 눌려도 이미지는 바뀌지 않음.
    setSlideIdx(imgIdx); // Dot 눌림 여부를 결정
  };

  //stacks 반응형 적용
  var stack = content[floor].stack;
  const stacks = stack.map((s) => {
    const icon = `fab fa-${s}`;
    return <StackIcon key={s} className={icon}></StackIcon>;
  });

  return (
    <>
      <ImageBackground>
        <FloorTitle>{content[floor].name}</FloorTitle>
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
          {Array.from({ length: imgLen }).map((item, dotIdx) => (
            <Indicator
              onClick={() => changeIndicator(dotIdx)}
              active={slideIdx === dotIdx ? "dotActive" : "dotInactive"}
              key={dotIdx}
            />
          ))}
        </IndicatorContainer>

        <StackList length={stack.length}>{stacks}</StackList>
        <ScreenDesc>{content[floor].description}</ScreenDesc>
      </ImageBackground>

      <ContentButtonContainer>
        <ContentLink href={content[floor].demo} target="_blank">
          Demo
        </ContentLink>
        <ContentLink href={content[floor].code} target="_blank">
          Source Code
        </ContentLink>
      </ContentButtonContainer>
    </>
  );
};

export default ProjectContent;
