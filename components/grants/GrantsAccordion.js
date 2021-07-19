import React from 'react';
import {Accordion, Card, Button, Row, Col} from "react-bootstrap";
import Grant from "./Grant";

const GrantsAccordion = (props) => {
    return (
        <Accordion style={{backgroundColor: 'white'}}>
            <Card style={{backgroundColor: 'white'}}>
                <Card.Header >
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{backgroundColor: 'white', color: '#000066'}}>
                        {props.year}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className='text-black-80'>
                        {
                            props.grants.map(grant => {
                                if (grant.Year === props.year)
                                    return (
                                        <Row key={grant.id}>
                                            <Col>
                                                <Grant
                                                    name={grant.Name}
                                                    description={grant.Description}
                                                />
                                            </Col>
                                        </Row>
                                    )
                            })
                        }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default GrantsAccordion;