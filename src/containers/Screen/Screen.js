import React from "react";
import { screenData } from "../Data";

// import styled components
import {
  LeftContainer,
  ScreenOutline,
  ScreenContainer,
  ScreenTitle,
  ScreenDesc,
  StackList,
  StackIcon,
  SocialContainer,
  SocialIcon,
} from "./Screen.elements";

export default function Screen({ hoverValue }) {
  // deconstruct screenData
  const { title, description, stack } = screenData[hoverValue];

  // dynamically create stack icons
  const stacks = stack.map((s) => {
    const icon = `fab fa-${s}`;
    return <StackIcon key={s} className={icon}></StackIcon>;
  });

  return (
    <LeftContainer>
      <ScreenOutline>
        <ScreenContainer>
          <ScreenTitle>{title}</ScreenTitle>
          <ScreenDesc>{description}</ScreenDesc>
          <StackList length={stacks.length}>{stacks}</StackList>
        </ScreenContainer>
      </ScreenOutline>

      <SocialContainer>
        <SocialIcon key="instagram" className="fab fa-instagram"></SocialIcon>
        <SocialIcon key="github" className="fab fa-github"></SocialIcon>
        <SocialIcon key="linkedin" className="fab fa-linkedin"></SocialIcon>
      </SocialContainer>
    </LeftContainer>
  );
}
