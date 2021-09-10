import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  ContentButtonContainer,
  ContentLink,
  ContentImgContainer,
  ContentImg,
  DoorContainer,
  DoorInnerContent,
  DoorLeft,
  DoorRight,
} from "./Door.elements";

import { content } from "./Data";

// import css
import "./style.css";

export default function Door({ floor, isReady }) {
  const [imgIdx, setImgIdx] = useState(0);

  const previews = [];
  const imgLen = content[floor].img.length;

  for (let i = 0; i < imgLen; i++) {
    previews.push(
      <ContentImg
        src={content[floor].img[i]}
        alt={`img${i}`}
        current={i === imgIdx ? "block" : "none"}
      />
    );
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
      <DoorInnerContent>
        <ContentImgContainer>
          <button onClick={() => handlePrev()}>prev</button>
          {previews}
          <button onClick={() => handleNext()}>next</button>
        </ContentImgContainer>
        <ContentButtonContainer>
          <ContentLink href={content[floor].demo} target="_blank">
            Demo
          </ContentLink>
          <ContentLink href={content[floor].code} target="_blank">
            Source Code
          </ContentLink>
        </ContentButtonContainer>
      </DoorInnerContent>
      <CSSTransition in={isReady} timeout={2000} classNames="door-left">
        <DoorLeft className="door-left"></DoorLeft>
      </CSSTransition>
      <CSSTransition in={isReady} timeout={2000} classNames="door-right">
        <DoorRight className="door-right"></DoorRight>
      </CSSTransition>
    </DoorContainer>
  );
}
