import React from "react";
import {
  SoundSettingContainer,
  SoundSettingTitle,
  SoundSettingButtonWrapper,
  SoundSettingButton,
} from "./SoundButtons.elements";

export default function SoundButtons({ soundSettings }) {
  return (
    <SoundSettingContainer className="intro-container">
      <SoundSettingTitle>Would you like to allow sounds?</SoundSettingTitle>
      <SoundSettingButtonWrapper>
        <SoundSettingButton
          type="button"
          value="YES"
          onClick={() => {
            soundSettings(true);
          }}
        ></SoundSettingButton>
        <SoundSettingButton
          type="button"
          value="NO"
          onClick={() => soundSettings(false)}
        ></SoundSettingButton>
      </SoundSettingButtonWrapper>
    </SoundSettingContainer>
  );
}
