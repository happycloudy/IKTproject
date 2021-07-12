import {Container, Col, Row, Accordion, Card, Button} from 'react-bootstrap'
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Olympics(props) {
    const [olympics, setOlympics] = useState([])

    const fetchOlympics = async () => {
        return (await axios.get('http://localhost:1337/olympics')).data
    }

    useEffect(async () => {
        let olympics = await fetchOlympics()
        await olympics.sort((a, b) => a.Year < b.Year ? 1 : -1)
        setOlympics(olympics)
    }, [])

    return (
        <Container>
            <h3 align={'center'}>Информация об олимпиадах</h3>
            <div className='mt-2 d-flex justify-content-center align-items-center flex-column blockStyle'>
                {olympics.map(olympic =>
                    <Row style={{width: '80%', marginTop: '1vh'}} key={olympic.id}>
                        <Col>
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {olympic.Year}
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className='text-black-50'>
                                            {olympic.Description} <br/>
                                            <Button className='mt-3' href={'http://localhost:1337' + olympic.File.url}>
                                                Скачать пример
                                            </Button>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                )}
            </div>
        </Container>
    )
}