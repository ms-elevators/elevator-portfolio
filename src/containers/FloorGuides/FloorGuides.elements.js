import styled from "styled-components";
import theme from "../../style/theme";

export const FloorGuidesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.floors},
    1fr
  ); //app.js의 floors에 층 개수 설정 */

  width: 66%;
  margin: 1% auto;
  border: solid ${theme.GrebeGray} 3px;
  background-color: ${theme.FloorGuides};
  @media (max-width: 1024px) {
    height: 10vh;
    width: 70%;
  }

  @media (max-width: 800px) {
    margin: auto;
    height: 7vh;
  }
`;
