import styled , { keyframes } from "styled-components";
import theme from "../../style/theme";


const blink = keyframes`
0% { 
  background: ${theme.ContactButton};
}
99.9%{
  background: rgba(246, 223, 44, 1);
}

100% {
  background: rgba(246, 223, 44, 1);
}
`;


export const NavContentsContainer = styled.div`
  width: 18%;
  height: 100%;
  margin: auto;
`;

export const NavbarSection = styled.section`
  background-color: ${theme.Navbar};
  width: 85%;
  height: 50vh;
  margin: 5% auto;
  align-self: flex-start;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 2px ${theme.Navbar1} inset;
  box-shadow: 1px 1px 4px 0px ${theme.Navbar2};

  @media (max-width: 800px) {
    margin: 10% auto;
    height: 65%;
  }

  @media (max-width: 1024px) {
    padding: 0.7rem;
    height: 70%;
  }
`;

export const FloorButtonsContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 800px) {
    height: 70%;
  }

  @media (max-width: 1024px) {
    height: 70%;
  }
`;

export const ContactButton = styled.button`
  padding: 0.5rem;
  margin: 0.5rem auto;
  cursor: pointer;
  position: relative;
  z-index: 0;
  background: ${theme.ContactButton};
  
  animation: ${blink} 0.5s infinite;
  // transition: background-color 0.5s ease;

  color: ${theme.White};
  border: 1px solid
    ${(props) =>
      props.destination ? theme.StyleButtonBorder1 : theme.StyleButtonBorder2};

  box-sizing: border-box;
  box-shadow: 0.3px 0.3px 1px 0.5px rgba(100, 100, 100, 0.25),
    ${(props) => (props.destination ? `0px 0px 10px #99EDFF,` : "")} inset 1.3px
      1.3px 2px rgba(35, 35, 35, 0.18),
    inset -1px -1px 3px 1px rgba(220, 232, 231, 0.6);
  border-radius: 100%;
////여기//

  @media (min-width: 1440px) {
    margin: 1.2vw auto;
    transform: scale(1.2);
  }

  @media (max-width: 1024px) {
    margin: 1rem auto;
  }

  // prevent hover crash for contact button with overlay
  &::after {
    content: "";
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

export const DoorButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  display: flex;
  justify-content: center;

  @media (min-width: 1440px) {
    padding: 0 10%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DoorButton = styled.button`
  padding: 0.3rem 0.5rem;
  margin: 0.5rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  z-index: 0;
  background: ${theme.StyleButton};
  border: 1px solid ${theme.StyleButtonBorder2};
  height: 5%;

  box-sizing: border-box;
  box-shadow: 0.3px 0.3px 1px 0.5px rgba(100, 100, 100, 0.25),
    inset 1.3px 1.3px 2px rgba(35, 35, 35, 0.18),
    inset -1.3px -1.3px 4px 2px rgba(220, 232, 231, 0.6);
  border-radius: 5px;

  font-size: 1.3rem;
  width: 35%;
  i {
    margin: 0 10%;
  }


  :hover{
    transform: translateY(-1px);
    box-shadow: 
    inset 1.3px 1.3px 2px rgba(35, 35, 35, 0.18),

    5px 9px 2px rgba(0, 0, 0, 0.2);

    // 1px 4px 0 rgba(100, 100, 100, 0.5),

}

:active {
    position: relative; 
    top:4px;
    box-shadow: 
    inset 1.3px 1.3px 2px rgba(35, 35, 35, 0.18),

    1px 4px 0 rgba(100, 100, 100, 0.5); 
    color:rgba(192, 191, 191, 1);

}


  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    padding: 0.5rem 0.3rem;
    margin: 5% 0;
  }

  // prevent hover crash for contact button with overlay
  &::after {
    content: "";
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
export const SocialContainer = styled.div`
  border: solid 2px ${theme.Black};
  margin: 2rem auto;
  padding: 0.5rem;
  align-self: flex-end;
  background-color: ${theme.SoundState};
  box-shadow: 1px 1px 1px ${theme.Black};
  transform: rotate(5deg);
  @media (min-width: 800px) {
    opacity: 0;
  }
`;

export const SocialIcon = styled.i`
  font-size: 1.5rem;
  margin: 0.3rem;
  padding: 0.3rem;

  @media screen and (min-width: 1440px) {
    font-size: 2vw;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
