import styled from "styled-components";

export const DoorContainer = styled.div`
  width: 65%;
  height: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
  border: solid 2px #cccccc;
`;

export const DoorInnerContent = styled.div``;

export const ContentImgSection = styled.section`
  display: flex;
  overflow: hidden;
  width: 90%;
  margin-top: 7%;
  margin-left: 5%;
`;

export const Button = styled.button`
  margin-top: 25%;
  font-size: 1.2rem;
  padding: 10px;
  width: 3.5rem;
  height: 2.5rem;
  background-color: #323232;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
`;

export const ContentImgContainer = styled.section`
  width: 100%;
  height: 50vh;
  border: 1px solid #000000;
  position: relative;
  overflow: hidden;
`;

export const ContentImg = styled.img`
  width: 80%;
  height: 380px;
  margin: 1rem auto;

  opacity: ${(props) => props.current};
  position: absolute;
  left: 10%;
  transition: opacity 1s ease-in-out;
`;

export const ContentButtonContainer = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ContentLink = styled.a`
  margin: 1rem;
  padding: 0.5rem 2rem;
  text-decoration: none;
  background-color: #000000;
  color: #ffffff;
  border-radius: 5px;
  border: #ffffff 1px solid;
  width: 10rem;

  &:hover {
    transform: scale(1.1);
    background-color: #ffffff;
    color: #000000;
    border: #000000 1px solid;
  }
`;

export const CoverDoor = styled.div`
  background: #1f122c;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
`;

export const DoorLeft = styled(CoverDoor)`
  left: ${(props) => {
    return props.status === "open" ? "-50%" : 0;
  }};
  transition: left 2s ease-in-out;
`;

export const DoorRight = styled(CoverDoor)`
  right: ${(props) => {
    return props.status === "open" ? "-50%" : 0;
  }};
  transition: right 2s ease-in-out;
`;

export const Text = styled.div`
  fontsize: 10px;
  color: white;
`;
