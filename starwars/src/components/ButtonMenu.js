import React, { useState } from "react";
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';


const ButtonMenu = (props) => {
    const [pageNumber, setPageNumber] = useState(1);

    const StyledDiv = styled.div`
        display:flex;
        justify-content:space-around;
        margin:2% 0%;
    `;

    return (
        <>
            <h1 className="Header">Page {pageNumber}</h1>
            <StyledDiv>
                <Button primary onClick={() => { props.linkHandler(props.data.previous); setPageNumber(pageNumber - 1) }}>Last Page</Button>
                <Button primary onClick={() => { props.linkHandler(props.data.next); setPageNumber(pageNumber + 1) }}>Next Page</Button>
            </StyledDiv>
        </>
    )
}

export default ButtonMenu;