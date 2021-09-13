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
  Button,
  Text,
} from "./Door.elements";

import { content } from "./Data";

// import css
import "./style.css";



// isReady- App.js에서 받아온 것
export default function Door({ floor, isReady }) {
  const [imgIdx, setImgIdx] = useState(0);

  const previews = [];
  const imgLen = content[floor].img.length; // 층 수 별로 다른 이미지 개수 

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
          <Button onClick={() => handlePrev()}>＜</Button>

          {previews}
          
          <Button onClick={() => handleNext()}>＞</Button>
        </ContentImgContainer>
        <Text>{imgIdx+1} / {imgLen}</Text> 
        


        

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
