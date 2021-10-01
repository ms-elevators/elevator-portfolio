import styled from "styled-components";

export const FloorGuideStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');font-family:'PT Sans', sans-serif;
font-family: 'PT Sans', sans-serif;
text-align: left;
@media(max-width:800px){
   text-align:center;
   line-height :2rem;
  }

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

@media(min-width:1440px){
    font-size: 0.7vw;
}

.floor{
  font-size:0.9rem;
  font-weight: 700;

  @media(min-width:1440px){
    font-size: 1.2vw;
}

}
.title{
  margin-left:0.5rem;
  font-size:0.8rem;

  @media(min-width:1440px){
    font-size: 1vw;
  
}
  @media(max-width:800px){
    opacity:0;
    position:absolute;
  }
}
p{
  line-height: 1.2rem;
  line-break: break-all;
  overflow:hidden;
  text-overflow:ellipsis;
  max-height:2.4rem;
  @media(max-width:800px){
    opacity:0;
    position:absolute;
    
  }
}

`;
