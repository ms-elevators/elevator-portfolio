import styled from "styled-components";

export const FloorButtonsOutline = styled.div`
  background-color: #555555;
  padding: 0.7rem;
  height: 100%;
  border-radius: 15px;
`;

export const FloorButtonsContainer = styled.div`
  background-color: #b9b9b9;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 1rem;
  padding: 2rem 1rem;
  border-radius: 10px;
  box-shadow: inset 0 0 3px 3px rgba(0, 0, 0, 0.5);
`;
