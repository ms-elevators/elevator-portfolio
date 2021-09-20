import React from "react";

import { StyledButton } from "./FloorButton.elements";

export default function FloorButton({
  floorNum,
  changeFloor,
  onButtonHover,
  onButtonHoverOut,
  showValue,
  destination,
}) {
  return (
    <StyledButton
      value={floorNum}
      onClick={() => changeFloor(floorNum)}
      onMouseOver={(e) => onButtonHover(e)}
      onMouseOut={() => onButtonHoverOut()}
      destination={destination}
    >
      {showValue}
    </StyledButton>
  );
}
