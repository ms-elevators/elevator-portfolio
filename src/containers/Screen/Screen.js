import React from "react";
import { screenData } from "./Data";
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
  const { title, description, stack } = screenData[hoverValue];

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
          <StackList>{stacks}</StackList>
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
