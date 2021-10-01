import styled from "styled-components";
import "./fonts.css";
import theme from "../../style/theme";

export const Wrap = styled.div`
  font-family: "Montserrat", "Pretendard-ExtraLight", sans-serif;
  display: flex;
  justify-content: center;

  height: 100%;

  .back {
    margin-top: 5%;
    width: 80%;
    height: 88%;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 6px;

    @media (max-width: 1024px) {
      margin-top: 10%;
    }
  }
`;

export const Title = styled.div`
  margin: 6% auto 0 auto;
  width: 80%;
  display: flex;
  justify-content: start;

  #title {
    font-size: 1.6rem;
    color: ${theme.Title};

    @media (min-width: 1440px) {
      font-size: 1.8vw;
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  padding: 15px 0;
  width: 80%;
  height: 80%;
  text-align: center;

  .flex-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  #bottom {
    height: 80%;
  }

  #name {
    display: inline-block;
    width: 100%;
  }
  .input {
    margin: 5px;
    border-style: solid;
    border-width: 0 0 1px;
    border-radius: 3px;
    border-color: rgba(85, 85, 85, 0.8);

    @media (min-width: 1440px) {
      font-size: 1vw;
      padding: 0.8vw;
    }

    :focus {
      border-style: solid;
      border-color: ${theme.Focus};
    }
  }

  .flex-container-right {
    display: flex;
    flex-direction: row;
    justify-content: end;
    height: 15%;

    @media (max-height: 900px) {
      height: 10%;
    }
  }

  .span-container {
    padding-right: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  #reply {
    color: ${theme.Reply};

    @media (min-width: 1440px) {
      font-size: 1.2vw;
    }
  }

  .button {
    width: 90px;
    height: 35px;
    cursor: pointer;
    font-size: 1.2rem;
    color: ${theme.Button};

    background-color: rgba(9, 9, 10, 0.8);

    border-style: solid;
    border-radius: 6px;
    border-color: ${theme.LightGray};
    transition: all 0.1s ease-in-out;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 1px 1px 0 rgba(0, 0, 0, 0.07);

    :hover {
      transform: scale(1.05);
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1),
        0 1px 1px 0 rgba(0, 0, 0, 0.09);
    }

    @media (min-width: 1440px) {
      width: 7vw;
      height: 3vw;
      font-size: 1.4vw;
    }
    @media (max-height: 900px) {
      height: 100%;
      font-size: 1rem;
    }
  }

  input {
    ::placeholder {
      color: rgba(85, 85, 85, 0.8);
    }
    padding: 5px 10px;
    width: 100%;
    height: 30px;
    outline: none;
    background-color: rgba(251, 254, 254, 0.8);
  }

  textarea {
    ::placeholder {
      color: rgba(85, 85, 85, 0.8);
    }
    padding: 10px 10px;
    width: 100%;
    height: 95%;
    min-height: 100px;
    resize: none;
    outline: none;
    background-color: rgba(251, 254, 254, 0.8);

    @media (min-width: 1440px) {
      font-size: 1vw;
      padding: 0.8vw;
    }
  }
`;
