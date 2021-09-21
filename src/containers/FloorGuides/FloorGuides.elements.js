import styled from "styled-components";

export const FloorGuidesStyle = styled.div`
display: grid;
position:relative;
grid-template-columns: repeat(${(props)=>props.floors}, 1fr);  position: absolute; //appe.js의 floors에 층 개수 설정
right:17%;
top: 15%;

width: 66%;
border: solid #494949 3px;
background-color: #FFFEFA;
height: 70%;

`;
