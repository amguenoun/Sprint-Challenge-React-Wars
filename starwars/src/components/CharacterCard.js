import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


const CardExampleExtraContent = (props) => {
    const desc = `${props.name} is a ${props.height}cm and ${props.mass}kg person`;

    return (
        <Card>
            <Card.Content header={props.name} />
            <Card.Content description={desc} />
            <Card.Content extra>
                <Icon name='user' />
                {props.mass} Vehicles and Starships
    </Card.Content>
        </Card>
    )
}

export default CardExampleExtraContent