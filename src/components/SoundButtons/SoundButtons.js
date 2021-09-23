import React from "react";
import {
  SoundSettingContainer,
  SoundSettingTitle,
  SoundSettingButtonWrapper,
  SoundSettingButton,
} from "./SoundButtons.elements";

export default function SoundButtons({ initialSoundSettings }) {
  return (
    <SoundSettingContainer className="intro-container">
      <SoundSettingTitle>Would you like to allow sounds?</SoundSettingTitle>
      <SoundSettingButtonWrapper>
        <SoundSettingButton
          type="button"
          value="YES"
          onClick={() => {
            initialSoundSettings(true);
          }}
        ></SoundSettingButton>
        <SoundSettingButton
          type="button"
          value="NO"
          onClick={() => initialSoundSettings(false)}
        ></SoundSettingButton>
      </SoundSettingButtonWrapper>
    </SoundSettingContainer>
  );
}
