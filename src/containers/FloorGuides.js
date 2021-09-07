import React from 'react'
import styled from 'styled-components';
import FloorGuide from '../components/FloorGuide';
const FloorGuidesStyle=styled.div`
    display: flex;
    position:absolute;
    left: 20%;
    top:9%;
    justify-content: space-evenly;
    width: 60%;
    border: solid #cccc;
    
    height:80%;
    
    .yellow-box{
        
        transition:2500ms;
        background-color: yellow;
        opacity:0.3;
        z-index: 4;
        position:absolute;
        left:0;
        display:block;
        
        height:100%;
    }

`

export default function FloorGuides({isReady, floor}) {
        const guideNum = 7;
        const width = 100/guideNum;
        
        
    return (
        <FloorGuidesStyle >
            <div className="yellow-box" style={{width:width+"%", left:width*(floor-1) + "%"}}> </div>
            <FloorGuide floor="1" projectname="title1" width={width+"%"} >dafsafdsfdsddddddddddddddddddd</FloorGuide>
            <FloorGuide floor="2" projectname="title1" width={width+"%"} >dadjjjjjjh</FloorGuide>
            <FloorGuide floor="3" projectname="title1" width={width+"%"} >dddddddddddddddddddddddddddddd</FloorGuide>
            <FloorGuide floor="4" projectname="title1" width={width+"%"} >dafsafdsfdsddddddddddddddddddd</FloorGuide>
            <FloorGuide floor="5" projectname="title1" width={width+"%"} >dafsafdsfdsddddddddddddddddddd</FloorGuide>
            <FloorGuide floor="6" projectname="title1" width={width+"%"} >dddddddddddddddddddddddddddddd</FloorGuide>
            <FloorGuide floor="7" projectname="title1" width={width+"%"} >dddddddddddddddddddddddddddddd</FloorGuide>
            
        </FloorGuidesStyle>
    )
}
