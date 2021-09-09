import React from "react";
import styled from "styled-components";
import FloorGuide from "../components/FloorGuide";
const FloorGuidesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); // grid with 7 equal width
  position: absolute;
  left: 20%;
  top: 9%;
  justify-content: space-evenly;
  width: 60%;
  border: solid #cccc;
  background-color: rgba(0, 0, 0, 0.1);
  height: 80%;
  z-index: 2;
`;

const currentColor = "rgba(255, 255, 0, 0.3)";

export default function FloorGuides({ floor }) {
  // dynamically create guides
  const guides = [];
  for (let i = 1; i < 8; i++) {
    const guide = (
      <FloorGuide
        floor={i}
        projectname={`project${i}`}
        currentColor={i === floor ? currentColor : ""} // props to add yellow bg color only on current floor
      >
        description for project {i}
      </FloorGuide>
    );
    guides.push(guide);
  }

  return <FloorGuidesStyle>{guides}</FloorGuidesStyle>;
}
