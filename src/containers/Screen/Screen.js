import React from "react";
import WaitingAnimation from "../../components/WaitingAnimation/WaitingAnimation";
import { content } from "../Data";

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
  WaitingPic,
} from "./Screen.elements";

export default function Screen({ hoverValue, wait , diff}) {
  // deconstruct content
  const { name, description, stack } = content[hoverValue];

  // dynamically create stack icons
  const stacks = stack.map((s) => {
    const icon = `fab fa-${s}`;
    return <StackIcon key={s} className={icon}></StackIcon>;
  });

  return (
    <LeftContainer>
      <ScreenOutline>
        <WaitingPic wait={wait}>
          <WaitingAnimation diff={diff}/>
        </WaitingPic>
        <ScreenContainer>
          <ScreenTitle>{name}</ScreenTitle>
          <ScreenDesc>{description}</ScreenDesc>
          <StackList length={stacks.length}>{stacks}</StackList>
        </ScreenContainer>
      </ScreenOutline>

      <SocialContainer>
        <SocialIcon
          key="instagram"
          href="https://instagram.com"
          target="_blank"
        >
          <i className="fab fa-instagram" />
        </SocialIcon>
        <SocialIcon key="github" href="https://github.com" target="_blank">
          <i className="fab fa-github" />
        </SocialIcon>
        <SocialIcon key="linkedin" href="https://linkedin.com" target="_blank">
          <i className="fab fa-linkedin" />
        </SocialIcon>
      </SocialContainer>
    </LeftContainer>
  );
}
