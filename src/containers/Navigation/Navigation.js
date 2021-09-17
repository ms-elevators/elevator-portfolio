import React from "react";

import FloorButton from "../../components/FloorButton/FloorButton";
import { FloorButtonsContainer } from "./Navigation.elements";

export default function Navigation({
  changeFloor,
  onButtonHover,
  onButtonHoverOut,
  contactFloor,
}) {
  // floor buttons array
  const FloorButtons = [];
  for (let i = contactFloor - 1; i > 1; i -= 2) {
    FloorButtons.push(
      <FloorButton
        key={i - 1}
        floorNum={i - 1}
        changeFloor={changeFloor}
        onButtonHover={onButtonHover}
        onButtonHoverOut={onButtonHoverOut}
        showValue={i - 1}
      />
    );
    FloorButtons.push(
      <FloorButton
        key={i}
        floorNum={i}
        changeFloor={changeFloor}
        onButtonHover={onButtonHover}
        onButtonHoverOut={onButtonHoverOut}
        showValue={i}
      />
    );
  }

  FloorButtons.push(
    <FloorButton
      key={contactFloor}
      floorNum={contactFloor}
      changeFloor={changeFloor}
      onButtonHover={onButtonHover}
      onButtonHoverOut={onButtonHoverOut}
      showValue={<i className="fas fa-phone"></i>}
    />
  );
  return (
    <div className="navigation">
      <FloorButtonsContainer>{FloorButtons}</FloorButtonsContainer>
    </div>
  );
}
