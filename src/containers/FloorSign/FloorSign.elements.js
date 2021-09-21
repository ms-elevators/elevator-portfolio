import styled from "styled-components";

export const FloorSignStyle = styled.div`
@font-face {
    font-family: 'LAB디지털';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/LAB디지털.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

position: relative;
right: 0;
margin-top: 3rem;
margin-right:4.5%;
width: 8%;
height: 60%;


background: #2C2C2C;
border: 7px solid #BEBEBE;
box-sizing: border-box;
box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
border-radius: 5px;
p{
margin:0px;
position:absolute;
right:30%;
top:15%;


font-family:  'LAB디지털'; //폰트 수정 
font-size: 33px;
line-height: 43px;

color: #CF3434;
z-index: 1;
}
.gray{
    color: #343434;
    z-index:0;

}

`;