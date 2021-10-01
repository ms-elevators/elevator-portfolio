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
    height: 50%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    img {
      width: 60%;
      height: 50%;
    }
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
  @media (max-width: 800px) {
    width: 70%;
  }
`;

export const SoundSwitch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5% 20%;
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

  @media (max-width: 800px) {
    margin: 15% auto;
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
