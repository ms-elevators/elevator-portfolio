import React from "react";

export default function FloorButton({
  floor,
  floorNum,
  changeFloor,
  onButtonHover,
  onButtonHoverOut,
}) {
  return (
    <input
      type="button"
      value={floorNum}
      onClick={() => changeFloor(floorNum)}
      onMouseOver={(e) => onButtonHover(e)}
      onMouseOut={() => onButtonHoverOut()}
    />
  );
}
