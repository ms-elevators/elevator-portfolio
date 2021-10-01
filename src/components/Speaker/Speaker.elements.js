import styled from "styled-components";
import { ThemeProvider } from "styled-components";
// import theme(colors)
import theme from "../../style/theme";

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
