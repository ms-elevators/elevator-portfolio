import React from "react";
import { CSSTransition } from "react-transition-group";
import {
  ContentButtonContainer,
  ContentLink,
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
  return (
    <DoorContainer>
      <DoorInnerContent>
        <ContentImg src={content[floor].img[1]} alt="img1" />
        <ContentButtonContainer>
          <ContentLink src={content[floor].demo}>Demo</ContentLink>
          <ContentLink src={content[floor].code}>Source Code</ContentLink>
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
