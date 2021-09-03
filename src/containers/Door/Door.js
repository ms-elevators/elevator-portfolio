import React from "react";
import { CSSTransition } from "react-transition-group";
import {
  DoorContainer,
  DoorInnerContent,
  DoorLeft,
  DoorRight,
} from "./Door.elements";

// import css
import "./style.css";

export default function Door({ floor, isReady }) {
  return (
    <DoorContainer>
      <DoorInnerContent>
        <h1>Current Floor: {floor}</h1>
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
