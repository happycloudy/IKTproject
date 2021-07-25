import React from 'react';
import {Accordion, Button, Card} from "react-bootstrap";

const Conference = (props) => {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{backgroundColor: 'white', color: '#000066'}}>
                        {props.title}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className='text-black-80'>
                        {props.description}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default Conference;