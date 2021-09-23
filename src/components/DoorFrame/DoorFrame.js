import frameRight from "./frame-right.png";
import frameLeft from "./frame-left.png";
import frameTop from "./frame-top.png";
import frameBottom from "./frame-bottom.png";

import {
  DoorFrameTop,
  DoorFrameBottom,
  DoorFrameLeft,
  DoorFrameRight,
} from "./DoorFrame.elements";

export const DoorFrame = () => {
  return (
    <>
      <DoorFrameTop src={frameTop} alt="frame-top" />
      <DoorFrameBottom src={frameBottom} alt="frame-bottom" />
      <DoorFrameLeft src={frameLeft} alt="frame-left" />
      <DoorFrameRight src={frameRight} alt="frame-right" />
    </>
  );
};
