import React from "react";
import {
  SpeakerContainer,
  SoundStateContainer,
  SoundLED,
  SoundSwitch,
} from "./Speaker.elements";
import speakerImg from "../../image/Speaker.png";

const Speaker = ({ sound, soundToggle }) => {
  return (
    <SpeakerContainer>
      <img src={speakerImg} alt="speaker"></img>
      <SoundStateContainer>
        <SoundLED light={sound ? "on" : "off"} />
        <SoundSwitch
          onClick={() => {
            soundToggle(sound);
          }}
        />
        <p>
          Sound
          {/* <br />
          Switch */}
        </p>
      </SoundStateContainer>
    </SpeakerContainer>
  );
};

export default Speaker;
