import {Accordion, Card, Container, Row, Button, Col} from 'react-bootstrap'
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Publications(props) {
    const [publications, setPublications] = useState([])
    const [years, setYears] = useState([])

    const fetchPublications = async () => {
        return (await axios.get('http://localhost:1337/publications')).data
    }

    const getYears = async (array) => {
        let years = []
        array.forEach(el => {
            if (years.indexOf(el.Year)) years.push(el.Year)
        })
        return years
    }

    useEffect(async () => {
        let publications = await fetchPublications()
        await publications.sort((a, b) => a.Year < b.Year ? 1 : -1)
        setPublications(publications)

        let years = await getYears(publications)
        await years.sort((a, b) => a < b ? 1 : -1)
        await setYears(years)
    }, [])


    return (
        <Container>
            <h3 align={'center'}>Публикации</h3>
            <div className='mt-3 mb-3 blockStyle d-flex justify-content-center align-items-center flex-column'>

                {
                    years.map((year, id) =>
                        <Row
                            style={{width: '80%', marginTop: '1vh'}}
                            key={id}
                        >
                            <Col>
                                <Accordion className='text-black-50'>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                {year}
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                {publications.map(publication => {
                                                    if(publication.Year === year){
                                                        return <>
                                                            {publication.Description}
                                                            <br/>
                                                        </>
                                                    }
                                                })}
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