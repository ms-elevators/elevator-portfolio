import React from "react";
import FloorGuide from "../../components/FloorGuide/FloorGuide";
import { content } from "../Data";
import { FloorGuidesStyle } from "./FloorGuides.elements.js";

export default function FloorGuides({ floor, totalFloors }) {
  // dynamically create guides
  const guides = []; //빈 배열에
  for (let i = 1; i < totalFloors; i++) {
    //총 개수 -1개의 안내박스 추가 (하나는 Contact층)
    const guide = (
      <FloorGuide
        floor={i}
        key={i}
        projectname={content[i].name} //data.js에서 프로젝트이름, 설명 수정
        currentColor={i === floor ? "#FCFF608A" : ""} // props to add yellow bg color only on current floor
      >
        {content[i].summary}
      </FloorGuide>
    );
    guides.push(guide);
  }

  // pass last prop to set no border for last block
  const last = true;
  const contactFloor = (
    <FloorGuide
      floor={totalFloors}
      key={totalFloors}
      projectname="Contact"
      currentColor={totalFloors * 1 === floor ? "#FCFF608A" : ""}
      last={last}
    >
      Do you want to contact me?
    </FloorGuide>
  );
  guides.push(contactFloor);

  return <FloorGuidesStyle floors={totalFloors}>{guides}</FloorGuidesStyle>;
}
