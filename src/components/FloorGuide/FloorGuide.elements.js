import styled from "styled-components";

export const FloorGuideStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');font-family:'PT Sans', sans-serif;
font-family: 'PT Sans', sans-serif;
text-align: left;

padding: 7%;
font-size: 0.5rem;
height: 100%;
background-color: ${(props) => props.currentColor || ""}; // if props exist add the color as background
overflow: hidden;
text-overflow:ellipsis;
position:relative;
::after{
  content:"";
  border-left:solid;
  border-left-width: ${(props)=>props.borderLine*2}px;
  position:absolute;
  right:0;
  top:15%;
  height:70%;
}

.floor{
  font-size:0.9rem;
  font-weight: 700;
}
.title{
  margin-left:0.5rem;
  font-size:0.8rem;
}

`;
