import React from "react";
import { CSSTransition } from "react-transition-group";

// import css
import "./style.css";

export default function Door({ floor, isReady }) {
  return (
    <div className="Door door-container">
      <div className="door-inner-content">
        <h1>Current Floor: {floor}</h1>
      </div>
      <CSSTransition in={isReady} timeout={2000} classNames="door-left">
        <div className="door-left"></div>
      </CSSTransition>
      <CSSTransition in={isReady} timeout={2000} classNames="door-right">
        <div className="door-right"></div>
      </CSSTransition>
    </div>
  );
}
