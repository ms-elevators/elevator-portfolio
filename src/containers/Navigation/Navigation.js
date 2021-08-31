import React from "react";

import "./style.css";

import FloorButton from "../../components/FloorButton";

export default function Navigation({
  changeFloor,
  onButtonHover,
  onButtonHoverOut,
}) {
  // floor buttons array
  const FloorButtons = [];
  for (let i = 1; i < 8; i++) {
    FloorButtons.push(
      <FloorButton
        key={i}
        floorNum={i}
        changeFloor={changeFloor}
        onButtonHover={onButtonHover}
        onButtonHoverOut={onButtonHoverOut}
      />
    );
  }
  return (
    <div className="navigation">
      <div className="floor-buttons">{FloorButtons}</div>
    </div>
  );
}
