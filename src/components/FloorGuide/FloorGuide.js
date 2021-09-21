import React from "react";
import {FloorGuideStyle} from "./FloorGuide.elements"


export default function FloorGuide({
  floor,
  projectname,
  children,
  currentColor,
}) {
  return (
    <FloorGuideStyle currentColor={currentColor}>
      <span className="floor">{floor}F</span><span className="title">{projectname}</span> 
      <p>{children}</p>
    </FloorGuideStyle>
  );
}
