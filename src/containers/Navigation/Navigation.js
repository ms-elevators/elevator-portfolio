import React from "react";

import FloorButton from "../../components/FloorButton/FloorButton";
import FloorSign from "../FloorSign/FloorSign";
import {
  NavContentsContainer,
  DoorButtonContainer,
  DoorButton,
  FloorButtonsContainer,
  NavbarSection,
  ContactButton,
} from "./Navigation.elements";

export default function Navigation({
  floor,
  changeFloor,
  onButtonHover,
  onButtonHoverOut,
  contactFloor,
  destination,
  doorActivate,
}) {
  // floor buttons array
  const FloorButtons = [];
  for (let i = 1; i < 7; i++) {
    FloorButtons.push(
      <FloorButton
        key={i}
        floorNum={i}
        changeFloor={changeFloor}
        onButtonHover={onButtonHover}
        onButtonHoverOut={onButtonHoverOut}
        showValue={i}
        destination={i === destination ? true : false}
      />
    );
  }

  FloorButtons.push();
  return (
    <NavContentsContainer>
      <FloorSign floor={floor} />
      <NavbarSection>
        <FloorButtonsContainer>{FloorButtons}</FloorButtonsContainer>
        <ContactButton
          value={contactFloor}
          onClick={() => changeFloor(contactFloor)}
          onMouseOver={(e) => onButtonHover(e)}
          onMouseOut={() => onButtonHoverOut()}
          destination={contactFloor === destination ? true : false}
        >
          <i className="fas fa-phone"></i>
        </ContactButton>
        <DoorButtonContainer>
          <DoorButton onClick={() => (destination ? {} : doorActivate("open"))}>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-grip-lines-vertical"></i>
            <i className="fas fa-chevron-right"></i>
          </DoorButton>
          <DoorButton
            onClick={() => (destination ? {} : doorActivate("close"))}
          >
            <i className="fas fa-chevron-right"></i>
            <i className="fas fa-grip-lines-vertical"></i>
            <i className="fas fa-chevron-left"></i>
          </DoorButton>
        </DoorButtonContainer>
      </NavbarSection>
    </NavContentsContainer>
  );
}
