import React from 'react';
import {Button, Accordion, Card} from "react-bootstrap";

const Grant = (props) => {
    return (
        <Accordion className='mt-3 d-flex justify-content-center'>
            <Card className='w-80'>
                <Card.Header>
                    <Accordion.Toggle style={{backgroundColor: 'white', color: '#000066'}} as={Button} variant="link" eventKey="0">
                        {props.name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body >{props.description}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default Grant;