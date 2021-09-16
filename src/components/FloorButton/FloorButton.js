import React from "react";

import { StyledButton } from "./FloorButton.elements";

export default function FloorButton({
  floorNum,
  changeFloor,
  onButtonHover,
  onButtonHoverOut,
  showValue,
}) {
  return (
    <StyledButton
      value={floorNum}
      onClick={() => changeFloor(floorNum)}
      onMouseOver={(e) => onButtonHover(e)}
      onMouseOut={() => onButtonHoverOut()}
    >
      {showValue}
    </StyledButton>
  );
}
