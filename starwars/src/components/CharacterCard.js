import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import Loader from "./PageLoader";


const CardExampleExtraContent = (props) => {
    const [species, setSpecies] = useState("");
    const [home, setHome] = useState("");

    useEffect(() => {
        axios.get(props.species[0])
            .then(response => setSpecies(response.data.name))
            .catch(error => console.log("Error", error));
    }, [props.species]);

    useEffect(() => {
        axios.get(props.home)
            .then(response => setHome(response.data.name))
            .catch(error => console.log("Error", error));
    }, [props.home]);

    const desc = `${props.name} is a ${props.height}cm and ${props.mass}kg ${species} from ${home}`;

    const StyledCard = styled(Card)`
        width:290px;
        height:180px;
        margin:2% 0% !important;
       ${() => (props.gender === 'male' ? `background:#89cff0 !important` : null)};
       ${() => (props.gender === 'female' ? `background:#f4c2c2 !important` : null)};
    `;


    return (
        <>
            {(!species) ? (<Loader />) :
                <StyledCard>
                    <Card.Content header={props.name} />
                    <Card.Content description={desc} />
                    <Card.Content extra>
                        <Icon name='plane' />
                        {props.transport} Vehicles and Starships
                </Card.Content>
                </StyledCard>
            }
        </>
    )
}

export default CardExampleExtraContent