import React from "react";
import { screenData } from "./Data";
import {
  ScreenContainer,
  ScreenTitle,
  ScreenDesc,
  StackList,
  StackIcon,
} from "./Screen.elements";

export default function Screen({ hoverValue }) {
  const { title, description, stack } = screenData[hoverValue];

  const stacks = stack.map((s) => {
    const icon = `fab fa-${s}`;
    return <StackIcon key={s} className={icon}></StackIcon>;
  });
  return (
    <>
      <ScreenContainer>
        <ScreenTitle>{title}</ScreenTitle>
        <ScreenDesc>{description}</ScreenDesc>
        <StackList>{stacks}</StackList>
      </ScreenContainer>
    </>
  );
}
