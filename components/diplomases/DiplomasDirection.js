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
                                console.log(diploma.Year.Year, props.year)
                                if ((diploma.direction !== direction.Direction) && (diploma.Year.Year === props.year))
                                    return 1
                            }
                        })

                        return (
                            <Accordion key={direction.id}>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {direction.Direction}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse style={{color: 'black'}} eventKey="0">
                                        <Card.Body>
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