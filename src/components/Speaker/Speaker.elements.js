import styled from "styled-components";

export const SpeakerContainer = styled.div`
  position: fixed;
  width: 10%;
  top: 8%;
  left: 8%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 55%;
    height: 55%;
  }
`;

export const SoundStateContainer = styled.div`
  width: 40%;

  p,
  i {
    margin: 0;

    color: #494949;
    font-size: 0.7rem;
  }
`;

export const SoundLED = styled.div`
  width: 2vh;
  padding-bottom: 1.5vh;
  margin: 20% auto;

  border-radius: 100%;
  border: 2px solid ${(props) => (props.light === "on" ? "#00ff00" : "#ff0000")};

  background-color: ${(props) =>
    props.light === "on" ? "#00ff00ee" : "#ff0000ee"};
  box-shadow: 0 0 3px 3px
    ${(props) => (props.light === "on" ? "#00ff00aa" : "#ff0000aa")};
`;

export const SoundSwitch = styled.div`
  width: 1.8vh;
  padding-bottom: 1.3vh;
  margin: 30% auto 10% auto;

  border-radius: 100%;
  border: 2px solid #aaaaaa;

  background-color: #494949;
  box-shadow: 0 0 3px 1px #333333ef;

  cursor: pointer;

  &:active {
    box-shadow: none;
  }
`;
