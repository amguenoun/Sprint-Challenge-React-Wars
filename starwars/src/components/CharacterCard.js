import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Card, Icon } from 'semantic-ui-react'


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

    return (
        <Card>
            <Card.Content header={props.name} />
            <Card.Content description={desc} />
            <Card.Content extra>
                <Icon name='plane' />
                {props.transport} Vehicles and Starships
    </Card.Content>
        </Card>
    )
}

export default CardExampleExtraContent