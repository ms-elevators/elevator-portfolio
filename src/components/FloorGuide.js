import React from 'react'
import styled from 'styled-components';

const FloorGuideStyle = styled.div`
    border:solid #cccccc 1px;
    text-align: left;
    word-break:break-all;
    overflow:hidden;
    padding: 2%;
    font-size: 0.5rem;
    height:100%;
    h4{
        margin:0;
        
    }

    
`
export default function FloorGuide({floor, projectname, children, width}) {
    
    return (
        
        <FloorGuideStyle style={{width:width}}>
            <h4>{floor}</h4> <br/>
            {projectname} <br />
            {children}
            
        </FloorGuideStyle>
        
    )
}
