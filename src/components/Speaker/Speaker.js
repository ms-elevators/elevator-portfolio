import React from "react";
import {
  SpeakerContainer,
  SoundStateContainer,
  SoundSwitch,
} from "./Speaker.elements";
import speakerImg from "../../image/Speaker.png";

const Speaker = ({ sound, soundToggle }) => {
  return (
    <SpeakerContainer>
      <img src={speakerImg} alt="speaker"></img>
      <SoundStateContainer>
        <SoundSwitch
          onClick={() => {
            soundToggle(sound);
          }}
          light={sound ? "on" : "off"}
        >
          {sound ? (
            <>
              <i className="fas fa-volume-up"></i>
              <p>On</p>
            </>
          ) : (
            <>
              <i className="fas fa-volume-mute"></i>
              <p>Off</p>
            </>
          )}
        </SoundSwitch>
      </SoundStateContainer>
    </SpeakerContainer>
  );
};

export default Speaker;
