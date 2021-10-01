import styled from "styled-components";
// import theme from "../../style/theme";

export const SpeakerContainer = styled.div`
  position: fixed;
  width: 12%;
  top: 8%;
  left: 7%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50%;
    height: 59%;
  }
`;

export const SoundStateContainer = styled.div`
  width: 40%;

  p,
  i {
    margin: 0;

    color: #494949;
    font-size: 0.7rem;

    @media (min-width: 1440px) {
      font-size: 0.9vw;
    }
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

  @media (min-width: 1440px) {
    transform: scale(1.2);
  }
`;

export const SoundSwitch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem 0.5rem;
  margin: 30% auto 10% auto;
  cursor: pointer;
  background: #b4bec1;

  border: 1px solid #c9cdce;

  border-radius: 3px;

  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  @media (min-width: 1440px) {
    margin: 35% auto 15% auto;
    transform: scale(1.2);
  }

  &:active {
    box-shadow: none;
  }

  i,
  p {
    font-size: 1.3rem;
    color: ${(props) => (props.light === "on" ? "#3C9D46ee" : "#DB3A24ee")};
    filter: drop-shadow(
      0 0 0.5px ${(props) => (props.light === "on" ? "#3C9D46ee" : "#DB3A24ee")}
    );

    &:active {
      box-shadow: none;
    }
  }

  p {
    margin: 0;
    margin-left: 15%;
    padding: 0;
    font-size: 0.8rem;
  }
`;
