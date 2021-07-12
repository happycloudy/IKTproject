import {Container, Col, Row, Accordion, Card, Button} from 'react-bootstrap'
import React, {useEffect, useState} from "react";
import axios from "axios";
import Conference from "./Conference";

export default  function Conferences() {
    const [conferences, setConferences] = useState([])
    const [years, setYears] = useState([])

    const fetchConferences = async () => {
        return (await axios.get('http://localhost:1337/conferences')).data
    }

    const getYears = async (conferences) => {
        let years = []
        conferences.forEach(conference => {
            if( years.indexOf(conference.Year)) years.push(conference.Year)
        })
        return years
    }

    useEffect(async () => {
        let conferences = await fetchConferences()
        await conferences.sort((a, b) => a.Year < b.Year ? 1 : -1)
        setConferences(conferences)
        let years = await getYears(conferences)
        setYears(years)
    }, [])

    return (
        <Container>
            <h3 align={'center'}>Конференции</h3>
            <div className='mt-2 d-flex justify-content-center align-items-center flex-column blockStyle'>
                {
                    years.map((year,id) =>
                    <Row style={{width: '80%', marginTop: '1vh'}} key={id}>
                        <Col>
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {year}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className='text-black-50'>
                                            {
                                                conferences.map(conference => {
                                                    if(conference.Year === year)
                                                        return (
                                                            <Conference
                                                                title={conference.Title}
                                                                description={conference.Description}
                                                                key={conference.id}
                                                            />
                                                        )
                                                })
                                            }

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                )
                }
            </div>
        </Container>
    )
}