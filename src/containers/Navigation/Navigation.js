import React from "react";

import FloorButton from "../../components/FloorButton/FloorButton";
import {
  FloorButtonsOutline,
  FloorButtonsContainer,
} from "./Navigation.elements";

export default function Navigation({
  changeFloor,
  onButtonHover,
  onButtonHoverOut,
  contactFloor,
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
        showValue={i === contactFloor ? <i className="fas fa-phone"></i> : i}
      />
    );
  }
  return (
    <div className="navigation">
      <FloorButtonsOutline>
        <FloorButtonsContainer>{FloorButtons}</FloorButtonsContainer>
      </FloorButtonsOutline>
    </div>
  );
}
