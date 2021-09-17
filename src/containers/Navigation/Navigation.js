import React from "react";

import FloorButton from "../../components/FloorButton/FloorButton";
import {
  DoorButtonContainer,
  DoorButton,
  FloorButtonsContainer,
  NavbarSection,
} from "./Navigation.elements";

export default function Navigation({
  changeFloor,
  onButtonHover,
  onButtonHoverOut,
  contactFloor,
  destination,
  doorActivate,
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
        destination={i - 1 === destination ? true : false}
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
        destination={i === destination ? true : false}
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
      destination={contactFloor === destination ? true : false}
    />
  );
  return (
    <NavbarSection>
      <FloorButtonsContainer>{FloorButtons}</FloorButtonsContainer>
      <DoorButtonContainer>
        <DoorButton onClick={() => (destination ? {} : doorActivate("open"))}>
          <i class="fas fa-chevron-left"></i>
          <i class="fas fa-grip-lines-vertical"></i>
          <i class="fas fa-chevron-right"></i>
        </DoorButton>
        <DoorButton onClick={() => (destination ? {} : doorActivate("close"))}>
          <i class="fas fa-chevron-right"></i>
          <i class="fas fa-grip-lines-vertical"></i>
          <i class="fas fa-chevron-left"></i>
        </DoorButton>
      </DoorButtonContainer>
    </NavbarSection>
  );
}
