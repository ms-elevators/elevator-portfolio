import React from "react";
import { FloorGuideStyle } from "./FloorGuide.elements";

export default function FloorGuide({
  floor,
  projectname,
  children,
  currentColor,
  last,
}) {
  const borderLine = last ? 0 : 1;

  return (
    <FloorGuideStyle currentColor={currentColor} borderLine={borderLine}>
      <span className="floor">{floor}F</span>
      <span className="title">{projectname}</span>
      <p>{children}</p>
    </FloorGuideStyle>
  );
}
