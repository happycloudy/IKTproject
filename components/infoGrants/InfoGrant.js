import {Container, Col, Row, Collapse} from 'react-bootstrap'
import React, {useEffect, useState} from "react";
import Grant from "./Grant";
import axios from "axios";

export default function InfoGrant(props) {
    const [grants, setGrants] = useState([])

    const fetchGrants = async () => {
        let grants = (await axios.get('http://localhost:1337/grants')).data
        setGrants(grants)
    }

    useEffect(async () => {
        await fetchGrants()
    }, [])


    return (
        <Container>
            <h3 align={'center'}>Информация о грантах</h3>
            <div className='mt-3 mb-3 blockStyle'>
                {
                    grants.map(grant =>
                        <Row key={grant.id}>
                            <Col>
                                <Grant
                                    name={grant.Name}
                                    description={grant.Description}
                                />
                            </Col>
                        </Row>
                    )
                }
            </div>
        </Container>
    )
}