import React from "react";
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';


const ButtonMenu = (props) => {
    const StyledDiv = styled.div`
        display:flex;
        justify-content:space-around;
        margin:2% 0%;
    `;
    return (
        <StyledDiv>
            <Button primary onClick={() => { props.linkHandler(props.data.previous) }}>Last Page</Button>
            <Button primary onClick={() => { props.linkHandler(props.data.next) }}>Next Page</Button>
        </StyledDiv>
    )
}

export default ButtonMenu;