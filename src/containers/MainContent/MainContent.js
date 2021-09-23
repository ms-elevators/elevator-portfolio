import React from "react";

// import components
import Speaker from "../../components/Speaker/Speaker";
import FloorGuides from "../FloorGuides/FloorGuides";
import Screen from "../Screen/Screen";
import Door from "../Door/Door";
import Navigation from "../Navigation/Navigation";

// import styled components
import {
  MainContainer,
  TopSection,
  BottomSection,
} from "./MainContent.elements";

const MainContent = ({
  sound,
  soundToggle,
  floor,
  hoverValue,
  isReady,
  contactFloor,
  changeFloor,
  onButtonHover,
  onButtonHoverOut,
  destination,
  doorActivate,
}) => {
  return (
    <>
      <MainContainer>
        <TopSection>
          <Speaker sound={sound} soundToggle={soundToggle} />
          {/* totalFloors에 총 층수 입력 */}
          <FloorGuides floor={floor} totalFloors="7" />{" "}
        </TopSection>

        <BottomSection>
          <Screen hoverValue={hoverValue} />
          <Door floor={floor} isReady={isReady} contactFloor={contactFloor} />
          <Navigation
            floor={floor}
            changeFloor={changeFloor}
            onButtonHover={onButtonHover}
            onButtonHoverOut={onButtonHoverOut}
            contactFloor={contactFloor}
            destination={destination}
            doorActivate={doorActivate}
          />
        </BottomSection>
      </MainContainer>
    </>
  );
};

export default MainContent;
