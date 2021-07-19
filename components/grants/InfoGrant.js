import {Container, Col, Row} from 'react-bootstrap'
import React, {useEffect, useState} from "react";
import axios from "axios";
import GrantsAccordion from "./GrantsAccordion";

export default function InfoGrant(props) {
    const [grants, setGrants] = useState([])
    const [years, setYears] = useState([])

    const fetchGrants = async () => {
        return (await axios.get('http://localhost:1337/grants')).data
    }

    const getYears = async (array) => {
        let years = []
        array.forEach(el => {
            if (years.indexOf(el.Year)) years.push(el.Year)
        })
        return years
    }

    useEffect(async () => {
        let grants = await fetchGrants()
        await setGrants(grants)

        let years = await getYears(grants)
        await years.sort((a, b) => a < b ? 1 : -1)
        await setYears(years)
    }, [])


    return (
        <Container>
            <h3 align={'center'}>Информация о грантах</h3>
            <div
                className='mt-2 d-flex justify-content-center align-items-center flex-column blockStyle'
                style={{backgroundColor: '#308DE4'}}
            >
                {
                    years.map((year, id) => {
                        return (
                            <Row
                                style={{width: '80%', marginTop: '1vh'}}
                                key={id}
                            >
                                <Col>
                                    <GrantsAccordion
                                        year={year}
                                        grants={grants}
                                    />
                                </Col>
                            </Row>
                        )
                    })
                }

            </div>
        </Container>
    )
}