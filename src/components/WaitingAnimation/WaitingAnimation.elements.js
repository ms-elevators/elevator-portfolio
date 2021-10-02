import styled from "styled-components";


 export const WaitingAnimationStyle=styled.div`
 background-color: #555555;
 width:100%;
 height:100%;
 padding-top:10%;

p{
    font-size:2rem;
    color:#fff;
    margin:0;
}

 .m_scroll_arrows
{
  display: block;
  width: 4vw;
  height: 4vw;
  -ms-transform: rotate(225deg); /* IE 9 */
  -webkit-transform: rotate(225deg); /* Chrome, Safari, Opera */
  transform: rotate(225deg);
  ${(props) =>
    props.diff===null?    
    `                     
    -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);

    `:""}
   
  border-right: 0.5rem solid white;
  border-bottom: 0.5rem solid white;
  margin:0 auto;

  
  
}


.unu
{
  margin-top: 1px;
}

.unu, .doi, .trei
{
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
  
}

.unu
{
  -webkit-animation-delay: .1s;
  -moz-animation-delay: .1s;
  -webkit-animation-direction: alternate;
  
  animation-direction: alternate;
  animation-delay: alternate;
}

.doi
{
  -webkit-animation-delay: .2s;
  -moz-animation-delay: .2s;
  -webkit-animation-direction: alternate;
  
  animation-delay: .2s;
  animation-direction: alternate;
  
  margin-top: -6px;
}

.trei
{
  -webkit-animation-delay: .3s;
  -moz-animation-delay: .3s;
  -webkit-animation-direction: alternate;
  
  animation-delay: .3s;
  animation-direction: alternate;
  
  
  margin-top: -6px;
}
 @-webkit-keyframes mouse-scroll {

0%   { opacity: 0;}
50%  { opacity: .5;}
100% { opacity: 1;}
}
@-moz-keyframes mouse-scroll {

0%   { opacity: 0; }
50%  { opacity: .5; }
100% { opacity: 1; }
}
@-o-keyframes mouse-scroll {

0%   { opacity: 0; }
50%  { opacity: .5; }
100% { opacity: 1; }
}
@keyframes mouse-scroll {

0%   { opacity: 0; }
50%  { opacity: .5; }
100% { opacity: 1; }
}
 `