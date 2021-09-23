import React from "react";
import { SpeakerContainer, SoundStateLabel } from "./Speaker.elements";

const Speaker = ({ sound, soundToggle }) => {
  return (
    <SpeakerContainer>
      <i
        className="fas fa-volume-up"
        onClick={() => {
          soundToggle(sound);
        }}
      ></i>
      <SoundStateLabel>Sound: {sound ? "On" : "Off"}</SoundStateLabel>
    </SpeakerContainer>
  );
};

export default Speaker;
