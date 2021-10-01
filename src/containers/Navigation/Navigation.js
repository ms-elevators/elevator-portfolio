import React from "react";

// import button component
import FloorButton from "../../components/FloorButton/FloorButton";

// import styled components
import FloorSign from "../FloorSign/FloorSign";
import {
  NavContentsContainer,
  DoorButtonContainer,
  DoorButton,
  FloorButtonsContainer,
  NavbarSection,
  ContactButton,
  SocialContainer,
  SocialIcon,
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
  // dynamically create floor buttons
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
            <i class="fas fa-caret-left"></i>
            <i class="fas fa-caret-right"></i>
          </DoorButton>
          <DoorButton
            onClick={() => (destination ? {} : doorActivate("close"))}
          >
            <i class="fas fa-caret-right"></i>
            <i class="fas fa-caret-left"></i>
          </DoorButton>
        </DoorButtonContainer>
      </NavbarSection>
      <SocialContainer>
        <SocialIcon key="instagram" className="fab fa-instagram"></SocialIcon>
        <SocialIcon key="github" className="fab fa-github"></SocialIcon>
        <SocialIcon key="linkedin" className="fab fa-linkedin"></SocialIcon>
      </SocialContainer>
    </NavContentsContainer>
  );
}
