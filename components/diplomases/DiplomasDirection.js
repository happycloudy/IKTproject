import React from 'react';
import {Accordion, Card, Button} from "react-bootstrap";
import Diplomas from "./Diplomas";


const DiplomasDirection = (props) => {
        return (
            <>
                {
                    props.directions.map(direction => {

                        const diplomas = props.diplomas.filter(diploma => {
                            if (diploma.Year) {
                                if ((diploma.direction !== direction.Direction) && (diploma.Year.Year === props.year))
                                    return 1
                            }
                        })

                        return (
                            <Accordion key={direction.id}>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{backgroundColor: 'white', color: '#000066'}}>
                                            {direction.Direction}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className='text-black-80'>
                                            <Diplomas diplomas={diplomas}/>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )
                    })
                }
            </>
        );
    }
;

export default DiplomasDirection;